import * as React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import type { ViewProps, TextProps } from 'react-native';

export type NavigationMenuProps = ViewProps;
export const NavigationMenu: React.FC<NavigationMenuProps> = ({ style, ...props }) => (
  <View style={[styles.nav, style]} {...props} />
);

export type NavigationMenuListProps = ViewProps;
export const NavigationMenuList: React.FC<NavigationMenuListProps> = ({ style, ...props }) => (
  <View style={[styles.list, style]} {...props} />
);

export type NavigationMenuItemProps = ViewProps;
export const NavigationMenuItem: React.FC<NavigationMenuItemProps> = ({ style, ...props }) => (
  <View style={[styles.item, style]} {...props} />
);

export type NavigationMenuTriggerProps = TextProps & {
  onPress?: () => void;
};
export const NavigationMenuTrigger: React.FC<NavigationMenuTriggerProps> = ({
  children,
  style,
  onPress,
  ...props
}) => (
  <Pressable onPress={onPress} style={styles.triggerWrapper}>
    <Text style={[styles.triggerText, style]} {...props}>
      {children}
    </Text>
  </Pressable>
);

export type NavigationMenuContentProps = ViewProps;
export const NavigationMenuContent: React.FC<NavigationMenuContentProps> = ({ style, ...props }) => (
  <View style={[styles.contentRegion]}>
    <View style={[styles.content, style]} {...props} />
  </View>
);

export type NavigationMenuLinkProps = TextProps & {
  onPress?: () => void;
};
export const NavigationMenuLink: React.FC<NavigationMenuLinkProps> = ({
  children,
  style,
  onPress,
  ...props
}) => (
  <Pressable onPress={onPress}>
    <Text style={[styles.link, style]} {...props}>
      {children}
    </Text>
  </Pressable>
);

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  list: {
    flexDirection: 'row',
  },
  item: {
    marginHorizontal: 4,
  },
  triggerWrapper: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: '#24283b',
  },
  triggerText: {
    color: '#e1e3ed',
  },
  contentRegion: {
    marginTop: 8,
  },
  content: {
    borderWidth: 4,
    borderColor: '#1a1b26',
    padding: 8,
    backgroundColor: '#24283b',
  },
  link: {
    color: '#8be9fd',
    textDecorationLine: 'underline',
  },
});
