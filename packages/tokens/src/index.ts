export const tokens = {
    px: 4,
    radius: 8,
    border: 4,
    colors: {
        bg: '#1b1e2b',
        panel: '#24283b',
        fg: '#e1e3ed',
        muted: '#a6accd',
        accent: '#8be9fd',
        danger: '#ff5555',
        success: '#50fa7b'
    }
} as const;

export type PixTokens = typeof tokens;