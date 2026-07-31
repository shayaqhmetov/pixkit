import * as React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';
import { usePixkitFont, useColors } from '../PixkitProvider';
import type { ResolvedColors } from '../theme';

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
    const c = useColors();
    const styles = React.useMemo(() => makeStyles(c), [c]);

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

const makeStyles = (c: ResolvedColors) => StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: c.bgElev1,
        borderRadius: 8,
        borderWidth: 4,
        borderColor: c.line,
        padding: 12,
        marginBottom: 8,
    },
    image: {
        width: 44,
        height: 44,
        borderRadius: 8,
        marginRight: 12,
    },
    imagePlaceholder: {
        width: 44,
        height: 44,
        borderRadius: 8,
        backgroundColor: c.primary,
        marginRight: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagePlaceholderText: {
        color: c.fg,
        fontSize: 20,
    },
    content: {
        flex: 1,
        gap: 2,
    },
    title: {
        color: c.fg,
        fontSize: 16,
    },
    subtitle: {
        color: c.accent,
        fontSize: 12,
    },
    description: {
        color: c.fgMuted,
        fontSize: 12,
    },
    actions: {
        flexDirection: 'row',
        gap: 8,
        marginLeft: 8,
    },
    actionButton: {
        padding: 4,
    },
    editIcon: {
        color: c.fgMuted,
        fontSize: 16,
    },
    deleteIcon: {
        color: c.danger,
        fontSize: 16,
    },
});
