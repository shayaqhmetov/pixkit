import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import type { ViewProps } from 'react-native';
import { useColors } from '../PixkitProvider';

export type ChipProps = ViewProps & {
  label: string;
  leading?: React.ReactNode;
};

/** Neutral rounded chip — native counterpart of the vue `.pixq-chip`. */
export const Chip: React.FC<ChipProps> = ({ label, leading, style, ...props }) => {
  const c = useColors();
  return (
    <View
      style={[styles.chip, { backgroundColor: c.bgElev2, borderColor: c.lineSoft }, style]}
      {...props}
    >
      {leading}
      <Text style={[styles.text, { color: c.fgMuted }]} numberOfLines={1}>
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    borderWidth: 1,
  },
  text: {
    fontSize: 12,
  },
});
