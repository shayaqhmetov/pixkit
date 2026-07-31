import * as React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import type { TextInputProps } from 'react-native';
import { useColors } from '../PixkitProvider';

export type TextareaSize = 'sm' | 'md' | 'lg';

export type TextareaProps = TextInputProps & {
  size?: TextareaSize;
};

export const Textarea = React.forwardRef<TextInput, TextareaProps>(
  ({ style, size = 'md', multiline = true, textAlignVertical = 'top', ...props }, ref) => {
    const c = useColors();
    return (
      <TextInput
        ref={ref}
        multiline={multiline}
        textAlignVertical={textAlignVertical}
        style={[
          { borderWidth: 4, borderColor: c.line, backgroundColor: c.bgElev1, color: c.fg, paddingHorizontal: 8, paddingVertical: 6 },
          styles[size],
          style,
        ]}
        placeholderTextColor={c.fgSubtle}
        {...props}
      />
    );
  },
);

Textarea.displayName = 'Textarea';

const styles = StyleSheet.create({
  sm: { minHeight: 60, fontSize: 12 },
  md: { minHeight: 90, fontSize: 14 },
  lg: { minHeight: 120, fontSize: 16 },
});
