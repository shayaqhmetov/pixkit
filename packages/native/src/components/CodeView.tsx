import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import type { ViewProps, TextProps } from 'react-native';

export type CodeViewProps = ViewProps & TextProps;

export const CodeView: React.FC<CodeViewProps> = ({ style, children, ...props }) => (
  <ScrollView
    horizontal
    style={[styles.container]}
    contentContainerStyle={styles.contentContainer}
  >
    <Text style={[styles.code, style]} {...props}>
      {children}
    </Text>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: '#1a1b26',
    backgroundColor: '#1a1b26',
  },
  contentContainer: {
    padding: 8,
  },
  code: {
    color: '#e1e3ed',
    fontFamily: 'Courier',
    fontSize: 12,
  },
});
