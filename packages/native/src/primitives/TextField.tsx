import * as React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';
import type { TextInputProps } from 'react-native';
import { tokens } from '@pixkit/tokens';
import { pixkitFontFamilies } from '../fonts';


export type TextFieldProps = TextInputProps & {
  placeholder?: string;
  label?: string;
};
export const TextField = React.forwardRef<TextInput, TextFieldProps>(
  ({ style, placeholder, ...props }, ref) => (
    <View>
      {
        props.label && (
          <Text style={styles.label}>{props.label}</Text>
        )
      }
      <TextInput
        ref={ref}
        style={[styles.base, style]}
        placeholder={placeholder}
        placeholderTextColor={tokens.colors.whitePlaceholder}

        {...props}
      />
    </View>
  ),
);

TextField.displayName = 'TextField';

const styles = StyleSheet.create({
  label: {
    color: tokens.colors.white,
    marginBottom: 4,
    marginLeft: tokens.px,
    fontSize: tokens.fontSizes.regular,
    fontFamily: pixkitFontFamilies.regular,
  },
  base: {
    fontSize: tokens.fontSizes.regular,
    fontFamily: pixkitFontFamilies.regular,
    borderWidth: tokens.border,
    borderColor: tokens.colors.bg,
    borderRadius: tokens.radius,
    backgroundColor: tokens.colors.lightBlue,
    color: tokens.colors.white,
    paddingHorizontal: tokens.px * 2,
    height: 50,
  },
});

