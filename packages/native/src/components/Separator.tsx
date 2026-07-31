import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import type { ViewProps } from 'react-native';
import { useColors } from '../PixkitProvider';

export type SeparatorOrientation = 'horizontal' | 'vertical';

export type SeparatorProps = ViewProps & {
  orientation?: SeparatorOrientation;
};

export const Separator = React.forwardRef<View, SeparatorProps>(
  ({ style, orientation = 'horizontal', ...props }, ref) => {
    const c = useColors();
    return (
      <View
        ref={ref}
        style={[
          { backgroundColor: c.line },
          orientation === 'horizontal' ? styles.horizontal : styles.vertical,
          style,
        ]}
        {...props}
      />
    );
  },
);

Separator.displayName = 'Separator';

const styles = StyleSheet.create({
  horizontal: {
    height: 2,
    width: '100%',
  },
  vertical: {
    width: 2,
    alignSelf: 'stretch',
  },
});
