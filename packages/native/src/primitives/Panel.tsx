import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { tokens } from '@pixkit/tokens';

export const Panel: React.FC<React.PropsWithChildren> = ({ children }) => (
    <View style={styles.panel}>{children}</View>
);

const styles = StyleSheet.create({
    panel: {
        backgroundColor: tokens.colors.panel,
        padding: tokens.px * 4,
    },
});
