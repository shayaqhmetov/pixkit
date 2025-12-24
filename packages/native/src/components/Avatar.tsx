import * as React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import type { ViewProps, ImageProps, TextProps } from 'react-native';

export type AvatarRootProps = ViewProps;
const AvatarRoot: React.FC<AvatarRootProps> = ({ style, ...props }) => (
  <View style={[styles.root, style]} {...props} />
);

export type AvatarImageProps = ImageProps;
const AvatarImage: React.FC<AvatarImageProps> = ({ style, ...props }) => (
  <Image style={[styles.image, style]} {...props} />
);

export type AvatarFallbackProps = TextProps;
const AvatarFallback: React.FC<AvatarFallbackProps> = ({ style, ...props }) => (
  <Text style={[styles.fallback, style]} {...props} />
);

export const Avatar = Object.assign(AvatarRoot, {
  Image: AvatarImage,
  Fallback: AvatarFallback,
});

const styles = StyleSheet.create({
  root: {
    width: 48,
    height: 48,
    borderRadius: 4,
    overflow: 'hidden',
    borderWidth: 4,
    borderColor: '#1a1b26',
    backgroundColor: '#24283b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  fallback: {
    color: '#e1e3ed',
  },
});
