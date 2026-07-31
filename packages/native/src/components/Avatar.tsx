import * as React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import type { ViewProps, ImageProps, TextProps } from 'react-native';
import { useColors } from '../PixkitProvider';
import type { ResolvedColors } from '../theme';

export type AvatarRootProps = ViewProps;
const AvatarRoot: React.FC<AvatarRootProps> = ({ style, ...props }) => {
  const c = useColors();
  const styles = React.useMemo(() => makeStyles(c), [c]);
  return <View style={[styles.root, style]} {...props} />;
};

export type AvatarImageProps = ImageProps;
const AvatarImage: React.FC<AvatarImageProps> = ({ style, ...props }) => (
  <Image style={[styles.image, style]} {...props} />
);

export type AvatarFallbackProps = TextProps;
const AvatarFallback: React.FC<AvatarFallbackProps> = ({ style, ...props }) => {
  const c = useColors();
  return <Text style={[{ color: c.fg }, style]} {...props} />;
};

export const Avatar = Object.assign(AvatarRoot, {
  Image: AvatarImage,
  Fallback: AvatarFallback,
});

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

const makeStyles = (c: ResolvedColors) =>
  StyleSheet.create({
    root: {
      width: 48,
      height: 48,
      borderRadius: 4,
      overflow: 'hidden',
      borderWidth: 4,
      borderColor: c.line,
      backgroundColor: c.bgElev1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
