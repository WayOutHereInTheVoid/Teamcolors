import re

with open('index.html', 'r') as f:
    content = f.read()

search_str = """      const labels = ["Saturation", "Brightness Range", "Hue Spread", "Contrast Range", "Warmth"];"""

new_str = """      const labels = ["Saturation", "Brightness", "Hue Spread", "Contrast", "Warmth"];"""

if search_str in content:
    content = content.replace(search_str, new_str)
    with open('index.html', 'w') as f:
        f.write(content)
    print("Fixed labels successfully.")
else:
    print("Could not find labels.")
