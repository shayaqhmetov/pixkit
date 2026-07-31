// Qurbaqa theme resolution for React Native. Turns the canonical hex token tables
// from @pixkit/tokens into a mode-aware `colors` object (plus radii + fonts) that
// components consume via useColors()/useTheme(). RN cannot parse oklch(), so the
// tokens are already hex (generated in @pixkit/tokens from the OKLCH source).

import {
  qurbaqaColors,
  qurbaqaRadii,
  qurbaqaFonts,
  type QurbaqaColors,
} from '@pixkit/tokens';

export type ThemeMode = 'light' | 'dark';
export type PixelIntensity = 'none' | 'accents' | 'full';

export type PixkitTheme = {
  mode: ThemeMode;
  pixel: PixelIntensity;
  accent: string; // resolved accent (override or brand500)
  colors: ResolvedColors;
  radii: { r1: number; r2: number; r3: number; r4: number; rPill: number };
  fonts: typeof qurbaqaFonts;
};

// Semantic tokens + legacy-name aliases so existing component code migrates with a
// simple identifier swap (white→fg, lightBlue→bgElev1, accent→brand500, danger→neg…).
export type ResolvedColors = QurbaqaColors & {
  accent: string;
  // legacy aliases (map the old flat @pixkit/tokens palette to Qurbaqa semantics)
  white: string;
  muted: string;
  whitePlaceholder: string;
  lightBlue: string;
  danger: string;
  success: string;
  primary: string;
};

function resolveColors(mode: ThemeMode, accentOverride?: string): ResolvedColors {
  const base = qurbaqaColors[mode];
  const accent = accentOverride && accentOverride.length ? accentOverride : base.brand500;
  return {
    ...base,
    accent,
    // legacy aliases
    white: base.fg,
    muted: base.fgMuted,
    whitePlaceholder: base.fgSubtle,
    lightBlue: base.bgElev1,
    danger: base.neg,
    success: base.pos,
    primary: base.brand600,
  };
}

export function buildTheme(
  mode: ThemeMode = 'dark',
  pixel: PixelIntensity = 'accents',
  accentOverride = '',
): PixkitTheme {
  const radii =
    pixel === 'full'
      ? { ...qurbaqaRadii.pixelFull, rPill: qurbaqaRadii.rPill }
      : {
          r1: qurbaqaRadii.r1,
          r2: qurbaqaRadii.r2,
          r3: qurbaqaRadii.r3,
          r4: qurbaqaRadii.r4,
          rPill: qurbaqaRadii.rPill,
        };
  return {
    mode,
    pixel,
    accent: resolveColors(mode, accentOverride).accent,
    colors: resolveColors(mode, accentOverride),
    radii,
    fonts: qurbaqaFonts,
  };
}

export const defaultTheme = buildTheme('dark', 'accents', '');
