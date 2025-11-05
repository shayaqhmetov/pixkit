# PixKit 🎮

A pixel-art themed UI component library for React and React Native, built with TypeScript and modern design tokens.

## 🌐 Live Demo

Check out the components in action: **[https://shayaqhmetov.github.io/pixkit/](https://shayaqhmetov.github.io/pixkit/)**

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
import { Button, Panel, Accordion, Tabs, usePixTokens } from '@pixkit/react';
import '@pixkit/styles/index.css';

function App() {
  const tokens = usePixTokens();
  
  return (
    <Panel>
      <Button variant="primary">Click me!</Button>
      <div style={{ padding: tokens.px * 4, color: tokens.colors.accent }}>
        Using design tokens!
      </div>
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
import { tokens, usePixTokens, pixStyle } from '@pixkit/react';

// Hook usage
const MyComponent = () => {
  const tokens = usePixTokens();
  return <div style={{ color: tokens.colors.accent }}>Accent text</div>;
};

// Helper function
const StyledDiv = () => (
  <div style={pixStyle({ p: 4, bg: 'panel', radius: true })}>
    Quick styling!
  </div>
);

// Direct import
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
- **Card** - Flexible card component with Header, Title, Description, Content, and Footer subcomponents (shadcn-inspired)
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

# Deploy demo to GitHub Pages
pnpm deploy:web
```

## 📝 License

MIT © Ruslan Shayakhmetov

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines and [DEPLOYMENT.md](./DEPLOYMENT.md) for deploying the demo.

## 📮 Repository

[https://github.com/shayaqhmetov/pixkit](https://github.com/shayaqhmetov/pixkit)
