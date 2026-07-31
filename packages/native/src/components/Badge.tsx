import * as React from 'react';
import { Text, StyleSheet } from 'react-native';
import type { TextProps } from 'react-native';
import { useColors } from '../PixkitProvider';
import type { ResolvedColors } from '../theme';

export type BadgeVariant = 'default' | 'secondary' | 'destructive' | 'outline';

export type BadgeProps = TextProps & {
  variant?: BadgeVariant;
};

export const Badge: React.FC<BadgeProps> = ({ style, variant = 'default', ...props }) => {
  const c = useColors();
  const styles = React.useMemo(() => makeStyles(c), [c]);
  return <Text style={[styles.base, styles[variant], style]} {...props} />;
};

const makeStyles = (c: ResolvedColors) =>
  StyleSheet.create({
    base: {
      paddingHorizontal: 8,
      paddingVertical: 2,
      borderWidth: 2,
      fontSize: 12,
    },
    default: {
      backgroundColor: c.bgElev1,
      borderColor: c.line,
      color: c.fg,
    },
    secondary: {
      backgroundColor: c.bgElev2,
      borderColor: c.line,
      color: c.fg,
    },
    destructive: {
      backgroundColor: c.neg,
      borderColor: c.neg,
      color: '#20100e',
    },
    outline: {
      backgroundColor: 'transparent',
      borderColor: c.fg,
      color: c.fg,
    },
  });
