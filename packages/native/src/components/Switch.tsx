import * as React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import type { ViewProps } from 'react-native';

export type SwitchProps = ViewProps & {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (value: boolean) => void;
  label?: React.ReactNode;
};

export const Switch: React.FC<SwitchProps> = ({
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
      <View style={[styles.track, value && styles.trackOn]}>
        <View style={[styles.thumb, value && styles.thumbOn]} />
      </View>
      {label != null && <Text style={styles.label}>{label}</Text>}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  track: {
    width: 40,
    height: 22,
    borderRadius: 4,
    borderWidth: 3,
    borderColor: '#1a1b26',
    backgroundColor: '#24283b',
    justifyContent: 'center',
    paddingHorizontal: 2,
  },
  trackOn: {
    backgroundColor: '#8be9fd',
  },
  thumb: {
    width: 14,
    height: 14,
    borderRadius: 2,
    backgroundColor: '#e1e3ed',
    alignSelf: 'flex-start',
  },
  thumbOn: {
    alignSelf: 'flex-end',
  },
  label: {
    marginLeft: 8,
    color: '#e1e3ed',
  },
});
