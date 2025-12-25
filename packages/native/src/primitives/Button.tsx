import * as React from 'react';
import { Text, StyleSheet, type ViewStyle, TouchableOpacity, View, Image } from 'react-native';
import { tokens } from '@pixkit/tokens';

// Import assets at the top so Metro can resolve them
const btnCenter = require('../assets/btn-center.png');
const btnBottom = require('../assets/btn-bottom.png');
const btnTop = require('../assets/btn-top.png');

const btnLeftTop = require('../assets/btn-left-top.png');
const btnLeftCenter = require('../assets/btn-left-center.png');
const btnLeftBottom = require('../assets/btn-left-bottom.png');

const btnRightTop = require('../assets/btn-right-top.png');
const btnRightCenter = require('../assets/btn-right-center.png');
const btnRightBottom = require('../assets/btn-right-bottom.png');

type Variant = 'default';

const assets: Record<
    Variant,
    {
        center: any;
        bottom: any;
        top: any;
        leftTop: any;
        leftCenter: any;
        leftBottom: any;
        rightTop: any;
        rightCenter: any;
        rightBottom: any;
        centerColor: string;
    }
> = {
    default: {
        center: btnCenter,
        bottom: btnBottom,
        top: btnTop,
        leftTop: btnLeftTop,
        leftCenter: btnLeftCenter,
        leftBottom: btnLeftBottom,
        rightTop: btnRightTop,
        rightCenter: btnRightCenter,
        rightBottom: btnRightBottom,
        centerColor: tokens.colors.success,
    },
};


type Props = {
    title: string;
    variant?: Variant;
    style?: ViewStyle | ViewStyle[];
    onPress?: () => void;
    width?: number;
    height?: number;
    fullWidth?: boolean;
};
export const Button: React.FC<Props> = ({
    title,
    variant = 'default',
    style,
    onPress,
    width,
    height,
    fullWidth,
}) => {
    const v: Variant = variant ?? 'default';
    // Determine tile sizes from assets
    const topSource = Image.resolveAssetSource(assets[v].top);
    const bottomSource = Image.resolveAssetSource(assets[v].bottom);
    const leftCenterSource = Image.resolveAssetSource(assets[v].leftCenter);

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
                        <Image source={assets[v].leftTop} style={styles.sideTile} />
                        <Image
                            source={assets[v].leftCenter}
                            style={[
                                styles.sideTile,
                                styles.sideCenterTile,
                                { height: centerHeight },
                            ]}
                            resizeMode="stretch"
                        />
                        <Image source={assets[v].leftBottom} style={styles.sideTile} />
                    </View>
                    {/* Center area with top/center/bottom repeated horizontally */}
                    <View style={styles.centerRow}>
                        {/* Top strip */}
                        <View style={styles.topBottomRow}>
                            <Image
                                source={assets[v].top}
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
                                    { backgroundColor: assets[v].centerColor },
                                ]}
                            >
                                <View pointerEvents="none" style={styles.labelOverlay}>
                                    <Text style={v === 'default' ? styles.text : styles.textDark}>{title}</Text>
                                </View>
                            </View>
                        </View>
                        {/* Bottom strip */}
                        <View style={styles.topBottomRow}>
                            <Image
                                source={assets[v].bottom}
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
                        <Image source={assets[v].rightTop} style={styles.sideTile} />
                        <Image
                            source={assets[v].rightCenter}
                            style={[
                                styles.sideTile,
                                styles.sideCenterTile,
                                { height: centerHeight },
                            ]}
                            resizeMode="stretch"
                        />
                        <Image source={assets[v].rightBottom} style={styles.sideTile} />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};
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
        color: tokens.colors.fg,
    },
    textDark: {
        color: '#000000',
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