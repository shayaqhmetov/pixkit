export const tokens = {
    px: 4,
    radius: 8,
    border: 4,
    fontSizes: {
        regular: 16,
        large: 20,
        small: 12,
        title: 32,
        subtitle: 24,
    },
    sizes: {
        buttonHeight: 54,
        iconSize: 20,
    },
    colors: {
        bg: '#1b1e2b',
        white: '#e1e3ed',
        muted: '#a6accd',
        accent: '#8be9fd',
        danger: '#ff5555',
        success: '#6abe30',
        primary: '#1e3578',
        lightBlue: '#24283B',
        whitePlaceholder: '#737582',
    }
} as const;

export type PixTokens = typeof tokens;