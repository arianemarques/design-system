const fs = require('fs');

const tokens = JSON.parse(fs.readFileSync('tokens.json', 'utf8'));

function flatten(obj, prefix = '') {
  let result = {};
  for (const [key, value] of Object.entries(obj)) {
    const newKey = prefix ? `${prefix}-${key}` : key;
    if (typeof value === 'object' && value !== null) {
      Object.assign(result, flatten(value, newKey));
    } else {
      result[newKey] = value;
    }
  }
  return result;
}

const flat = flatten(tokens);
let css = ':root {\n';
for (const [key, value] of Object.entries(flat)) {
  // Replace underscores with hyphens for CSS variable names
  css += `  --${key.replace(/_/g, '-')}: ${value};\n`;
}
css += '}\n';

fs.writeFileSync('tokens.css', css);
console.log('✅ tokens.css generated');
