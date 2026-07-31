import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import type { ViewProps } from 'react-native';
import { useColors } from '../PixkitProvider';

export type TagProps = ViewProps & {
  label: string;
  /** Accent color for the tag (defaults to the brand accent). */
  color?: string;
};

/** Small pill label — native counterpart of the vue `PixTag`. */
export const Tag: React.FC<TagProps> = ({ label, color, style, ...props }) => {
  const c = useColors();
  const tint = color ?? c.accent;
  return (
    <View style={[styles.tag, { backgroundColor: `${tint}22`, borderColor: `${tint}55` }, style]} {...props}>
      <Text style={[styles.text, { color: tint }]} numberOfLines={1}>
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tag: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
    borderWidth: 1,
  },
  text: {
    fontSize: 12,
  },
});
