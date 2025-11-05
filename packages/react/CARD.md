# Card Component

A flexible card component with composable sub-components, inspired by shadcn/ui.

## Usage

### Basic Card

```tsx
import { Card } from '@pixkit/react';

function Example() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Card Title</Card.Title>
        <Card.Description>Card description goes here</Card.Description>
      </Card.Header>
      <Card.Content>
        <p>Card content</p>
      </Card.Content>
      <Card.Footer>
        <button>Action</button>
      </Card.Footer>
    </Card>
  );
}
```

### Complete Example

```tsx
import { Card, Button } from '@pixkit/react';
import '@pixkit/styles/index.css';

function ProfileCard() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>User Profile</Card.Title>
        <Card.Description>
          Manage your account settings and preferences
        </Card.Description>
      </Card.Header>
      
      <Card.Content>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div>
            <strong>Name:</strong> John Doe
          </div>
          <div>
            <strong>Email:</strong> john@example.com
          </div>
          <div>
            <strong>Role:</strong> Developer
          </div>
        </div>
      </Card.Content>
      
      <Card.Footer>
        <Button variant="primary">Edit Profile</Button>
        <Button variant="default">Cancel</Button>
      </Card.Footer>
    </Card>
  );
}
```

### Simple Card (No Header/Footer)

```tsx
import { Card } from '@pixkit/react';

function SimpleCard() {
  return (
    <Card>
      <Card.Content>
        <h4>Quick Note</h4>
        <p>This is a simple card with just content.</p>
      </Card.Content>
    </Card>
  );
}
```

### Interactive Card

```tsx
import { Card } from '@pixkit/react';

function ClickableCard() {
  return (
    <Card 
      className="pix-card--interactive"
      onClick={() => console.log('Card clicked!')}
    >
      <Card.Header>
        <Card.Title>Clickable Card</Card.Title>
      </Card.Header>
      <Card.Content>
        Click anywhere on this card
      </Card.Content>
    </Card>
  );
}
```

### Compact Card

```tsx
import { Card } from '@pixkit/react';

function CompactCard() {
  return (
    <Card className="pix-card--compact">
      <Card.Header>
        <Card.Title>Compact</Card.Title>
      </Card.Header>
      <Card.Content>
        Less padding
      </Card.Content>
    </Card>
  );
}
```

### Card Grid

```tsx
import { Card } from '@pixkit/react';

function CardGrid() {
  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '16px' 
    }}>
      <Card>
        <Card.Header>
          <Card.Title>Feature 1</Card.Title>
          <Card.Description>Description for feature 1</Card.Description>
        </Card.Header>
        <Card.Content>Content here</Card.Content>
      </Card>
      
      <Card>
        <Card.Header>
          <Card.Title>Feature 2</Card.Title>
          <Card.Description>Description for feature 2</Card.Description>
        </Card.Header>
        <Card.Content>Content here</Card.Content>
      </Card>
      
      <Card>
        <Card.Header>
          <Card.Title>Feature 3</Card.Title>
          <Card.Description>Description for feature 3</Card.Description>
        </Card.Header>
        <Card.Content>Content here</Card.Content>
      </Card>
    </div>
  );
}
```

## Component API

### Card (Root)
The main container component.
- Accepts all standard `div` props
- Add custom classes for styling

### Card.Header
Container for the card header section.
- Typically contains `Card.Title` and `Card.Description`

### Card.Title
The card title heading.
- Renders as an `h3` element
- Styled with larger font and proper spacing

### Card.Description
Optional description text under the title.
- Renders as a `p` element
- Styled with muted color

### Card.Content
The main content area of the card.
- Use for your primary card content

### Card.Footer
Footer section for actions or additional info.
- Typically contains buttons or metadata
- Has a border-top separator

## Styling

### CSS Classes

- `.pix-card` - Base card styles
- `.pix-card--interactive` - Adds hover/click effects
- `.pix-card--compact` - Reduces padding

### CSS Variables Used

- `--panel` - Background color
- `--fg` - Text color
- `--muted` - Muted text color
- `--border` - Border width
- `--radius` - Border radius
- `--px` - Base spacing unit
- `--shadow` - Drop shadow

## Import Styles

```tsx
// Import all styles
import '@pixkit/styles/index.css';

// Or import just card styles
import '@pixkit/styles/card.css';
```
