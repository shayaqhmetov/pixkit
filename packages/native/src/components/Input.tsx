import * as React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import type { TextInputProps } from 'react-native';

export type InputSize = 'sm' | 'md' | 'lg';

export type InputProps = TextInputProps & {
  size?: InputSize;
};

export const Input = React.forwardRef<TextInput, InputProps>(
  ({ style, size = 'md', ...props }, ref) => (
    <TextInput
      ref={ref}
      style={[styles.base, styles[size], style]}
      {...props}
    />
  ),
);

Input.displayName = 'Input';

const styles = StyleSheet.create({
  base: {
    borderWidth: 4,
    borderColor: '#1a1b26',
    backgroundColor: '#24283b',
    color: '#e1e3ed',
    paddingHorizontal: 8,
  },
  sm: {
    height: 32,
    fontSize: 12,
  },
  md: {
    height: 40,
    fontSize: 14,
  },
  lg: {
    height: 48,
    fontSize: 16,
  },
});
