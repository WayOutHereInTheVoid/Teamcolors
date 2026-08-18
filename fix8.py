import re

with open('index.html', 'r') as f:
    content = f.read()

search_str = """      const getLabelPos = (i) => {
        const dist = r + 20;
        return {
          x: cx + dist * Math.cos(angles[i]),
          y: cy + dist * Math.sin(angles[i])
        };
      };"""

new_str = """      const getLabelPos = (i) => {
        const dist = r + 30; // Increased distance to prevent clipping
        return {
          x: cx + dist * Math.cos(angles[i]),
          y: cy + dist * Math.sin(angles[i])
        };
      };"""

if search_str in content:
    content = content.replace(search_str, new_str)
    with open('index.html', 'w') as f:
        f.write(content)
    print("Fixed SVG label pos successfully.")
else:
    print("Could not find SVG label pos.")
