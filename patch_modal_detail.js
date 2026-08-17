const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

const searchBlock = `                  {/* Live Team Mockups */}`;

const replaceBlock = `                  {/* Vibe Flagged Detail Block */}
                  {(() => {
                    const vibe = teamVibrationScores[selectedTeam.id];
                    if (!vibe || vibe.flagged.length === 0) return null;
                    return (
                      <div className="bg-slate-900 border border-amber-500/30 rounded-2xl p-5 space-y-4">
                        <div className="flex items-center gap-2 text-amber-400 font-bold uppercase tracking-wider text-sm">
                          <AlertTriangle className="w-4 h-4" />
                          <span>Vibration Friction Detected</span>
                        </div>
                        <p className="text-sm text-slate-300">
                          The following color pairs have high saturation and similar hues, which may cause visual vibration or low contrast.
                          Suggestion: Try desaturating one of the colors in the pair.
                        </p>
                        <div className="space-y-3">
                          {vibe.flagged.map((f, i) => (
                            <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-3 bg-slate-950 p-3 rounded-xl border border-slate-800">
                              <div className="flex items-center gap-3">
                                <div className="flex items-center gap-1.5">
                                  <div className="w-5 h-5 rounded-md border border-slate-700" style={{ backgroundColor: f.c1.hex }} />
                                  <span className="text-xs font-semibold text-white">{f.c1.name}</span>
                                </div>
                                <span className="text-slate-500 text-xs px-1">vs</span>
                                <div className="flex items-center gap-1.5">
                                  <div className="w-5 h-5 rounded-md border border-slate-700" style={{ backgroundColor: f.c2.hex }} />
                                  <span className="text-xs font-semibold text-white">{f.c2.name}</span>
                                </div>
                              </div>
                              <div className="text-xs text-slate-400 sm:ml-auto">
                                Hue Dist: <span className="text-amber-400">{f.hueDist.toFixed(1)}°</span> • Sat 1: <span className="text-cyan-400">{Math.round(f.hsb1.s)}%</span> • Sat 2: <span className="text-cyan-400">{Math.round(f.hsb2.s)}%</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })()}

                  {/* Live Team Mockups */}`;

if (content.includes(searchBlock)) {
  content = content.replace(searchBlock, replaceBlock);
  fs.writeFileSync('index.html', content);
  console.log('Modal detail block injected');
} else {
  console.log('Could not find Live Team Mockups block');
}
