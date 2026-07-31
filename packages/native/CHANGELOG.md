# @pixkit/native

## 0.5.0

### Minor Changes

- Add the canonical Qurbaqa theme. `@pixkit/tokens` now exports `qurbaqaColors` (dark+light hex tables generated from an OKLCH source), `qurbaqaRadii`, `qurbaqaShadows`, and `qurbaqaFonts`. `@pixkit/native` gains a theme context: `PixkitProvider` accepts `theme={mode,pixel,accent}` and exposes `useTheme()`/`useColors()`; all components resolve colors from the active theme (no more hardcoded palette), and new `Tag`, `Chip`, and `ProgressBar` components are added.

### Patch Changes

- Updated dependencies
  - @pixkit/tokens@0.4.0

## 0.4.7

### Patch Changes

- Forward testID prop to TouchableOpacity in Button component

## 0.4.6

### Patch Changes

- rename VCROSDMono font file to remove brackets from filename

## 0.3.0

### Minor Changes

- Added components for react

## 0.2.0

### Minor Changes

- Excluded web app

## 0.1.0

### Minor Changes

- Created stable publish config

### Patch Changes

- Configure publish setup
- Configured publish setup
