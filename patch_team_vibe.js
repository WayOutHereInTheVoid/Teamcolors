const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

const useMemoVibe = `
      const teamVibrationScores = useMemo(() => {
        const scores = {};
        teams.forEach(t => {
          scores[t.id] = calculateVibrationScore(t.colors);
        });
        return scores;
      }, [teams]);
`;

if (!content.includes('teamVibrationScores')) {
  content = content.replace('      const allLeagueColors = useMemo(() => {', useMemoVibe + '\n      const allLeagueColors = useMemo(() => {');
  fs.writeFileSync('index.html', content);
  console.log('teamVibrationScores injected');
} else {
  console.log('teamVibrationScores already exists');
}
