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
import { usePixkitFont, useColors } from '../PixkitProvider';
import type { ResolvedColors } from '../theme';

export type SelectOption = {
    label: string;
    value: string;
    triggerLabel?: string;
};

const CIRCLE_SIZE = 54;

export type SelectProps = {
    label?: string;
    value: string;
    options: SelectOption[];
    onValueChange: (value: string) => void;
    hasError?: boolean;
    placeholder?: string;
    circle?: boolean;
};

export function Select({
    label,
    value,
    options,
    onValueChange,
    hasError = false,
    placeholder = 'Select an option',
    circle = false,
}: SelectProps) {
    const [open, setOpen] = React.useState(false);
    const fontFamilies = usePixkitFont();
    const c = useColors();
    const styles = React.useMemo(() => makeStyles(c), [c]);

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
                style={[
                    styles.trigger,
                    circle && styles.triggerCircle,
                    hasError && styles.triggerError,
                ]}
                onPress={() => setOpen(true)}
                activeOpacity={0.75}
            >
                <Text
                    style={[
                        styles.triggerText,
                        circle && styles.triggerTextCircle,
                        isPlaceholder && styles.placeholderText,
                        { fontFamily: circle ? fontFamilies.bold : fontFamilies.regular },
                    ]}
                    numberOfLines={1}
                >
                    {displayLabel}
                </Text>
                {!circle && <Text style={[styles.chevron, open && styles.chevronOpen]}>▼</Text>}
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

const SHEET_RADIUS = 24;

const makeStyles = (c: ResolvedColors) => StyleSheet.create({
    label: {
        color: c.fg,
        fontSize: 16,
        marginBottom: 4,
        marginLeft: 4,
    },
    trigger: {
        minHeight: 50,
        borderWidth: 1,
        borderColor: `${c.accent}40`,
        borderRadius: 10,
        backgroundColor: c.bgElev1,
        paddingHorizontal: 14,
        paddingVertical: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8,
    },
    triggerCircle: {
        width: CIRCLE_SIZE,
        height: CIRCLE_SIZE,
        minHeight: CIRCLE_SIZE,
        borderRadius: CIRCLE_SIZE / 2,
        paddingHorizontal: 0,
        paddingVertical: 0,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 0,
    },
    triggerError: {
        borderColor: c.danger,
    },
    triggerText: {
        color: c.fg,
        fontSize: 16,
        flex: 1,
    },
    triggerTextCircle: {
        flex: 0,
        fontSize: 20,
        textAlign: 'center',
    },
    placeholderText: {
        color: c.fgSubtle,
    },
    chevron: {
        color: c.fgMuted,
        fontSize: 10,
    },
    chevronOpen: {
        color: c.accent,
    },
    backdrop: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.65)',
        justifyContent: 'flex-end',
    },
    safeArea: {
        backgroundColor: c.bgElev1,
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
        backgroundColor: c.fgMuted,
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 16,
        opacity: 0.5,
    },
    sheetTitle: {
        color: c.fg,
        fontSize: 16,
        marginBottom: 12,
        textAlign: 'center',
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 12,
        borderRadius: 8,
        marginBottom: 2,
    },
    optionLast: {
        marginBottom: 0,
    },
    optionSelected: {
        backgroundColor: `${c.brand600}60`,
    },
    optionText: {
        color: c.fg,
        fontSize: 16,
        flex: 1,
    },
    optionTextSelected: {
        color: c.accent,
    },
    checkmarkWrap: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: `${c.accent}25`,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkmark: {
        color: c.accent,
        fontSize: 13,
        fontWeight: '700',
    },
});
