// Font sources and names used by @pixkit/native components.
// Consumers (Expo) can pass this into expo-font's useFonts().

// Keep keys in sync with fontFamily used inside components
export const PIXKIT_FONT_SOURCES = {
  'PixelifySans-Regular': require('../assets/fonts/Pixelify_Sans/static/PixelifySans-Regular.ttf'),
  'PixelifySans-Medium': require('../assets/fonts/Pixelify_Sans/static/PixelifySans-Medium.ttf'),
  'PixelifySans-SemiBold': require('../assets/fonts/Pixelify_Sans/static/PixelifySans-SemiBold.ttf'),
  'PixelifySans-Bold': require('../assets/fonts/Pixelify_Sans/static/PixelifySans-Bold.ttf'),
} as const;

export type PixkitFontName = keyof typeof PIXKIT_FONT_SOURCES;

export const pixkitFontFamilies = {
  regular: 'PixelifySans-Regular' as PixkitFontName,
  medium: 'PixelifySans-Medium' as PixkitFontName,
  semibold: 'PixelifySans-SemiBold' as PixkitFontName,
  bold: 'PixelifySans-Bold' as PixkitFontName,
} as const;
