import React from 'react';
import { View, StyleSheet } from 'react-native';
import type { ViewProps } from 'react-native';

export type SeparatorOrientation = 'horizontal' | 'vertical';

export type SeparatorProps = ViewProps & {
  orientation?: SeparatorOrientation;
};

export const Separator = React.forwardRef<View, SeparatorProps>(
  ({ style, orientation = 'horizontal', ...props }, ref) => (
    <View
      ref={ref}
      style={[
        styles.base,
        orientation === 'horizontal' ? styles.horizontal : styles.vertical,
        style,
      ]}
      {...props}
    />
  ),
);

Separator.displayName = 'Separator';

const styles = StyleSheet.create({
  base: {
    backgroundColor: '#414868',
  },
  horizontal: {
    height: 2,
    width: '100%',
  },
  vertical: {
    width: 2,
    alignSelf: 'stretch',
  },
});
