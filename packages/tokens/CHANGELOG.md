# @pixkit/tokens

## 0.4.0

### Minor Changes

- Add the canonical Qurbaqa theme. `@pixkit/tokens` now exports `qurbaqaColors` (dark+light hex tables generated from an OKLCH source), `qurbaqaRadii`, `qurbaqaShadows`, and `qurbaqaFonts`. `@pixkit/native` gains a theme context: `PixkitProvider` accepts `theme={mode,pixel,accent}` and exposes `useTheme()`/`useColors()`; all components resolve colors from the active theme (no more hardcoded palette), and new `Tag`, `Chip`, and `ProgressBar` components are added.

## 0.2.0

### Minor Changes

- Excluded web app

## 0.1.0

### Minor Changes

- Created stable publish config

### Patch Changes

- Configure publish setup
- Configured publish setup
