# @pixkit/react

Pixel-art themed React UI components for building retro-style applications.

## Installation

```bash
npm install @pixkit/react @pixkit/styles
# or
yarn add @pixkit/react @pixkit/styles
# or
pnpm add @pixkit/react @pixkit/styles
```

## Usage

```tsx
import { Button, Panel, Accordion, Tabs, usePixTokens, pixStyle } from '@pixkit/react';
import '@pixkit/styles/index.css';

function App() {
  const tokens = usePixTokens();
  
  return (
    <Panel>
      <Button variant="primary">Click me!</Button>
      
      {/* Use tokens directly */}
      <div style={{ 
        padding: tokens.px * 4,
        color: tokens.colors.accent 
      }}>
        Design tokens in action!
      </div>
      
      {/* Use the helper function */}
      <div style={pixStyle({ p: 4, bg: 'panel', radius: true })}>
        Quick styling!
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

## Using Design Tokens

PixKit includes integrated design tokens:

```tsx
import { usePixTokens, pixStyle, tokens } from '@pixkit/react';

// Hook (in components)
const tokens = usePixTokens();
const styles = { padding: tokens.px * 4 };

// Helper function
<div style={pixStyle({ p: 4, bg: 'panel', color: 'fg', radius: true })} />

// Direct import
const accentColor = tokens.colors.accent;
```

See [TOKENS_USAGE.md](../../TOKENS_USAGE.md) for detailed examples.

## Components

- **Button** - Pixel-art styled buttons with multiple variants
- **Panel** - Container component with retro styling
- **Card** - Flexible card with composable subcomponents (Header, Title, Description, Content, Footer)
- **Accordion** - Expandable/collapsible sections
- **Tabs** - Tab navigation component
- **Breadcrumb** - Navigation breadcrumb
- **Navigation** - Navigation menu
- **Sidebar** - Side navigation panel
- **CodeView** - Code display component

See [CARD.md](./CARD.md) for detailed Card component usage.

## Peer Dependencies

- `react` >= 18
- `react-dom` >= 18

## License

MIT © Ruslan Shayakhmetov
