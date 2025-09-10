const pixkit = require('@pixkit/tailwind');
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: { extend: {} },
  plugins: [pixkit]
};