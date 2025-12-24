import * as React from 'react';
import { Text, StyleSheet } from 'react-native';
import type { TextProps } from 'react-native';

export type BadgeVariant = 'default' | 'secondary' | 'destructive' | 'outline';

export type BadgeProps = TextProps & {
  variant?: BadgeVariant;
};

export const Badge: React.FC<BadgeProps> = ({ style, variant = 'default', ...props }) => (
  <Text
    style={[styles.base, styles[variant], style]}
    {...props}
  />
);

const styles = StyleSheet.create({
  base: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderWidth: 2,
    fontSize: 12,
  },
  default: {
    backgroundColor: '#24283b',
    borderColor: '#1a1b26',
    color: '#e1e3ed',
  },
  secondary: {
    backgroundColor: '#414868',
    borderColor: '#1a1b26',
    color: '#e1e3ed',
  },
  destructive: {
    backgroundColor: '#ff5555',
    borderColor: '#aa0000',
    color: '#000000',
  },
  outline: {
    backgroundColor: 'transparent',
    borderColor: '#e1e3ed',
    color: '#e1e3ed',
  },
});
