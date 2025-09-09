import React from 'react';
import { View, StyleSheet } from 'react-native';
export const Panel: React.FC<React.PropsWithChildren> = ({ children }) => (
    <View style={styles.panel}>{children}</View>
);
const styles = StyleSheet.create({
    panel: {
        padding: 12,
        backgroundColor: '#24283b'
    }
});
