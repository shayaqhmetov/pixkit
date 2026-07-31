import * as React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import type { ViewProps, TextProps } from 'react-native';
import { useColors } from '../PixkitProvider';

export type CodeViewProps = ViewProps & TextProps;

export const CodeView: React.FC<CodeViewProps> = ({ style, children, ...props }) => {
  const c = useColors();
  return (
    <ScrollView
      horizontal
      style={[styles.container, { borderColor: c.line, backgroundColor: c.bg }]}
      contentContainerStyle={styles.contentContainer}
    >
      <Text style={[styles.code, { color: c.fg }, style]} {...props}>
        {children}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
  },
  contentContainer: {
    padding: 8,
  },
  code: {
    fontFamily: 'Courier',
    fontSize: 12,
  },
});
