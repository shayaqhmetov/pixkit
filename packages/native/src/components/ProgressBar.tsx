import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import type { ViewProps } from 'react-native';
import { useColors } from '../PixkitProvider';

export type ProgressBarProps = ViewProps & {
  /** 0..1 fill fraction (clamped). */
  value: number;
  /** Fill color (defaults to the brand accent). */
  color?: string;
  height?: number;
};

/** Track + fill bar — native counterpart of the vue `PixProgressBar`. */
export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  color,
  height = 8,
  style,
  ...props
}) => {
  const c = useColors();
  const pct = Math.max(0, Math.min(1, value)) * 100;
  return (
    <View
      style={[styles.track, { backgroundColor: c.bgElev2, borderColor: c.lineSoft, height }, style]}
      {...props}
    >
      <View style={{ width: `${pct}%`, height: '100%', backgroundColor: color ?? c.accent }} />
    </View>
  );
};

const styles = StyleSheet.create({
  track: {
    width: '100%',
    borderRadius: 999,
    borderWidth: 1,
    overflow: 'hidden',
  },
});
