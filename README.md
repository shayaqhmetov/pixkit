# PixKit 🎮

A pixel-art themed UI component library for React and React Native, built with TypeScript and modern design tokens.

## 📦 Packages

PixKit is a monorepo containing multiple packages:

- **[@pixkit/react](./packages/react)** - React components with pixel-art styling
- **[@pixkit/native](./packages/native)** - React Native components
- **[@pixkit/styles](./packages/styles)** - CSS styles and design system
- **[@pixkit/tokens](./packages/tokens)** - Design tokens (colors, spacing, etc.)

## 🚀 Installation

Install the packages you need:

```bash
# For React web applications
npm install @pixkit/react @pixkit/styles

# For React Native applications
npm install @pixkit/native

# For design tokens
npm install @pixkit/tokens
```

## 📖 Usage

### React Components

```tsx
import { Button, Panel, Accordion, Tabs } from '@pixkit/react';
import '@pixkit/styles/index.css';

function App() {
  return (
    <Panel>
      <Button variant="primary">Click me!</Button>
      <Accordion>
        <Accordion.Item value="item-1">
          <Accordion.Trigger>Section 1</Accordion.Trigger>
          <Accordion.Content>Content goes here</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </Panel>
  );
}
```

### Design Tokens

```typescript
import { tokens } from '@pixkit/tokens';

// Access design tokens
const primaryColor = tokens.colors.accent; // '#8be9fd'
const spacing = tokens.px; // 4
const borderRadius = tokens.radius; // 8
```

### Styles

```css
/* Import all styles */
@import '@pixkit/styles/index.css';

/* Or import specific component styles */
@import '@pixkit/styles/buttons.css';
@import '@pixkit/styles/accordion.css';
```

## 🎨 Components

### @pixkit/react

- **Button** - Pixel-art styled buttons with multiple variants
- **Panel** - Container component with retro styling
- **Accordion** - Expandable/collapsible sections
- **Tabs** - Tab navigation component
- **Breadcrumb** - Navigation breadcrumb
- **Navigation** - Navigation menu
- **Sidebar** - Side navigation panel
- **CodeView** - Code display component

### @pixkit/native

- **Button** - Native button component
- **Panel** - Native panel component

## 🛠️ Development

This is a monorepo managed with [pnpm](https://pnpm.io/) and [Turbo](https://turbo.build/).

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Start development mode
pnpm dev

# Type check
pnpm typecheck

# Lint
pnpm lint
```

## 📝 License

MIT © Ruslan Shayakhmetov

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📮 Repository

[https://github.com/shayaqhmetov/pixkit](https://github.com/shayaqhmetov/pixkit)
