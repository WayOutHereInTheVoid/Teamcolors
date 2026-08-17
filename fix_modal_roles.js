const fs = require('fs');

const file = 'index.html';
let content = fs.readFileSync(file, 'utf8');

const search = `                                  {selectedTeam.colors.length > 2 && (
                                    <button
                                      onClick={() => handleDeleteColor(selectedTeam.id, color.id)}
                                      className="p-1 text-slate-500 hover:text-rose-400 transition"
                                      title="Remove Color"
                                    >
                                      <Trash2 className="w-3.5 h-3.5" />
                                    </button>
                                  )}
                                </div>
                              </div>
                            </div>

                            {/* Quick Format Copy Strip */}`;

const replace = `                                  {selectedTeam.colors.length > 2 && (
                                    <button
                                      onClick={() => handleDeleteColor(selectedTeam.id, color.id)}
                                      className="p-1 text-slate-500 hover:text-rose-400 transition"
                                      title="Remove Color"
                                    >
                                      <Trash2 className="w-3.5 h-3.5" />
                                    </button>
                                  )}
                                </div>
                                <div className="flex items-center gap-1 mt-1.5">
                                  {['primary', 'secondary', 'accent', 'neutral'].map(role => {
                                    const isActive = color.role === role;
                                    const labelFull = role.charAt(0).toUpperCase() + role.slice(1);
                                    const labelAbbr = role.charAt(0).toUpperCase();
                                    return (
                                      <button
                                        key={role}
                                        onClick={() => handleUpdateColor(selectedTeam.id, color.id, 'role', isActive ? null : role)}
                                        className={\`flex-1 text-[10px] font-bold rounded px-1 py-0.5 border transition \${isActive ? 'border-transparent' : 'border-slate-800 hover:border-slate-600 bg-slate-900 text-slate-500'}\`}
                                        style={isActive ? { backgroundColor: color.hex, color: getBestTextColor(color.hex) } : {}}
                                      >
                                        <span className="sm:hidden">{labelAbbr}</span>
                                        <span className="hidden sm:inline">{labelFull}</span>
                                      </button>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>

                            {/* Quick Format Copy Strip */}`;

if (!content.includes(search)) {
  console.log("Search block not found!");
} else {
  fs.writeFileSync(file, content.replace(search, replace));
  console.log("Replaced successfully!");
}
