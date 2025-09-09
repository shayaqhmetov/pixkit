import React from 'react';
import { Pressable, Text, StyleSheet, ViewStyle } from 'react-native';
type Props = {
    title: string;
    variant?: 'default' | 'primary' | 'danger';
    style?: ViewStyle | ViewStyle[];
    onPress?: () => void;
};
export const Button: React.FC<Props> = ({ title, variant = 'default', style,
    onPress }) => (
    <Pressable onPress={onPress} style={[styles.base, styles[variant], style]}>
        <Text style={variant === 'default' ? styles.text : styles.textDark}>{title}
        </Text>
    </Pressable>
);
const styles = StyleSheet.create({
    base: { paddingVertical: 8, paddingHorizontal: 12, borderWidth: 4 },
    default: { backgroundColor: '#24283b', borderColor: 'transparent' },
    primary: { backgroundColor: '#8be9fd', borderColor: 'transparent' },
    danger: { backgroundColor: '#ff5555', borderColor: 'transparent' },
    text: { color: '#e1e3ed' },
    textDark: { color: '#000' }
});