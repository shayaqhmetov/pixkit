/**
 * Example: Using PixKit Tokens
 * 
 * This file demonstrates various ways to use design tokens
 * in your PixKit applications.
 */

import React from 'react';
import { 
  Button, 
  Panel, 
  usePixTokens, 
  pixStyle,
  tokens 
} from '@pixkit/react';

// Example 1: Using the usePixTokens hook
export const TokenHookExample = () => {
  const tokens = usePixTokens();
  
  return (
    <div style={{
      padding: tokens.px * 4,
      backgroundColor: tokens.colors.panel,
      borderRadius: tokens.radius,
      color: tokens.colors.fg,
      border: `${tokens.border}px solid ${tokens.colors.accent}`
    }}>
      <h2>Using usePixTokens Hook</h2>
      <p>This component uses tokens for all styling values.</p>
    </div>
  );
};

// Example 2: Using the pixStyle helper
export const PixStyleExample = () => {
  return (
    <div style={pixStyle({ p: 4, bg: 'panel', radius: true })}>
      <h2>Using pixStyle Helper</h2>
      <div style={pixStyle({ p: 2, bg: 'bg', color: 'accent' })}>
        Nested styled element
      </div>
    </div>
  );
};

// Example 3: Direct token import
export const DirectTokenExample = () => {
  const cardStyle: React.CSSProperties = {
    padding: tokens.px * 6,
    margin: tokens.px * 2,
    backgroundColor: tokens.colors.panel,
    borderRadius: tokens.radius,
    boxShadow: `0 ${tokens.px}px ${tokens.px * 2}px rgba(0,0,0,0.3)`
  };
  
  return (
    <div style={cardStyle}>
      <h2 style={{ color: tokens.colors.accent }}>Direct Token Import</h2>
      <p style={{ color: tokens.colors.muted }}>
        Tokens imported at the top level
      </p>
    </div>
  );
};

// Example 4: Combining with PixKit components
export const CombinedExample = () => {
  const tokens = usePixTokens();
  
  return (
    <Panel style={{ 
      borderLeft: `${tokens.border}px solid ${tokens.colors.accent}` 
    }}>
      <h2 style={{ color: tokens.colors.fg }}>PixKit Panel</h2>
      <p style={{ color: tokens.colors.muted, marginBottom: tokens.px * 4 }}>
        Combining PixKit components with custom token styling
      </p>
      <Button variant="primary">
        Accent Button
      </Button>
      <Button 
        variant="danger" 
        style={{ marginLeft: tokens.px * 2 }}
      >
        Danger Button
      </Button>
    </Panel>
  );
};

// Example 5: Responsive spacing with tokens
export const ResponsiveExample = () => {
  const tokens = usePixTokens();
  const [spacing, setSpacing] = React.useState(4);
  
  return (
    <div style={pixStyle({ p: spacing, bg: 'panel', radius: true })}>
      <h3 style={{ color: tokens.colors.fg }}>
        Responsive Spacing: {spacing * tokens.px}px
      </h3>
      <Button onClick={() => setSpacing(s => Math.max(1, s - 1))}>
        Decrease
      </Button>
      <Button 
        onClick={() => setSpacing(s => Math.min(10, s + 1))}
        style={{ marginLeft: tokens.px * 2 }}
      >
        Increase
      </Button>
    </div>
  );
};

// Example 6: Creating a custom theme wrapper
export const ThemedContainer: React.FC<{ 
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'danger' | 'success';
}> = ({ children, variant = 'default' }) => {
  const tokens = usePixTokens();
  
  const variantColors = {
    default: tokens.colors.panel,
    accent: tokens.colors.accent,
    danger: tokens.colors.danger,
    success: tokens.colors.success,
  };
  
  return (
    <div style={{
      padding: tokens.px * 4,
      backgroundColor: variantColors[variant],
      borderRadius: tokens.radius,
      border: `${tokens.border}px solid ${tokens.colors.bg}`,
      color: variant === 'default' ? tokens.colors.fg : tokens.colors.bg
    }}>
      {children}
    </div>
  );
};

// Example 7: Using tokens in computed styles
export const ComputedStyleExample = () => {
  const tokens = usePixTokens();
  
  const getSpacingScale = (multiplier: number) => tokens.px * multiplier;
  const getColorWithOpacity = (color: string, opacity: number) => {
    return `${color}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`;
  };
  
  return (
    <div style={{
      padding: getSpacingScale(6),
      backgroundColor: getColorWithOpacity(tokens.colors.panel, 0.8),
      borderRadius: tokens.radius,
      backdropFilter: 'blur(10px)'
    }}>
      <h3 style={{ color: tokens.colors.accent }}>Computed Styles</h3>
      <p style={{ 
        color: tokens.colors.muted,
        marginTop: getSpacingScale(2)
      }}>
        Using helper functions with tokens
      </p>
    </div>
  );
};
