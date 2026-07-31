import * as React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import type { ViewProps, TextProps } from 'react-native';
import { useColors } from '../PixkitProvider';

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
}) => {
  const c = useColors();
  return (
    <Pressable onPress={onPress} style={[styles.triggerWrapper, { backgroundColor: c.bgElev1 }]}>
      <Text style={[{ color: c.fg }, style]} {...props}>
        {children}
      </Text>
    </Pressable>
  );
};

export type NavigationMenuContentProps = ViewProps;
export const NavigationMenuContent: React.FC<NavigationMenuContentProps> = ({ style, ...props }) => {
  const c = useColors();
  return (
    <View style={[styles.contentRegion]}>
      <View style={[styles.content, { borderColor: c.line, backgroundColor: c.bgElev1 }, style]} {...props} />
    </View>
  );
};

export type NavigationMenuLinkProps = TextProps & {
  onPress?: () => void;
};
export const NavigationMenuLink: React.FC<NavigationMenuLinkProps> = ({
  children,
  style,
  onPress,
  ...props
}) => {
  const c = useColors();
  return (
    <Pressable onPress={onPress}>
      <Text style={[styles.link, { color: c.accent }, style]} {...props}>
        {children}
      </Text>
    </Pressable>
  );
};

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
  },
  contentRegion: {
    marginTop: 8,
  },
  content: {
    borderWidth: 4,
    padding: 8,
  },
  link: {
    textDecorationLine: 'underline',
  },
});
