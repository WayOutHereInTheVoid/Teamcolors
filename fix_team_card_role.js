const fs = require('fs');

const file = 'index.html';
let content = fs.readFileSync(file, 'utf8');

const search = `                            {team.colors.map((color, idx) => (
                              <div
                                key={color.id || idx}
                                className="h-full flex-1 relative group/swatch transition-transform duration-200 hover:scale-[1.03]"
                                style={{ backgroundColor: color.hex }}
                                title={\`\${color.name}: \${color.hex}\`}
                              >
                                <span className="opacity-0 group-hover/swatch:opacity-100 absolute bottom-1 left-1/2 -translate-x-1/2 bg-slate-950/90 text-white text-[10px] font-mono px-1.5 py-0.5 rounded border border-slate-700 whitespace-nowrap shadow pointer-events-none transition">
                                  {color.hex}
                                </span>
                              </div>
                            ))}`;

const replace = `                            {team.colors.map((color, idx) => (
                              <div
                                key={color.id || idx}
                                className="h-full flex-1 relative group/swatch transition-transform duration-200 hover:scale-[1.03]"
                                style={{ backgroundColor: color.hex }}
                                title={\`\${color.name}: \${color.hex}\`}
                              >
                                {color.role && (
                                  <div className="absolute top-1 left-1 w-4 h-4 rounded bg-slate-950/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-[9px] font-bold text-white uppercase pointer-events-none shadow-sm">
                                    {color.role.charAt(0)}
                                  </div>
                                )}
                                <span className="opacity-0 group-hover/swatch:opacity-100 absolute bottom-1 left-1/2 -translate-x-1/2 bg-slate-950/90 text-white text-[10px] font-mono px-1.5 py-0.5 rounded border border-slate-700 whitespace-nowrap shadow pointer-events-none transition">
                                  {color.hex}
                                </span>
                              </div>
                            ))}`;

if (!content.includes(search)) {
  console.log("Search block not found!");
} else {
  fs.writeFileSync(file, content.replace(search, replace));
  console.log("Replaced successfully!");
}
