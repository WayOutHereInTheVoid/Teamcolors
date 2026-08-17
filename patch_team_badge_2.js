const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

const searchBlock = `                            <div className="flex items-center gap-1.5">
                              <button
                                className="p-1.5 text-slate-400 hover:text-white bg-slate-800 rounded-md hover:bg-slate-700 transition"`;

const replaceBlock = `                            <div className="flex items-center gap-1.5">
                              {(() => {
                                const vibe = teamVibrationScores[team.id];
                                let badgeColor = 'bg-green-500/20 text-green-400 border-green-500/30';
                                if (vibe.label === 'watch') badgeColor = 'bg-amber-500/20 text-amber-400 border-amber-500/30';
                                if (vibe.label === 'friction') badgeColor = 'bg-red-500/20 text-red-400 border-red-500/30';
                                return (
                                  <button
                                    onClick={(e) => { e.stopPropagation(); setSelectedTeamId(team.id); }}
                                    className={\`min-w-[44px] min-h-[44px] px-2 flex items-center justify-center text-[10px] font-bold uppercase tracking-wider rounded-xl border \${badgeColor}\`}
                                    title="Vibration Score (Tap for details)"
                                  >
                                    {vibe.label}
                                  </button>
                                );
                              })()}
                              <button
                                className="p-1.5 text-slate-400 hover:text-white bg-slate-800 rounded-md hover:bg-slate-700 transition"`;

if (content.includes(searchBlock)) {
  content = content.replace(searchBlock, replaceBlock);
  fs.writeFileSync('index.html', content);
  console.log('Team card badge injected');
} else {
  console.log('Could not find team card header button block');
}
