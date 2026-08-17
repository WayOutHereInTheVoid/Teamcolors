const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

const calculateVibrationScore = `
    function calculateVibrationScore(colors) {
      const flagged = [];
      for (let i = 0; i < colors.length; i++) {
        for (let j = i + 1; j < colors.length; j++) {
          const c1 = colors[i];
          const c2 = colors[j];
          const rgb1 = hexToRgb(c1.hex);
          const rgb2 = hexToRgb(c2.hex);
          const hsb1 = rgbToHsb(rgb1.r, rgb1.g, rgb1.b);
          const hsb2 = rgbToHsb(rgb2.r, rgb2.g, rgb2.b);

          const hueDist = Math.min(Math.abs(hsb1.h - hsb2.h), 360 - Math.abs(hsb1.h - hsb2.h));
          if (hsb1.s > 70 && hsb2.s > 70 && hueDist < 60) {
            flagged.push({ c1, c2, hsb1, hsb2, hueDist });
          }
        }
      }

      let label = 'clean';
      if (flagged.length > 0) {
        label = flagged.length > 1 ? 'friction' : 'watch';
      }

      return { label, flagged, count: flagged.length };
    }
`;

if (!content.includes('function calculateVibrationScore')) {
  content = content.replace('    function getHueGroup(hex) {', calculateVibrationScore + '\n    function getHueGroup(hex) {');
  fs.writeFileSync('index.html', content);
  console.log('calculateVibrationScore injected');
} else {
  console.log('calculateVibrationScore already exists');
}
