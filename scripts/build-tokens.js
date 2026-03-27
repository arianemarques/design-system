const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, '../tokens.json');
const outputPath = path.join(__dirname, '../docs/tokens.css');

const tokens = JSON.parse(fs.readFileSync(inputPath, 'utf8'));

function flattenTokens(obj, prefix = '') {
  let cssVars = {};
  for (const [key, value] of Object.entries(obj)) {
    const varName = prefix ? `${prefix}-${key}` : key;
    if (typeof value === 'object' && value !== null) {
      Object.assign(cssVars, flattenTokens(value, varName));
    } else {
      const cssKey = `--${varName.replace(/_/g, '-')}`;
      cssVars[cssKey] = value;
    }
  }
  return cssVars;
}

const cssVars = flattenTokens(tokens);

let css = ':root {\n';
for (const [key, value] of Object.entries(cssVars)) {
  css += `  ${key}: ${value};\n`;
}
css += '}\n';

fs.writeFileSync(outputPath, css);
console.log('✅ tokens.css generated');
