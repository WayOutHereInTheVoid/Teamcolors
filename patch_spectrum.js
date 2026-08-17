const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

// 1. Add state variable
content = content.replace(
  "const [spectrumSortBy, setSpectrumSortBy] = useState('hue');",
  "const [spectrumSortBy, setSpectrumSortBy] = useState('hue');\n      const [spectrumFrictionOnly, setSpectrumFrictionOnly] = useState(false);"
);

// 2. Filter logic inside useMemo
const oldMemo = `      // Spectrum Grouped & Filtered List
      const spectrumColors = useMemo(() => {
        let list = [...allLeagueColors];

        if (searchQuery.trim()) {`;
const newMemo = `      // Spectrum Grouped & Filtered List
      const spectrumColors = useMemo(() => {
        let list = [...allLeagueColors];

        if (spectrumFrictionOnly) {
          const flaggedIds = new Set();
          Object.values(teamVibrationScores).forEach(vibe => {
            vibe.flagged.forEach(f => {
              flaggedIds.add(f.c1.id);
              flaggedIds.add(f.c2.id);
            });
          });
          list = list.filter(c => flaggedIds.has(c.id));
        }

        if (searchQuery.trim()) {`;
content = content.replace(oldMemo, newMemo);

// 3. Update dependencies
content = content.replace(
  "spectrumSortBy]);",
  "spectrumSortBy, spectrumFrictionOnly, teamVibrationScores]);"
);

// 4. Add UI button
const uiTarget = `                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-slate-400">Sort:</span>
                        <select
                          value={spectrumSortBy}`;
const uiNew = `                      <button
                        onClick={() => setSpectrumFrictionOnly(!spectrumFrictionOnly)}
                        className={\`px-3 py-1.5 rounded-xl text-xs font-semibold border transition flex items-center gap-1.5 \${
                          spectrumFrictionOnly
                            ? 'bg-amber-500/20 text-amber-400 border-amber-500/50'
                            : 'bg-slate-950 text-slate-400 border-slate-700 hover:text-white hover:border-slate-600'
                        }\`}
                      >
                        <AlertTriangle className="w-3.5 h-3.5" />
                        Friction Pairs Only
                      </button>

                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-slate-400">Sort:</span>
                        <select
                          value={spectrumSortBy}`;
content = content.replace(uiTarget, uiNew);

fs.writeFileSync('index.html', content);
console.log('Spectrum tab filtered patched');
