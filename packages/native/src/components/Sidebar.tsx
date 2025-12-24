import * as React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import type { ViewProps, TextProps } from 'react-native';

export type SidebarContextValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

const SidebarContext = React.createContext<SidebarContextValue | null>(null);

export const SidebarProvider: React.FC<React.PropsWithChildren<{ open?: boolean }>> = ({
  children,
  open: openProp,
}) => {
  const [isOpen, setIsOpen] = React.useState(!!openProp);

  React.useEffect(() => {
    if (openProp !== undefined) {
      setIsOpen(!!openProp);
    }
  }, [openProp]);

  const open = React.useCallback(() => setIsOpen(true), []);
  const close = React.useCallback(() => setIsOpen(false), []);
  const toggle = React.useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const value = React.useMemo(
    () => ({ isOpen, open, close, toggle }),
    [isOpen, open, close, toggle],
  );

  return (
    <SidebarContext.Provider value={value}>
      <View style={styles.provider}>{children}</View>
    </SidebarContext.Provider>
  );
};

export type SidebarProps = ViewProps;
export const Sidebar: React.FC<SidebarProps> = ({ style, ...props }) => {
  const context = React.useContext(SidebarContext);
  const isOpen = context?.isOpen ?? false;

  if (!isOpen) return null;

  return <View style={[styles.sidebar, style]} {...props} />;
};

export type SidebarHeaderProps = ViewProps;
export const SidebarHeader: React.FC<SidebarHeaderProps> = ({ style, ...props }) => (
  <View style={[styles.header, style]} {...props} />
);

export type SidebarContentProps = ViewProps;
export const SidebarContent: React.FC<SidebarContentProps> = ({ style, ...props }) => (
  <View style={[styles.content, style]} {...props} />
);

export type SidebarGroupProps = ViewProps;
export const SidebarGroup: React.FC<SidebarGroupProps> = ({ style, ...props }) => (
  <View style={[styles.group, style]} {...props} />
);

export type SidebarFooterProps = ViewProps;
export const SidebarFooter: React.FC<SidebarFooterProps> = ({ style, ...props }) => (
  <View style={[styles.footer, style]} {...props} />
);

export type SidebarGroupContentProps = ViewProps;
export const SidebarGroupContent: React.FC<SidebarGroupContentProps> = ({ style, ...props }) => (
  <View style={[styles.groupContent, style]} {...props} />
);

export type SidebarGroupLabelProps = TextProps;
export const SidebarGroupLabel: React.FC<SidebarGroupLabelProps> = ({ style, ...props }) => (
  <Text style={[styles.groupLabel, style]} {...props} />
);

export type SidebarMenuProps = ViewProps;
export const SidebarMenu: React.FC<SidebarMenuProps> = ({ style, ...props }) => (
  <View style={[styles.menu, style]} {...props} />
);

export type SidebarMenuItemProps = ViewProps;
export const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({ style, ...props }) => (
  <View style={[styles.menuItem, style]} {...props} />
);

export type SidebarMenuButtonProps = TextProps & { onPress?: () => void };
export const SidebarMenuButton: React.FC<SidebarMenuButtonProps> = ({
  children,
  style,
  onPress,
  ...props
}) => (
  <Pressable onPress={onPress} style={styles.menuButtonWrapper}>
    <Text style={[styles.menuButton, style]} {...props}>
      {children}
    </Text>
  </Pressable>
);

export type SidebarTriggerProps = ViewProps & { onPress?: () => void };
export const SidebarTrigger: React.FC<SidebarTriggerProps> = ({ style, onPress, ...props }) => {
  const context = React.useContext(SidebarContext);

  const handlePress = () => {
    onPress?.();
    context?.toggle();
  };

  return (
    <Pressable onPress={handlePress} style={[styles.triggerWrapper, style]} {...props}>
      <Text style={styles.triggerIcon}>☰</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  provider: {
    flex: 1,
  },
  sidebar: {
    width: 260,
    backgroundColor: '#24283b',
    borderRightWidth: 4,
    borderRightColor: '#1a1b26',
    padding: 12,
  },
  header: {
    marginBottom: 12,
  },
  content: {
    flex: 1,
  },
  group: {
    marginBottom: 8,
  },
  footer: {
    marginTop: 12,
  },
  groupContent: {},
  groupLabel: {
    color: '#e1e3ed',
    marginBottom: 4,
  },
  menu: {},
  menuItem: {
    marginBottom: 4,
  },
  menuButtonWrapper: {},
  menuButton: {
    color: '#e1e3ed',
  },
  triggerWrapper: {
    padding: 8,
    backgroundColor: '#24283b',
    borderWidth: 3,
    borderColor: '#1a1b26',
  },
  triggerIcon: {
    color: '#e1e3ed',
    fontSize: 16,
  },
});
