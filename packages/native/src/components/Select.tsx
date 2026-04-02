import * as React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Modal,
    FlatList,
    SafeAreaView,
} from 'react-native';
import { tokens } from '@pixkit/tokens';
import { usePixkitFont } from '../PixkitProvider';

export type SelectOption = {
    label: string;
    value: string;
    triggerLabel?: string;
};

export type SelectProps = {
    label?: string;
    value: string;
    options: SelectOption[];
    onValueChange: (value: string) => void;
    hasError?: boolean;
    placeholder?: string;
};

export function Select({
    label,
    value,
    options,
    onValueChange,
    hasError = false,
    placeholder = 'Select an option',
}: SelectProps) {
    const [open, setOpen] = React.useState(false);
    const fontFamilies = usePixkitFont();

    const selectedOption = options.find((o) => o.value === value);
    const displayLabel = selectedOption ? (selectedOption.triggerLabel ?? selectedOption.label) : placeholder;
    const isPlaceholder = !selectedOption;

    return (
        <View>
            {label ? (
                <Text style={[styles.label, { fontFamily: fontFamilies.regular }]}>
                    {label}
                </Text>
            ) : null}

            <TouchableOpacity
                style={[styles.trigger, hasError && styles.triggerError]}
                onPress={() => setOpen(true)}
                activeOpacity={0.7}
            >
                <Text
                    style={[
                        styles.triggerText,
                        isPlaceholder && styles.placeholderText,
                        { fontFamily: fontFamilies.regular },
                    ]}
                    numberOfLines={1}
                >
                    {displayLabel}
                </Text>
                <Text style={styles.chevron}>▼</Text>
            </TouchableOpacity>

            <Modal
                visible={open}
                transparent
                animationType="fade"
                onRequestClose={() => setOpen(false)}
            >
                <TouchableOpacity
                    style={styles.backdrop}
                    activeOpacity={1}
                    onPress={() => setOpen(false)}
                >
                    <SafeAreaView style={styles.safeArea}>
                        <View style={styles.sheet}>
                            {label ? (
                                <Text style={[styles.sheetTitle, { fontFamily: fontFamilies.bold }]}>
                                    {label}
                                </Text>
                            ) : null}
                            <FlatList
                                data={options}
                                keyExtractor={(item) => item.value}
                                renderItem={({ item }) => (
                                    <TouchableOpacity
                                        style={[
                                            styles.option,
                                            item.value === value && styles.optionSelected,
                                        ]}
                                        onPress={() => {
                                            onValueChange(item.value);
                                            setOpen(false);
                                        }}
                                        activeOpacity={0.7}
                                    >
                                        <Text
                                            style={[
                                                styles.optionText,
                                                item.value === value && styles.optionTextSelected,
                                                { fontFamily: fontFamilies.regular },
                                            ]}
                                        >
                                            {item.label}
                                        </Text>
                                        {item.value === value ? (
                                            <Text style={styles.checkmark}>✓</Text>
                                        ) : null}
                                    </TouchableOpacity>
                                )}
                            />
                        </View>
                    </SafeAreaView>
                </TouchableOpacity>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    label: {
        color: tokens.colors.white,
        fontSize: tokens.fontSizes.regular,
        marginBottom: 4,
        marginLeft: tokens.px,
    },
    trigger: {
        height: 50,
        borderWidth: tokens.border,
        borderColor: tokens.colors.bg,
        borderRadius: tokens.radius,
        backgroundColor: tokens.colors.lightBlue,
        paddingHorizontal: tokens.px * 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    triggerError: {
        borderColor: tokens.colors.danger,
    },
    triggerText: {
        color: tokens.colors.white,
        fontSize: tokens.fontSizes.regular,
        flex: 1,
    },
    placeholderText: {
        color: tokens.colors.whitePlaceholder,
    },
    chevron: {
        color: tokens.colors.muted,
        fontSize: 10,
        marginLeft: 8,
    },
    backdrop: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'flex-end',
    },
    safeArea: {
        backgroundColor: tokens.colors.lightBlue,
        borderTopLeftRadius: tokens.radius * 2,
        borderTopRightRadius: tokens.radius * 2,
        maxHeight: '60%',
    },
    sheet: {
        padding: 16,
    },
    sheetTitle: {
        color: tokens.colors.white,
        fontSize: tokens.fontSizes.regular,
        marginBottom: 12,
        textAlign: 'center',
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 14,
        paddingHorizontal: 8,
        borderBottomWidth: 1,
        borderBottomColor: tokens.colors.bg,
    },
    optionSelected: {
        backgroundColor: `${tokens.colors.primary}40`,
    },
    optionText: {
        color: tokens.colors.white,
        fontSize: tokens.fontSizes.regular,
        flex: 1,
    },
    optionTextSelected: {
        color: tokens.colors.accent,
    },
    checkmark: {
        color: tokens.colors.accent,
        fontSize: tokens.fontSizes.regular,
    },
});
