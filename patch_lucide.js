const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

const searchBlock = `    const FileImage = lucideObj.FileImage || lucideObj.Image || createIcon(<><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><polyline points="14 2 14 8 20 8"/><circle cx="10" cy="13" r="2"/><path d="m20 17-1.09-1.09a2 2 0 0 0-2.82 0L10 22"/></>);`;
const replaceBlock = searchBlock + `\n    const AlertTriangle = lucideObj.AlertTriangle || createIcon(<><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></>);`;

if (content.includes(searchBlock)) {
  content = content.replace(searchBlock, replaceBlock);
  fs.writeFileSync('index.html', content);
  console.log('Added AlertTriangle to manual icons');
} else {
  console.log('Could not find manual icons block');
}
