import * as React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Modal,
    FlatList,
    SafeAreaView,
    TextInput,
} from 'react-native';
import { tokens } from '@pixkit/tokens';
import { usePixkitFont } from '../PixkitProvider';

export type SearchSelectOption = {
    label: string;
    value: string;
    /** Optional secondary text shown next to the label (e.g. a code or symbol). */
    hint?: string;
    /** Optional label shown on the trigger when this option is selected. */
    triggerLabel?: string;
};

export type SearchSelectSection = {
    /** Header rendered above the group. Omit / empty string ⇒ no header row. */
    title?: string;
    options: SearchSelectOption[];
};

export type SearchSelectProps = {
    label?: string;
    value: string;
    /**
     * Ordered sections rendered when no search query is active. The first
     * section is typically a leading group (e.g. "Top"), the rest is the
     * remainder. Section headers are only rendered for sections with a title
     * and at least one option.
     */
    sections: SearchSelectSection[];
    onChange: (value: string) => void;
    hasError?: boolean;
    placeholder?: string;
    /** Placeholder for the search input inside the sheet. */
    searchPlaceholder?: string;
    /** Optional content rendered inside the sheet above the list (status/error/retry). */
    listHeader?: React.ReactNode;
    /** Text shown when there is nothing to display. */
    emptyText?: string;
};

const normalize = (s: string) => s.toLowerCase().trim();

/**
 * A presentational, data-agnostic searchable select. Renders a trigger that
 * opens a bottom sheet with a search input and a sectioned list. While a search
 * query is active the sections collapse to a single flat, relevance-ordered
 * list (grouping suppressed). The currently selected value is always marked.
 */
export function SearchSelect({
    label,
    value,
    sections,
    onChange,
    hasError = false,
    placeholder = 'Select an option',
    searchPlaceholder = 'Search…',
    listHeader,
    emptyText = 'No results',
}: SearchSelectProps) {
    const [open, setOpen] = React.useState(false);
    const [query, setQuery] = React.useState('');
    const fontFamilies = usePixkitFont();

    // Flatten all options across sections (for trigger label + search).
    const allOptions = React.useMemo(
        () => sections.flatMap((s) => s.options),
        [sections],
    );

    const selectedOption = allOptions.find((o) => o.value === value);
    const displayLabel = selectedOption
        ? (selectedOption.triggerLabel ?? selectedOption.label)
        : placeholder;
    const isPlaceholder = !selectedOption;

    const handleClose = () => {
        setOpen(false);
        setQuery('');
    };

    const handleSelect = (next: string) => {
        onChange(next);
        handleClose();
    };

    // When a query is active, collapse to a single relevance-ordered flat list.
    const trimmedQuery = normalize(query);
    type Row =
        | { kind: 'header'; key: string; title: string }
        | { kind: 'option'; key: string; option: SearchSelectOption };

    const rows: Row[] = React.useMemo(() => {
        if (trimmedQuery) {
            const seen = new Set<string>();
            const matches: { option: SearchSelectOption; rank: number }[] = [];
            for (const opt of allOptions) {
                if (seen.has(opt.value)) continue;
                seen.add(opt.value);
                const label = normalize(opt.label);
                const hint = normalize(opt.hint ?? '');
                const val = normalize(opt.value);
                let rank = -1;
                if (label.startsWith(trimmedQuery) || val.startsWith(trimmedQuery)) {
                    rank = 0;
                } else if (hint.startsWith(trimmedQuery)) {
                    rank = 1;
                } else if (
                    label.includes(trimmedQuery) ||
                    val.includes(trimmedQuery) ||
                    hint.includes(trimmedQuery)
                ) {
                    rank = 2;
                }
                if (rank >= 0) matches.push({ option: opt, rank });
            }
            matches.sort((a, b) => a.rank - b.rank);
            return matches.map(({ option }) => ({
                kind: 'option' as const,
                key: option.value,
                option,
            }));
        }

        // No query ⇒ sectioned rendering.
        const out: Row[] = [];
        sections.forEach((section, sIdx) => {
            if (!section.options.length) return;
            if (section.title) {
                out.push({
                    kind: 'header',
                    key: `header-${sIdx}-${section.title}`,
                    title: section.title,
                });
            }
            section.options.forEach((option) => {
                out.push({ kind: 'option', key: `${sIdx}-${option.value}`, option });
            });
        });
        return out;
    }, [trimmedQuery, allOptions, sections]);

    const hasRows = rows.some((r) => r.kind === 'option');

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
                onRequestClose={handleClose}
            >
                <TouchableOpacity
                    style={styles.backdrop}
                    activeOpacity={1}
                    onPress={handleClose}
                >
                    <SafeAreaView style={styles.safeArea}>
                        {/* Stop the backdrop press from closing when tapping inside the sheet */}
                        <TouchableOpacity activeOpacity={1} style={styles.sheet}>
                            {/* Handle bar */}
                            <View style={styles.handleBar} />

                            {label ? (
                                <Text style={[styles.sheetTitle, { fontFamily: fontFamilies.bold }]}>
                                    {label}
                                </Text>
                            ) : null}

                            <TextInput
                                style={[styles.searchInput, { fontFamily: fontFamilies.regular }]}
                                placeholder={searchPlaceholder}
                                placeholderTextColor={tokens.colors.whitePlaceholder}
                                value={query}
                                onChangeText={setQuery}
                                autoCorrect={false}
                                autoCapitalize="none"
                            />

                            {listHeader}

                            {hasRows ? (
                                <FlatList
                                    data={rows}
                                    keyExtractor={(item) => item.key}
                                    keyboardShouldPersistTaps="handled"
                                    renderItem={({ item }) => {
                                        if (item.kind === 'header') {
                                            return (
                                                <Text
                                                    style={[
                                                        styles.sectionHeader,
                                                        { fontFamily: fontFamilies.bold },
                                                    ]}
                                                >
                                                    {item.title}
                                                </Text>
                                            );
                                        }
                                        const opt = item.option;
                                        const isSelected = opt.value === value;
                                        return (
                                            <TouchableOpacity
                                                style={[
                                                    styles.option,
                                                    isSelected && styles.optionSelected,
                                                ]}
                                                onPress={() => handleSelect(opt.value)}
                                                activeOpacity={0.65}
                                            >
                                                <Text
                                                    style={[
                                                        styles.optionText,
                                                        isSelected && styles.optionTextSelected,
                                                        {
                                                            fontFamily: isSelected
                                                                ? fontFamilies.bold
                                                                : fontFamilies.regular,
                                                        },
                                                    ]}
                                                    numberOfLines={1}
                                                >
                                                    {opt.label}
                                                </Text>
                                                {opt.hint ? (
                                                    <Text
                                                        style={[
                                                            styles.optionHint,
                                                            { fontFamily: fontFamilies.regular },
                                                        ]}
                                                        numberOfLines={1}
                                                    >
                                                        {opt.hint}
                                                    </Text>
                                                ) : null}
                                                {isSelected ? (
                                                    <View style={styles.checkmarkWrap}>
                                                        <Text style={styles.checkmark}>✓</Text>
                                                    </View>
                                                ) : null}
                                            </TouchableOpacity>
                                        );
                                    }}
                                />
                            ) : (
                                <View style={styles.emptyWrap}>
                                    <Text
                                        style={[
                                            styles.emptyText,
                                            { fontFamily: fontFamilies.regular },
                                        ]}
                                    >
                                        {emptyText}
                                    </Text>
                                </View>
                            )}
                        </TouchableOpacity>
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
        maxHeight: '80%',
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
    searchInput: {
        minHeight: 44,
        borderWidth: 1,
        borderColor: `${tokens.colors.accent}40`,
        borderRadius: 10,
        backgroundColor: tokens.colors.bg,
        color: tokens.colors.white,
        fontSize: tokens.fontSizes.regular,
        paddingHorizontal: 14,
        paddingVertical: 8,
        marginBottom: 12,
    },
    sectionHeader: {
        color: tokens.colors.accent,
        fontSize: tokens.fontSizes.small,
        textTransform: 'uppercase',
        marginTop: 8,
        marginBottom: 6,
        marginLeft: tokens.px,
        letterSpacing: 1,
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 12,
        borderRadius: tokens.radius,
        marginBottom: 2,
        gap: 8,
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
    optionHint: {
        color: tokens.colors.muted,
        fontSize: tokens.fontSizes.small,
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
    emptyWrap: {
        paddingVertical: 32,
        alignItems: 'center',
    },
    emptyText: {
        color: tokens.colors.whitePlaceholder,
        fontSize: tokens.fontSizes.regular,
    },
});
