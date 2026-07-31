import React, { createContext, useContext, useMemo } from 'react';
import { FONT_FAMILIES, type PixkitFont } from './fonts';
import {
  buildTheme,
  defaultTheme,
  type PixkitTheme,
  type ResolvedColors,
  type ThemeMode,
  type PixelIntensity,
} from './theme';

type ThemeInput = {
  mode?: ThemeMode;
  pixel?: PixelIntensity;
  accent?: string;
};

type PixkitContextValue = {
  font: PixkitFont;
  fontFamilies: (typeof FONT_FAMILIES)[PixkitFont];
  theme: PixkitTheme;
};

const PixkitContext = createContext<PixkitContextValue>({
  font: 'vcr-osd-mono',
  fontFamilies: FONT_FAMILIES['vcr-osd-mono'],
  theme: defaultTheme,
});

type FontFamilySet = { regular: string; medium: string; semibold: string; bold: string };

type Props = {
  font?: PixkitFont;
  /**
   * Override the font family names used by components. Lets a host app inject
   * its own loaded fonts (e.g. Inter Tight via @expo-google-fonts) instead of
   * the bundled `font` enum. Takes precedence over `font`.
   */
  fontFamilies?: FontFamilySet;
  /** Qurbaqa theme axes. Omit for the default dark/accents theme. */
  theme?: ThemeInput;
  children: React.ReactNode;
};

export function PixkitProvider({ font = 'vcr-osd-mono', fontFamilies, theme, children }: Props) {
  const resolved = useMemo(
    () => buildTheme(theme?.mode ?? 'dark', theme?.pixel ?? 'accents', theme?.accent ?? ''),
    [theme?.mode, theme?.pixel, theme?.accent],
  );
  const value = useMemo<PixkitContextValue>(
    () => ({ font, fontFamilies: fontFamilies ?? FONT_FAMILIES[font], theme: resolved }),
    [font, fontFamilies, resolved],
  );
  return <PixkitContext.Provider value={value}>{children}</PixkitContext.Provider>;
}

export function usePixkitFont() {
  return useContext(PixkitContext).fontFamilies;
}

/** Full resolved theme (colors, radii, fonts, mode, pixel, accent). */
export function useTheme(): PixkitTheme {
  return useContext(PixkitContext).theme;
}

/** Resolved color tokens for the active theme (semantic + legacy aliases). */
export function useColors(): ResolvedColors {
  return useContext(PixkitContext).theme.colors;
}
