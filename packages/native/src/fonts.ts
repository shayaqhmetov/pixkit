// Font sources and names used by @pixkit/native components.
// Consumers (Expo) can pass this into expo-font's useFonts().

// Keep keys in sync with fontFamily used inside components
export const PIXKIT_FONT_SOURCES = {
  'VCROSDMono-Regular': require('../assets/fonts/VCROSDMono/VCROSDMono[NolivantNTEdit]-Regular.ttf'),
  'VCROSDMono-Medium': require('../assets/fonts/VCROSDMono/VCROSDMono[NolivantNTEdit]-Regular.ttf'),
  'VCROSDMono-SemiBold': require('../assets/fonts/VCROSDMono/VCROSDMono[NolivantNTEdit]-Regular.ttf'),
  'VCROSDMono-Bold': require('../assets/fonts/VCROSDMono/VCROSDMono[NolivantNTEdit]-Regular.ttf'),
} as const;

export type PixkitFontName = keyof typeof PIXKIT_FONT_SOURCES;

export const pixkitFontFamilies = {
  regular: 'VCROSDMono-Regular' as PixkitFontName,
  medium: 'VCROSDMono-Medium' as PixkitFontName,
  semibold: 'VCROSDMono-SemiBold' as PixkitFontName,
  bold: 'VCROSDMono-Bold' as PixkitFontName,
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
