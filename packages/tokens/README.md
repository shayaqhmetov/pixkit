# @pixkit/tokens

Design tokens for the PixKit component library.

## Installation

```bash
npm install @pixkit/tokens
# or
yarn add @pixkit/tokens
# or
pnpm add @pixkit/tokens
```

## Usage

```typescript
import { tokens } from '@pixkit/tokens';

// Access design tokens
const primaryColor = tokens.colors.accent; // '#8be9fd'
const spacing = tokens.px; // 4
const borderRadius = tokens.radius; // 8
const borderWidth = tokens.border; // 4

// Colors
const colors = {
  background: tokens.colors.bg,      // '#1b1e2b'
  panel: tokens.colors.panel,        // '#24283b'
  foreground: tokens.colors.fg,      // '#e1e3ed'
  muted: tokens.colors.muted,        // '#a6accd'
  accent: tokens.colors.accent,      // '#8be9fd'
  danger: tokens.colors.danger,      // '#ff5555'
  success: tokens.colors.success,    // '#50fa7b'
};
```

## Available Tokens

- `px` - Base spacing unit (4px)
- `radius` - Border radius (8px)
- `border` - Border width (4px)
- `colors` - Color palette object
  - `bg` - Background color
  - `panel` - Panel background color
  - `fg` - Foreground/text color
  - `muted` - Muted text color
  - `accent` - Accent/primary color
  - `danger` - Danger/error color
  - `success` - Success color

## TypeScript

The package includes TypeScript definitions. The `PixTokens` type is exported for type safety.

```typescript
import { tokens, type PixTokens } from '@pixkit/tokens';
```

## License

MIT © Ruslan Shayakhmetov
