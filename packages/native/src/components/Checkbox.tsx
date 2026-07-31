import * as React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import type { ViewProps } from 'react-native';
import { useColors } from '../PixkitProvider';
import type { ResolvedColors } from '../theme';

export type CheckboxProps = ViewProps & {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (value: boolean) => void;
  label?: React.ReactNode;
};

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  defaultChecked,
  onCheckedChange,
  label,
  style,
  ...rest
}) => {
  const c = useColors();
  const styles = React.useMemo(() => makeStyles(c), [c]);
  const [internalChecked, setInternalChecked] = React.useState(!!defaultChecked);

  const isControlled = checked !== undefined;
  const value = isControlled ? checked : internalChecked;

  const toggle = () => {
    const next = !value;
    if (!isControlled) {
      setInternalChecked(next);
    }
    onCheckedChange?.(next);
  };

  return (
    <Pressable onPress={toggle} style={[styles.wrapper, style]} {...rest}>
      <View style={[styles.box, value && styles.boxChecked]} />
      {label != null && <Text style={styles.label}>{label}</Text>}
    </Pressable>
  );
};

const makeStyles = (c: ResolvedColors) =>
  StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    box: {
      width: 20,
      height: 20,
      borderWidth: 3,
      borderColor: c.line,
      backgroundColor: c.bgElev1,
    },
    boxChecked: {
      backgroundColor: c.accent,
    },
    label: {
      marginLeft: 8,
      color: c.fg,
    },
  });
