# @pixkit/native

Pixel-art themed React Native UI components for building retro-style mobile applications.

## Installation

```bash
npm install @pixkit/native
# or
yarn add @pixkit/native
# or
pnpm add @pixkit/native
```

## Usage

```tsx
import { Button, Panel } from '@pixkit/native';

function App() {
  return (
    <Panel>
      <Button title="Click me!" onPress={() => console.log('Pressed!')} />
    </Panel>
  );
}
```

## Components

- **Button** - Pixel-art styled button component
- **Panel** - Container component with retro styling

## Peer Dependencies

- `react` >= 18
- `react-native` >= 0.74

## License

MIT © Ruslan Shayakhmetov
