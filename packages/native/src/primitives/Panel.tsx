import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { useColors } from '../PixkitProvider';

export const Panel: React.FC<React.PropsWithChildren> = ({ children }) => {
    const c = useColors();
    return <View style={[styles.panel, { backgroundColor: c.bgElev1 }]}>{children}</View>;
};

const styles = StyleSheet.create({
    panel: {
        padding: 16,
    },
});
