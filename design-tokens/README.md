# Design System Tokens

Generated from Figma on 03/27/2026, 07:12:00 PM

## 📁 Structure

```
design-tokens/
├── tokens/
│   └── variables.json          # All design tokens (colors, spacing, typography, etc.)
│
├── components/

│
└── README.md                   # This file
```

## 🎨 Variables (217 total)

Design tokens exported from Figma variables:

- **text/color/primary**: `#111111` (color)
- **bg/main**: `#fefcf5` (color)
- **bg/subtle**: `#ffffff` (color)
- **bg/inverted**: `#0a0a2a` (color)
- **text/color/contrast**: `#ffffff` (color)
- **text/color/accent-bold**: `#ff4d4d` (color)
- **border/subtle**: `#e8e5e0` (color)
- **border/bold**: `#0a0a2a` (color)
- **font/weight/black**: `700` (float)
- **font/weight/bold**: `600` (float)

... and 207 more

### Usage Example

```javascript
import tokens from './design-tokens/tokens/variables.json';

// Access tokens
const primaryColor = tokens.Colors?.primary?.value;
const spacing = tokens.Spacing?.base?.value;
```

## 🧩 Components (0 total)



## 🔄 Updates

This export includes:
- **217** new variables
- **0** updated variables
- **0** new components
- **0** updated components

## 📖 How to Use

### 1. Variables/Tokens

Use the `tokens/variables.json` file to:
- Generate CSS custom properties
- Create design token configs for your framework
- Keep design and code in sync

### 2. Components

Use the `components/*/metadata.json` files to:
- Understand component structure and variants
- Generate component code scaffolding
- Document component APIs

### 3. Integration

These JSON files can be consumed by:
- **Style Dictionary** - Transform tokens to various formats
- **Storybook** - Document components
- **Custom scripts** - Generate code from metadata

---

🤖 Generated with [Design System Sync Plugin](https://github.com/your-repo)
