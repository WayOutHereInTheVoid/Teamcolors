import sys
import re

with open('index.html', 'r') as f:
    html = f.read()

# check if opening script tag matches closing tag
match = re.search(r'<script type="text/babel">([\s\S]*?)</script>', html)
if match:
    # Just checking for basic syntax issues
    code = match.group(1)

    # Check for unclosed brackets or mismatched tags manually via simple parsing if needed
    print("Syntax extracted successfully.")
else:
    print("Failed to extract JS.")
