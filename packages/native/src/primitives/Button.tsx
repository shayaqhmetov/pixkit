import * as React from 'react';
import { Text, StyleSheet, type ViewStyle, TouchableOpacity, View, Image } from 'react-native';
import { tokens } from '@pixkit/tokens';
import { usePixkitFont } from '../PixkitProvider';

// Import assets at the top so Metro can resolve them

export type ButtonImageMap = {
    center: any;
    left: {
        top: any;
        center: any;
        bottom: any;
    },
    right: {
        top: any;
        center: any;
        bottom: any;
    },
    top: any;
    bottom: any;
    centerColor: string;
}
type Variant = 'default' | 'primary' | 'danger';

const BUTTON_IMAGES: Record<Variant, ButtonImageMap> = {
    default: {
        center: require('../assets/buttons/btn-center.png'),
        left: {
            top: require('../assets/buttons/btn-left-top.png'),
            center: require('../assets/buttons/btn-left-center.png'),
            bottom: require('../assets/buttons/btn-left-bottom.png')
        },
        right: {
            top: require('../assets/buttons/btn-right-top.png'),
            center: require('../assets/buttons/btn-right-center.png'),
            bottom: require('../assets/buttons/btn-right-bottom.png')
        },
        top: require('../assets/buttons/btn-top.png'),
        bottom: require('../assets/buttons/btn-bottom.png'),
        centerColor: tokens.colors.success,
    },
    primary: {
        center: require('../assets/buttons/btn-primary-center.png'),
        left: {
            top: require('../assets/buttons/btn-primary-left-top.png'),
            center: require('../assets/buttons/btn-primary-left-center.png'),
            bottom: require('../assets/buttons/btn-primary-left-bottom.png')
        },
        right: {
            top: require('../assets/buttons/btn-primary-right-top.png'),
            center: require('../assets/buttons/btn-primary-right-center.png'),
            bottom: require('../assets/buttons/btn-primary-right-bottom.png')
        },
        top: require('../assets/buttons/btn-primary-top.png'),
        bottom: require('../assets/buttons/btn-primary-bottom.png'),
        centerColor: tokens.colors.primary,
    },
    danger: {
        center: require('../assets/buttons/btn-danger-center.png'),
        left: {
            top: require('../assets/buttons/btn-danger-left-top.png'),
            center: require('../assets/buttons/btn-danger-left-center.png'),
            bottom: require('../assets/buttons/btn-danger-left-bottom.png')
        },
        right: {
            top: require('../assets/buttons/btn-danger-right-top.png'),
            center: require('../assets/buttons/btn-danger-right-center.png'),
            bottom: require('../assets/buttons/btn-danger-right-bottom.png')
        },
        top: require('../assets/buttons/btn-danger-top.png'),
        bottom: require('../assets/buttons/btn-danger-bottom.png'),
        centerColor: tokens.colors.danger,
    }
}


type Props = {
    title: string;
    variant?: Variant;
    style?: ViewStyle | ViewStyle[];
    onPress?: () => void;
    width?: number;
    height?: number;
    fullWidth?: boolean;
};
export function Button({
    title,
    variant = 'default',
    style,
    onPress,
    width,
    height,
    fullWidth,
}: Props): React.ReactNode {
    const v: Variant = variant ?? 'default';
    const fontFamilies = usePixkitFont();
    // Determine tile sizes from assets
    const topSource = Image.resolveAssetSource(BUTTON_IMAGES[v].top);
    const bottomSource = Image.resolveAssetSource(BUTTON_IMAGES[v].bottom);
    const leftCenterSource = Image.resolveAssetSource(BUTTON_IMAGES[v].left.center);

    const topHeight = topSource?.height ?? 0;
    const bottomHeight = bottomSource?.height ?? 0;
    const centerTileHeight = leftCenterSource?.height ?? 0;

    const minHeight = topHeight + bottomHeight + centerTileHeight;
    const usedHeight = height && height > minHeight ? height : minHeight;
    const centerHeight = Math.max(usedHeight - topHeight - bottomHeight, centerTileHeight);

    const widthStyle = width ? { width } : undefined;

    return (
        <TouchableOpacity onPress={onPress} style={style}>
            <View
                style={[
                    styles.outer,
                    fullWidth && styles.outerFullWidth,
                    widthStyle,
                ]}
            >
                <View style={[styles.base, styles[v]]}>
                    {/* Left side as 3 stacked tiles */}
                    <View style={styles.sideColumn}>
                        <Image source={BUTTON_IMAGES[v].left.top} style={styles.sideTile} />
                        <Image
                            source={BUTTON_IMAGES[v].left.center}
                            style={[
                                styles.sideTile,
                                styles.sideCenterTile,
                                { height: centerHeight },
                            ]}
                            resizeMode="stretch"
                        />
                        <Image source={BUTTON_IMAGES[v].left.bottom} style={styles.sideTile} />
                    </View>
                    {/* Center area with top/center/bottom repeated horizontally */}
                    <View style={styles.centerRow}>
                        {/* Top strip */}
                        <View style={styles.topBottomRow}>
                            <Image
                                source={BUTTON_IMAGES[v].top}
                                style={[
                                    styles.topBottomTile,
                                    { width: '100%', height: topHeight },
                                ]}
                                resizeMode="stretch"
                            />
                        </View>
                        {/* Middle strip: solid color fill with text overlay */}
                        <View style={[styles.middleRow, { height: centerHeight }]}>
                            <View
                                style={[
                                    styles.centerFill,
                                    { backgroundColor: BUTTON_IMAGES[v].centerColor },
                                ]}
                            >
                                <View pointerEvents="none" style={styles.labelOverlay}>
                                    <Text style={[styles.text, { fontFamily: fontFamilies.regular }]}>{title}</Text>
                                </View>
                            </View>
                        </View>
                        {/* Bottom strip */}
                        <View style={styles.topBottomRow}>
                            <Image
                                source={BUTTON_IMAGES[v].bottom}
                                style={[
                                    styles.topBottomTile,
                                    { width: '100%', height: bottomHeight },
                                ]}
                                resizeMode="stretch"
                            />
                        </View>
                    </View>
                    {/* Right side as 3 stacked tiles */}
                    <View style={styles.sideColumn}>
                        <Image source={BUTTON_IMAGES[v].right.top} style={styles.sideTile} />
                        <Image
                            source={BUTTON_IMAGES[v].right.center}
                            style={[
                                styles.sideTile,
                                styles.sideCenterTile,
                                { height: centerHeight },
                            ]}
                            resizeMode="stretch"
                        />
                        <Image source={BUTTON_IMAGES[v].right.bottom} style={styles.sideTile} />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    outer: {
        alignItems: 'stretch',
    },
    outerFullWidth: {
        alignSelf: 'stretch',
        width: '100%',
    },
    base: {
        flexDirection: 'row',
        alignItems: 'stretch',
        alignSelf: 'flex-start',
    },
    fullWidth: {
        alignSelf: 'stretch',
        width: '100%',
    },
    default: {},
    primary: {},
    danger: {},
    text: {
        color: tokens.colors.white,

        fontSize: tokens.fontSizes.regular,
    },
    container: {
        flexDirection: 'row',
    },
    sideColumn: {
        flexDirection: 'column',
    },
    sideTile: {},
    sideCenterTile: {},
    centerRow: {
        flexDirection: 'column',
        position: 'relative',
        flex: 1,
        alignItems: 'stretch',
    },
    topBottomRow: {
        flexDirection: 'row',
    },
    topBottomTile: {},
    middleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    center: {},
    centerFill: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'stretch',
        width: '100%',
    },
    tileOverlapH: {
        marginLeft: -1,
    },
    tileOverlapV: {},
    labelOverlay: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        pointerEvents: 'none',
    },
});