# Using Tokens in PixKit

This guide shows how to use design tokens in your PixKit components and applications.

## What Changed

✅ **@pixkit/tokens** is now integrated into both `@pixkit/react` and `@pixkit/styles`
✅ **CSS variables** in `@pixkit/styles` are auto-generated from tokens
✅ **React hooks** available for programmatic access to tokens

## In React Components

### Option 1: Use the hook (Recommended)

```tsx
import { usePixTokens, pixStyle } from '@pixkit/react';

function MyComponent() {
  const tokens = usePixTokens();
  
  return (
    <div style={{
      padding: tokens.px * 4,
      backgroundColor: tokens.colors.panel,
      borderRadius: tokens.radius,
      color: tokens.colors.fg
    }}>
      Hello PixKit!
    </div>
  );
}
```

### Option 2: Use the helper function

```tsx
import { pixStyle } from '@pixkit/react';

function MyComponent() {
  return (
    <div style={pixStyle({ 
      p: 4,              // padding: 16px (4 * 4px)
      bg: 'panel',       // background: #24283b
      color: 'fg',       // color: #e1e3ed
      radius: true       // borderRadius: 8px
    })}>
      Easy styling!
    </div>
  );
}
```

### Option 3: Import tokens directly

```tsx
import { tokens } from '@pixkit/react';

const MyStyledComponent = () => (
  <div style={{ 
    margin: tokens.px * 2,
    color: tokens.colors.accent 
  }}>
    Direct access!
  </div>
);
```

## In CSS (using CSS Variables)

The `@pixkit/styles` package automatically generates CSS variables from tokens:

```css
.my-component {
  padding: calc(var(--px) * 4); /* 16px */
  background: var(--panel);      /* #24283b */
  color: var(--fg);              /* #e1e3ed */
  border-radius: var(--radius);  /* 8px */
}

.accent-text {
  color: var(--accent);          /* #8be9fd */
}

.danger-button {
  background: var(--danger);     /* #ff5555 */
}
```

## Available Tokens

### Spacing & Sizing
- `--px` / `tokens.px` → `4px` - Base spacing unit
- `--radius` / `tokens.radius` → `8px` - Border radius
- `--border` / `tokens.border` → `4px` - Border width

### Colors
- `--bg` / `tokens.colors.bg` → `#1b1e2b` - Background
- `--panel` / `tokens.colors.panel` → `#24283b` - Panel background
- `--fg` / `tokens.colors.fg` → `#e1e3ed` - Foreground/text
- `--muted` / `tokens.colors.muted` → `#a6accd` - Muted text
- `--accent` / `tokens.colors.accent` → `#8be9fd` - Accent/primary
- `--danger` / `tokens.colors.danger` → `#ff5555` - Danger/error
- `--success` / `tokens.colors.success` → `#50fa7b` - Success

## How It Works

1. **Source of Truth**: Design tokens are defined in `@pixkit/tokens/src/index.ts`
2. **CSS Generation**: When you build `@pixkit/styles`, it runs a script that generates `variables.css` from tokens
3. **React Integration**: `@pixkit/react` imports tokens and provides hooks/utilities

## Modifying Tokens

To change design tokens:

1. Edit `/packages/tokens/src/index.ts`:
```typescript
export const tokens = {
    px: 4,
    radius: 8,
    border: 4,
    colors: {
        accent: '#ff79c6', // Change accent color
        // ... other colors
    }
} as const;
```

2. Rebuild packages:
```bash
pnpm build
```

3. The changes will automatically propagate to:
   - CSS variables in `@pixkit/styles`
   - React components using tokens
   - TypeScript types

## Benefits

✅ **Single source of truth** - Change once, update everywhere
✅ **Type-safe** - TypeScript ensures you only use valid colors/values
✅ **Consistent** - All components use the same design system
✅ **Flexible** - Use in CSS or JavaScript as needed
