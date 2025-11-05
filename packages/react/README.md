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

## Components

- **Button** - Pixel-art styled buttons with multiple variants
- **Panel** - Container component with retro styling
- **Accordion** - Expandable/collapsible sections
- **Tabs** - Tab navigation component
- **Breadcrumb** - Navigation breadcrumb
- **Navigation** - Navigation menu
- **Sidebar** - Side navigation panel
- **CodeView** - Code display component

## Peer Dependencies

- `react` >= 18
- `react-dom` >= 18

## License

MIT © Ruslan Shayakhmetov
