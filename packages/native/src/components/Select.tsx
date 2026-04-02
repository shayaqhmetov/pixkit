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
                activeOpacity={0.75}
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
                <Text style={[styles.chevron, open && styles.chevronOpen]}>▼</Text>
            </TouchableOpacity>

            <Modal
                visible={open}
                transparent
                animationType="slide"
                onRequestClose={() => setOpen(false)}
            >
                <TouchableOpacity
                    style={styles.backdrop}
                    activeOpacity={1}
                    onPress={() => setOpen(false)}
                >
                    <SafeAreaView style={styles.safeArea}>
                        <View style={styles.sheet}>
                            {/* Handle bar */}
                            <View style={styles.handleBar} />

                            {label ? (
                                <Text style={[styles.sheetTitle, { fontFamily: fontFamilies.bold }]}>
                                    {label}
                                </Text>
                            ) : null}

                            <FlatList
                                data={options}
                                keyExtractor={(item) => item.value}
                                renderItem={({ item, index }) => {
                                    const isSelected = item.value === value;
                                    const isLast = index === options.length - 1;
                                    return (
                                        <TouchableOpacity
                                            style={[
                                                styles.option,
                                                isSelected && styles.optionSelected,
                                                isLast && styles.optionLast,
                                            ]}
                                            onPress={() => {
                                                onValueChange(item.value);
                                                setOpen(false);
                                            }}
                                            activeOpacity={0.65}
                                        >
                                            <Text
                                                style={[
                                                    styles.optionText,
                                                    isSelected && styles.optionTextSelected,
                                                    { fontFamily: isSelected ? fontFamilies.bold : fontFamilies.regular },
                                                ]}
                                            >
                                                {item.label}
                                            </Text>
                                            {isSelected ? (
                                                <View style={styles.checkmarkWrap}>
                                                    <Text style={styles.checkmark}>✓</Text>
                                                </View>
                                            ) : null}
                                        </TouchableOpacity>
                                    );
                                }}
                            />
                        </View>
                    </SafeAreaView>
                </TouchableOpacity>
            </Modal>
        </View>
    );
}

const SHEET_RADIUS = tokens.radius * 3;

const styles = StyleSheet.create({
    label: {
        color: tokens.colors.white,
        fontSize: tokens.fontSizes.regular,
        marginBottom: 4,
        marginLeft: tokens.px,
    },
    trigger: {
        minHeight: 50,
        borderWidth: 1,
        borderColor: `${tokens.colors.accent}40`,
        borderRadius: 10,
        backgroundColor: tokens.colors.lightBlue,
        paddingHorizontal: 14,
        paddingVertical: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8,
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
    },
    chevronOpen: {
        color: tokens.colors.accent,
    },
    backdrop: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.65)',
        justifyContent: 'flex-end',
    },
    safeArea: {
        backgroundColor: tokens.colors.lightBlue,
        borderTopLeftRadius: SHEET_RADIUS,
        borderTopRightRadius: SHEET_RADIUS,
        maxHeight: '65%',
    },
    sheet: {
        paddingHorizontal: 16,
        paddingBottom: 8,
    },
    handleBar: {
        width: 36,
        height: 4,
        borderRadius: 2,
        backgroundColor: tokens.colors.muted,
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 16,
        opacity: 0.5,
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
        paddingVertical: 15,
        paddingHorizontal: 12,
        borderRadius: tokens.radius,
        marginBottom: 2,
    },
    optionLast: {
        marginBottom: 0,
    },
    optionSelected: {
        backgroundColor: `${tokens.colors.primary}60`,
    },
    optionText: {
        color: tokens.colors.white,
        fontSize: tokens.fontSizes.regular,
        flex: 1,
    },
    optionTextSelected: {
        color: tokens.colors.accent,
    },
    checkmarkWrap: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: `${tokens.colors.accent}25`,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkmark: {
        color: tokens.colors.accent,
        fontSize: 13,
        fontWeight: '700',
    },
});
