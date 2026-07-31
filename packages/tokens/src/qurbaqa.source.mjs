// ============================================================================
// QURBAQA THEME — canonical source of truth (OKLCH)
// ----------------------------------------------------------------------------
// Hand-ported from the Claude Design "Qurbaqa Web" tokens. These OKLCH values
// are the single source both the web CSS (packages/vue/styles/qurbaqa.css) and
// the React Native hex tables (src/generated/qurbaqa.ts) derive from.
//
// React Native's color parser cannot read oklch(); scripts/generate.mjs converts
// each triple below to sRGB hex and writes the generated TS. Keep this file the
// ONLY place OKLCH values live, so web and native never drift.
//
// Color values are OKLCH triples: [L (0..1), C (chroma), H (hue degrees)].
// ============================================================================

/** Colors identical across light and dark (brand ramp, module accents, semantics). */
export const shared = {
  brand50: [0.97, 0.04, 145],
  brand100: [0.92, 0.08, 145],
  brand200: [0.85, 0.13, 145],
  brand300: [0.78, 0.16, 145],
  brand400: [0.72, 0.18, 145],
  brand500: [0.66, 0.18, 145],
  brand600: [0.58, 0.17, 145],
  brand700: [0.48, 0.14, 145],
  brand800: [0.36, 0.1, 145],
  brand900: [0.26, 0.07, 145],

  cFinance: [0.78, 0.16, 145],
  cFood: [0.78, 0.16, 60],
  cSport: [0.78, 0.16, 25],
  cGoals: [0.78, 0.16, 290],
  cHealth: [0.78, 0.14, 200],
  cWater: [0.78, 0.14, 220],

  pos: [0.78, 0.16, 145],
  neg: [0.72, 0.16, 25],
  warn: [0.82, 0.14, 80],
};

/** Surfaces + text — differ per mode. Keys must match between dark and light. */
export const dark = {
  bg: [0.18, 0.012, 165],
  bgElev1: [0.22, 0.014, 165],
  bgElev2: [0.26, 0.016, 165],
  bgElev3: [0.3, 0.018, 165],
  line: [0.32, 0.018, 165],
  lineSoft: [0.26, 0.014, 165],
  fg: [0.97, 0.01, 165],
  fgMuted: [0.74, 0.012, 165],
  fgSubtle: [0.55, 0.012, 165],
};

export const light = {
  bg: [0.985, 0.005, 145],
  bgElev1: [1.0, 0.0, 0],
  bgElev2: [0.97, 0.005, 145],
  bgElev3: [0.94, 0.008, 145],
  line: [0.88, 0.01, 145],
  lineSoft: [0.93, 0.006, 145],
  fg: [0.2, 0.01, 165],
  fgMuted: [0.42, 0.012, 165],
  fgSubtle: [0.6, 0.012, 165],
};

/** Non-color tokens (mode-independent). `pixelFull` overrides radii when pixel intensity = 'full'. */
export const radii = {
  r1: 4,
  r2: 8,
  r3: 12,
  r4: 16,
  rPill: 999,
  pixelFull: { r1: 0, r2: 2, r3: 4, r4: 6 },
};

export const shadows = {
  shadow1: '0 1px 2px rgba(0,0,0,0.25)',
  shadow2: '0 4px 16px rgba(0,0,0,0.30)',
  shadow3: '0 12px 40px rgba(0,0,0,0.40)',
};

export const fonts = {
  sans: '"Inter Tight", "Inter", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
  mono: '"JetBrains Mono", ui-monospace, "SF Mono", Menlo, monospace',
  pixel: '"Press Start 2P", "VT323", monospace',
  display: '"Inter Tight", -apple-system, system-ui, sans-serif',
  // React Native family names (loaded via @expo-google-fonts in the app):
  nativeSans: 'InterTight_400Regular',
  nativeSansMedium: 'InterTight_500Medium',
  nativeSansSemibold: 'InterTight_600SemiBold',
  nativeSansBold: 'InterTight_700Bold',
  nativePixel: 'PressStart2P_400Regular',
};
