// Font sources and names used by @pixkit/native components.
// Consumers (Expo) pass PIXKIT_FONT_SOURCES into expo-font's useFonts().

const PIXELIFY_SANS_SOURCES = {
  'PixelifySans-Regular': require('../assets/fonts/Pixelify_Sans/static/PixelifySans-Regular.ttf'),
  'PixelifySans-Medium': require('../assets/fonts/Pixelify_Sans/static/PixelifySans-Medium.ttf'),
  'PixelifySans-SemiBold': require('../assets/fonts/Pixelify_Sans/static/PixelifySans-SemiBold.ttf'),
  'PixelifySans-Bold': require('../assets/fonts/Pixelify_Sans/static/PixelifySans-Bold.ttf'),
} as const;

const PRESS_START_2P_SOURCES = {
  'PressStart2P-Regular': require('../assets/fonts/PressStart2P/PressStart2P-Regular.ttf'),
} as const;

const VCR_OSD_MONO_SOURCES = {
  'VCROSDMono-Regular': require('../assets/fonts/VCROSDMono/VCROSDMono[NolivantNTEdit]-Regular.ttf'),
  'VCROSDMono-Medium': require('../assets/fonts/VCROSDMono/VCROSDMono[NolivantNTEdit]-Regular.ttf'),
  'VCROSDMono-SemiBold': require('../assets/fonts/VCROSDMono/VCROSDMono[NolivantNTEdit]-Regular.ttf'),
  'VCROSDMono-Bold':     require('../assets/fonts/VCROSDMono/VCROSDMono[NolivantNTEdit]-Regular.ttf'),
} as const;

// All font sources combined — pass this to Expo's useFonts()
export const PIXKIT_FONT_SOURCES = {
  ...PIXELIFY_SANS_SOURCES,
  ...PRESS_START_2P_SOURCES,
  ...VCR_OSD_MONO_SOURCES,
} as const;

export type PixkitFontName = keyof typeof PIXKIT_FONT_SOURCES;

export type PixkitFont = 'pixelify-sans' | 'press-start-2p' | 'vcr-osd-mono';

export const FONT_FAMILIES: Record<PixkitFont, { regular: string; medium: string; semibold: string; bold: string }> = {
  'pixelify-sans': {
    regular:  'PixelifySans-Regular',
    medium:   'PixelifySans-Medium',
    semibold: 'PixelifySans-SemiBold',
    bold:     'PixelifySans-Bold',
  },
  'press-start-2p': {
    regular:  'PressStart2P-Regular',
    medium:   'PressStart2P-Regular',
    semibold: 'PressStart2P-Regular',
    bold:     'PressStart2P-Regular',
  },
  'vcr-osd-mono': {
    regular: 'VCROSDMono-Regular',
    medium: 'VCROSDMono-Medium',
    semibold: 'VCROSDMono-SemiBold',
    bold: 'VCROSDMono-Bold',
  },
};

// Backward-compatible export (defaults to vcr-osd-mono)
export const pixkitFontFamilies = FONT_FAMILIES['vcr-osd-mono'];
