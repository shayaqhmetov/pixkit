import pixkit from '@pixkit/tailwind';
export default {
    content: ['./index.html', './src/**/*.{ts,tsx}'],
    theme: { extend: {} },
    plugins: [pixkit]
};