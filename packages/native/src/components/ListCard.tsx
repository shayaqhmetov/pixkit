import * as React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';
import { tokens } from '@pixkit/tokens';
import { usePixkitFont } from '../PixkitProvider';

export type ListCardProps = {
    title: string;
    subtitle?: string;
    description?: string;
    imageSource?: { uri: string } | number;
    onPressEdit?: () => void;
    onPressDelete?: () => void;
    onPress?: () => void;
};

export function ListCard({
    title,
    subtitle,
    description,
    imageSource,
    onPressEdit,
    onPressDelete,
    onPress,
}: ListCardProps) {
    const fontFamilies = usePixkitFont();

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
            activeOpacity={onPress ? 0.7 : 1}
            disabled={!onPress}
        >
            {imageSource ? (
                <Image source={imageSource} style={styles.image} />
            ) : (
                <View style={styles.imagePlaceholder}>
                    <Text style={styles.imagePlaceholderText}>
                        {title.charAt(0).toUpperCase()}
                    </Text>
                </View>
            )}

            <View style={styles.content}>
                <Text
                    style={[styles.title, { fontFamily: fontFamilies.bold }]}
                    numberOfLines={1}
                >
                    {title}
                </Text>
                {subtitle ? (
                    <Text
                        style={[styles.subtitle, { fontFamily: fontFamilies.regular }]}
                        numberOfLines={1}
                    >
                        {subtitle}
                    </Text>
                ) : null}
                {description ? (
                    <Text
                        style={[styles.description, { fontFamily: fontFamilies.regular }]}
                        numberOfLines={1}
                    >
                        {description}
                    </Text>
                ) : null}
            </View>

            {(onPressEdit || onPressDelete) ? (
                <View style={styles.actions}>
                    {onPressEdit ? (
                        <TouchableOpacity
                            style={styles.actionButton}
                            onPress={onPressEdit}
                            activeOpacity={0.7}
                            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                        >
                            <Text style={styles.editIcon}>✎</Text>
                        </TouchableOpacity>
                    ) : null}
                    {onPressDelete ? (
                        <TouchableOpacity
                            style={styles.actionButton}
                            onPress={onPressDelete}
                            activeOpacity={0.7}
                            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                        >
                            <Text style={styles.deleteIcon}>✕</Text>
                        </TouchableOpacity>
                    ) : null}
                </View>
            ) : null}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: tokens.colors.lightBlue,
        borderRadius: tokens.radius,
        borderWidth: tokens.border,
        borderColor: tokens.colors.bg,
        padding: tokens.px * 3,
        marginBottom: tokens.px * 2,
    },
    image: {
        width: 44,
        height: 44,
        borderRadius: tokens.radius,
        marginRight: tokens.px * 3,
    },
    imagePlaceholder: {
        width: 44,
        height: 44,
        borderRadius: tokens.radius,
        backgroundColor: tokens.colors.primary,
        marginRight: tokens.px * 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagePlaceholderText: {
        color: tokens.colors.white,
        fontSize: tokens.fontSizes.large,
    },
    content: {
        flex: 1,
        gap: 2,
    },
    title: {
        color: tokens.colors.white,
        fontSize: tokens.fontSizes.regular,
    },
    subtitle: {
        color: tokens.colors.accent,
        fontSize: tokens.fontSizes.small,
    },
    description: {
        color: tokens.colors.muted,
        fontSize: tokens.fontSizes.small,
    },
    actions: {
        flexDirection: 'row',
        gap: tokens.px * 2,
        marginLeft: tokens.px * 2,
    },
    actionButton: {
        padding: tokens.px,
    },
    editIcon: {
        color: tokens.colors.muted,
        fontSize: tokens.fontSizes.regular,
    },
    deleteIcon: {
        color: tokens.colors.danger,
        fontSize: tokens.fontSizes.regular,
    },
});
