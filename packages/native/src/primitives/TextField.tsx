import * as React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';
import type { TextInputProps } from 'react-native';
import { usePixkitFont, useColors } from '../PixkitProvider';
import type { ResolvedColors } from '../theme';

export type TextFieldProps = TextInputProps & {
  placeholder?: string;
  label?: string;
};

export const TextField = React.forwardRef<TextInput, TextFieldProps>(
  ({ style, placeholder, ...props }, ref) => {
    const fontFamilies = usePixkitFont();
    const c = useColors();
    const styles = React.useMemo(() => makeStyles(c), [c]);
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
          placeholderTextColor={c.fgSubtle}
          {...props}
        />
      </View>
    );
  },
);

TextField.displayName = 'TextField';

const makeStyles = (c: ResolvedColors) =>
  StyleSheet.create({
    label: {
      color: c.fg,
      marginBottom: 4,
      marginLeft: 4,
      fontSize: 16,
    },
    base: {
      fontSize: 16,
      borderWidth: 4,
      borderColor: c.line,
      borderRadius: 8,
      backgroundColor: c.bgElev1,
      color: c.fg,
      paddingHorizontal: 8,
      height: 50,
    },
  });
