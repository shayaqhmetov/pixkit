import plugin from 'tailwindcss/plugin';

export default plugin(({ addBase, addUtilities }) => {
    addBase({
        ':root': {
            '--px': '4px',
            '--radius': '8px',
            '--border': '4px',
            '--bg': '#1b1e2b',
            '--panel': '#24283b',
            '--fg': '#e1e3ed',
            '--accent': '#8be9fd',
            '--danger': '#ff5555',
            '--success': '#50fa7b',
            '--shadow': 'drop-shadow(0 var(--px) 0 #000)'
        },
        '*': { imageRendering: 'pixelated' as any }
    });
    addUtilities({
        '.pix-panel': { background: 'var(--panel)', color: 'var(--fg)' },
        '.pix-outline': {
            outline: 'var(--border) solid var(--accent)',
            outlineOffset: '0'
        },
        '.pix-btn': {
            display: 'inline-flex', alignItems: 'center', gap: 'var(--px)',
            padding: 'calc(2*var(--px)) calc(3*var(--px))',
            lineHeight: '1',
            filter: 'var(--shadow)'
        }
    });
});
