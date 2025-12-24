import * as React from 'react';
import { Text, StyleSheet, type ViewStyle, TouchableOpacity, View, ImageBackground, Image } from 'react-native';
import { tokens } from '@pixkit/tokens';

type Variant = 'default' | 'primary' | 'danger';

const assets: Record<Variant, { center: any; left: any; right: any }> = {
    default: {
        center: require('../assets/btn-center.png'),
        left: require('../assets/btn-left.png'),
        right: require('../assets/btn-right.png'),
    },
    primary: {
        center: require('../assets/primary-btn-center.png'),
        left: require('../assets/primary-btn-left.png'),
        right: require('../assets/primary-btn-right.png'),
    },
    danger: {
        center: require('../assets/danger-btn-center.png'),
        left: require('../assets/danger-btn-left.png'),
        right: require('../assets/danger-btn-right.png'),
    }
}

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type Props = {
    title: string;
    variant?: Variant;
    style?: ViewStyle | ViewStyle[];
    onPress?: () => void;
    /** Predefined visual height multipliers based on the center tile height. */
    size?: Size; // default 'md'
    /** Horizontal padding density inside the center tile. */
    density?: 'compact' | 'cozy' | 'comfortable'; // default 'cozy'
    /** Stretch to parent width. */
    fullWidth?: boolean;
};
export const Button: React.FC<Props> = ({ title, variant = 'default', style, onPress, size = 'md', density = 'cozy', fullWidth = false }) => {
    const v: Variant = variant ?? 'default';
    // Compute the strip height from the center asset and size preset
    const centerSource = Image.resolveAssetSource(assets[v].center);
    const naturalHeight = centerSource?.height ?? (tokens.px * 8);
    const sizeFactorMap: Record<Size, number> = { xs: 0.75, sm: 0.85, md: 1.0, lg: 1.25, xl: 1.5 };
    const factor = sizeFactorMap[size] ?? 1.0;
    const computedHeight = Math.max(1, Math.round(naturalHeight * factor));
    const baseSideWidth = 10;
    const sideWidth = Math.max(1, Math.round(baseSideWidth * factor));
    const densityPaddingMap: Record<'compact' | 'cozy' | 'comfortable', number> = {
        compact: tokens.px * 1,
        cozy: tokens.px * 2,
        comfortable: tokens.px * 3,
    };
    const paddingX = densityPaddingMap[density] ?? tokens.px * 2;
    return (
        <TouchableOpacity onPress={onPress} style={style}>
            <View style={[styles.base, fullWidth ? styles.fullWidth : null, styles[v]]}>
                {/* <Text style={v === 'default' ? styles.text : styles.textDark}>{title}</Text> */}
                <Image
                    source={assets[v].left}
                    style={[styles.side, { height: computedHeight, width: sideWidth }]}
                    resizeMode="stretch"
                    onLoad={() => console.log('pixkit: left loaded')}
                    onError={e => console.log('pixkit: left error', e.nativeEvent)}
                />

                <ImageBackground
                    source={assets[v].center}
                    style={[styles.center, { height: computedHeight, paddingHorizontal: paddingX }]}
                    resizeMode="repeat"
                    onLoad={() => console.log('pixkit: center loaded')}
                    onError={e => console.log('pixkit: center error', e.nativeEvent)}
                >
                    <View pointerEvents="none" style={styles.labelOverlay}>
                        <Text style={v === 'default' ? styles.text : styles.textDark}>{title}</Text>
                    </View>
                </ImageBackground>
                <Image
                    source={assets[v].right}
                    style={[styles.side, { height: computedHeight, width: sideWidth }]}
                    resizeMode="stretch"
                    onLoad={() => console.log('pixkit: right loaded')}
                    onError={e => console.log('pixkit: right error', e.nativeEvent)}
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    base: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
    },
    fullWidth: {
        alignSelf: 'stretch',
        width: '100%',
    },
    default: {
    },
    primary: {
    },
    danger: {
    },
    text: {
        color: tokens.colors.fg,
    },
    textDark: {
        color: '#000000',
    },
    container: {
        flexDirection: 'row',
    },
    side: {
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: tokens.px * 2,
    },
    labelOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
});