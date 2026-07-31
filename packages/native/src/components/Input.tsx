import * as React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import type { TextInputProps } from 'react-native';
import { useColors } from '../PixkitProvider';

export type InputSize = 'sm' | 'md' | 'lg';

export type InputProps = TextInputProps & {
  size?: InputSize;
};

export const Input = React.forwardRef<TextInput, InputProps>(
  ({ style, size = 'md', ...props }, ref) => {
    const c = useColors();
    return (
      <TextInput
        ref={ref}
        style={[
          { borderWidth: 4, borderColor: c.line, backgroundColor: c.bgElev1, color: c.fg, paddingHorizontal: 8 },
          styles[size],
          style,
        ]}
        placeholderTextColor={c.fgSubtle}
        {...props}
      />
    );
  },
);

Input.displayName = 'Input';

const styles = StyleSheet.create({
  sm: { height: 32, fontSize: 12 },
  md: { height: 40, fontSize: 14 },
  lg: { height: 48, fontSize: 16 },
});
