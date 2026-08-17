const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

// We need to find the team card header area.
// It looks like:
/*
<div className="flex items-center gap-3">
  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center border border-slate-700">
    <Shield className="w-5 h-5 text-cyan-500" />
  </div>
  <div>
    <h3 className="text-xl font-bold text-white">{team.team}</h3>
    <div className="flex items-center gap-1.5 text-xs text-slate-400">
*/

const searchBlock = `                              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                                <Info className="w-3.5 h-3.5 text-amber-500" />
                                <span className="text-amber-500/90 font-medium">PLACEHOLDER — customizable</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">`;

const replaceBlock = `                              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                                <Info className="w-3.5 h-3.5 text-amber-500" />
                                <span className="text-amber-500/90 font-medium">PLACEHOLDER — customizable</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
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
                            })()}`;

if (content.includes(searchBlock)) {
  content = content.replace(searchBlock, replaceBlock);
  fs.writeFileSync('index.html', content);
  console.log('Team card badge injected');
} else {
  console.log('Could not find team card header block');
}
