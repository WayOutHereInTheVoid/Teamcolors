import re

with open('index.html', 'r') as f:
    content = f.read()

search_str = """          <svg width="260" height="260" viewBox="0 0 260 260">
            {/* Guide Polygons */}"""

new_str = """          <svg width="260" height="260" viewBox="-40 -40 340 340" style={{ maxWidth: '100%', height: 'auto' }}>
            {/* Guide Polygons */}"""

if search_str in content:
    content = content.replace(search_str, new_str)
    with open('index.html', 'w') as f:
        f.write(content)
    print("Fixed SVG viewBox successfully.")
else:
    print("Could not find SVG viewBox.")
