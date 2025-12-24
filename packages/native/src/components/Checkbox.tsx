import * as React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import type { ViewProps } from 'react-native';

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
      {label != null && (
        <Text style={styles.label}>{label}</Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  box: {
    width: 20,
    height: 20,
    borderWidth: 3,
    borderColor: '#1a1b26',
    backgroundColor: '#24283b',
  },
  boxChecked: {
    backgroundColor: '#8be9fd',
  },
  label: {
    marginLeft: 8,
    color: '#e1e3ed',
  },
});
