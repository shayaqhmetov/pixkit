import * as React from 'react';
import { Modal, View, Text, StyleSheet, Pressable } from 'react-native';
import type { ViewProps, TextProps } from 'react-native';

export type DialogProps = ViewProps & {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

const DialogContext = React.createContext<{
  open: boolean;
  setOpen: (open: boolean) => void;
} | null>(null);

const DialogRoot: React.FC<DialogProps> = ({
  children,
  open = false,
  onOpenChange,
}) => {
  const [isOpen, setIsOpen] = React.useState(open);

  React.useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const setOpen = (value: boolean) => {
    setIsOpen(value);
    onOpenChange?.(value);
  };

  return (
    <DialogContext.Provider value={{ open: isOpen, setOpen }}>
      {children}
    </DialogContext.Provider>
  );
};

export type DialogTriggerProps = ViewProps & { onPress?: () => void };
const DialogTrigger: React.FC<DialogTriggerProps> = ({ children, onPress, ...props }) => {
  const ctx = React.useContext(DialogContext);

  const handlePress = () => {
    ctx?.setOpen(true);
    onPress?.();
  };

  return (
    <Pressable onPress={handlePress} {...props}>
      {children}
    </Pressable>
  );
};

export type DialogOverlayProps = ViewProps;
const DialogOverlay: React.FC<DialogOverlayProps> = ({ style, ...props }) => {
  const ctx = React.useContext(DialogContext);
  if (!ctx?.open) return null;

  const handlePress = () => ctx?.setOpen(false);

  return (
    <Pressable style={[styles.overlay, style]} onPress={handlePress} {...props} />
  );
};

export type DialogContentProps = ViewProps;
const DialogContent: React.FC<DialogContentProps> = ({ style, ...props }) => {
  const ctx = React.useContext(DialogContext);
  if (!ctx?.open) return null;

  return (
    <Modal transparent visible={ctx.open} animationType="fade">
      <View style={styles.centered}>
        <View style={[styles.content, style]} {...props} />
      </View>
    </Modal>
  );
};

export type DialogHeaderProps = ViewProps;
const DialogHeader: React.FC<DialogHeaderProps> = ({ style, ...props }) => (
  <View style={[styles.header, style]} {...props} />
);

export type DialogTitleProps = TextProps;
const DialogTitle: React.FC<DialogTitleProps> = ({ style, ...props }) => (
  <Text style={[styles.title, style]} {...props} />
);

export type DialogDescriptionProps = TextProps;
const DialogDescription: React.FC<DialogDescriptionProps> = ({ style, ...props }) => (
  <Text style={[styles.description, style]} {...props} />
);

export type DialogFooterProps = ViewProps;
const DialogFooter: React.FC<DialogFooterProps> = ({ style, ...props }) => (
  <View style={[styles.footer, style]} {...props} />
);

export const Dialog = Object.assign(DialogRoot, {
  Trigger: DialogTrigger,
  Overlay: DialogOverlay,
  Content: DialogContent,
  Header: DialogHeader,
  Title: DialogTitle,
  Description: DialogDescription,
  Footer: DialogFooter,
});

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    minWidth: 260,
    maxWidth: '80%',
    backgroundColor: '#24283b',
    borderWidth: 4,
    borderColor: '#1a1b26',
    padding: 16,
  },
  header: {
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e1e3ed',
  },
  description: {
    fontSize: 14,
    color: '#a9b1d6',
  },
  footer: {
    marginTop: 12,
  },
});
