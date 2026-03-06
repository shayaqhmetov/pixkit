// Font sources and names used by @pixkit/native components.
// Consumers (Expo) can pass this into expo-font's useFonts().

export const PIXELIFY_SANS_SOURCES = {
  'PixelifySans-Regular': require('../assets/fonts/Pixelify_Sans/static/PixelifySans-Regular.ttf'),
  'PixelifySans-Medium': require('../assets/fonts/Pixelify_Sans/static/PixelifySans-Medium.ttf'),
  'PixelifySans-SemiBold': require('../assets/fonts/Pixelify_Sans/static/PixelifySans-SemiBold.ttf'),
  'PixelifySans-Bold': require('../assets/fonts/Pixelify_Sans/static/PixelifySans-Bold.ttf'),
} as const;

export const PRESS_START_2P_SOURCES = {
  'PressStart2P-Regular': require('../assets/fonts/PressStart2P/PressStart2P-Regular.ttf'),
} as const;

// All font sources combined — pass this to Expo's useFonts()
export const PIXKIT_FONT_SOURCES = {
  ...PIXELIFY_SANS_SOURCES,
  ...PRESS_START_2P_SOURCES,
} as const;

export type PixkitFont = 'pixelify-sans' | 'press-start-2p';

export const FONT_FAMILIES: Record<PixkitFont, { regular: string; medium: string; semibold: string; bold: string }> = {
  'pixelify-sans': {
    regular: 'PixelifySans-Regular',
    medium: 'PixelifySans-Medium',
    semibold: 'PixelifySans-SemiBold',
    bold: 'PixelifySans-Bold',
  },
  'press-start-2p': {
    regular: 'PressStart2P-Regular',
    medium: 'PressStart2P-Regular',
    semibold: 'PressStart2P-Regular',
    bold: 'PressStart2P-Regular',
  },
};

// Backward-compatible export (defaults to pixelify-sans)
export const pixkitFontFamilies = FONT_FAMILIES['pixelify-sans'];
export type PixkitFontName = keyof typeof PIXKIT_FONT_SOURCES;
