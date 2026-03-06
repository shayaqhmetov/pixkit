import * as React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';
import type { TextInputProps } from 'react-native';
import { tokens } from '@pixkit/tokens';
import { usePixkitFont } from '../PixkitProvider';

export type TextFieldProps = TextInputProps & {
  placeholder?: string;
  label?: string;
};

export const TextField = React.forwardRef<TextInput, TextFieldProps>(
  ({ style, placeholder, ...props }, ref) => {
    const fontFamilies = usePixkitFont();
    return (
      <View>
        {props.label && (
          <Text style={[styles.label, { fontFamily: fontFamilies.regular }]}>
            {props.label}
          </Text>
        )}
        <TextInput
          ref={ref}
          style={[styles.base, { fontFamily: fontFamilies.regular }, style]}
          placeholder={placeholder}
          placeholderTextColor={tokens.colors.whitePlaceholder}
          {...props}
        />
      </View>
    );
  },
);

TextField.displayName = 'TextField';

const styles = StyleSheet.create({
  label: {
    color: tokens.colors.white,
    marginBottom: 4,
    marginLeft: tokens.px,
    fontSize: tokens.fontSizes.regular,
  },
  base: {
    fontSize: tokens.fontSizes.regular,
    borderWidth: tokens.border,
    borderColor: tokens.colors.bg,
    borderRadius: tokens.radius,
    backgroundColor: tokens.colors.lightBlue,
    color: tokens.colors.white,
    paddingHorizontal: tokens.px * 2,
    height: 50,
  },
});
