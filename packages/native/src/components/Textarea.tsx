import * as React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import type { TextInputProps } from 'react-native';

export type TextareaSize = 'sm' | 'md' | 'lg';

export type TextareaProps = TextInputProps & {
  size?: TextareaSize;
};

export const Textarea = React.forwardRef<TextInput, TextareaProps>(
  ({ style, size = 'md', multiline = true, textAlignVertical = 'top', ...props }, ref) => (
    <TextInput
      ref={ref}
      multiline={multiline}
      textAlignVertical={textAlignVertical}
      style={[styles.base, styles[size], style]}
      {...props}
    />
  ),
);

Textarea.displayName = 'Textarea';

const styles = StyleSheet.create({
  base: {
    borderWidth: 4,
    borderColor: '#1a1b26',
    backgroundColor: '#24283b',
    color: '#e1e3ed',
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  sm: {
    minHeight: 60,
    fontSize: 12,
  },
  md: {
    minHeight: 90,
    fontSize: 14,
  },
  lg: {
    minHeight: 120,
    fontSize: 16,
  },
});
