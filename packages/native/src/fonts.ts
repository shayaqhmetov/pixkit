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
