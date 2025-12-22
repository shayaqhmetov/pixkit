import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import type { ViewProps, TextProps } from 'react-native';

export type AccordionProps = ViewProps & {
  type?: 'single' | 'multiple';
  collapsible?: boolean;
  defaultValue?: string;
};

export type AccordionItemProps = ViewProps & {
  value?: string;
};

export type AccordionContentProps = ViewProps & {
  isActive?: boolean;
};

const AccordionContext = React.createContext<{
  value: string | null;
  onValueChange: (value: string) => void;
  type: 'single' | 'multiple';
  collapsible: boolean;
} | null>(null);

const AccordionItemContext = React.createContext<{
  itemValue?: string;
} | null>(null);

export const Accordion: React.FC<AccordionProps> = ({
  children,
  type = 'single',
  collapsible = false,
  defaultValue = '',
  style,
  ...rest
}) => {
  const [currentValue, setCurrentValue] = React.useState<string | null>(
    defaultValue || (collapsible ? null : ''),
  );

  const onValueChange = (value: string) => {
    if (type === 'single') {
      if (collapsible && currentValue === value) {
        setCurrentValue(null);
      } else {
        setCurrentValue(value);
      }
    } else {
      setCurrentValue(value);
    }
  };

  React.useEffect(() => {
    setCurrentValue(defaultValue || (collapsible ? null : ''));
  }, [defaultValue, collapsible]);

  let contents = React.Children.toArray(children).filter((child) => {
    return React.isValidElement(child) && (child.type === AccordionItem);
  }) as React.ReactElement<AccordionItemProps>[];

  contents = contents.map((item) => {
    const isActive = item.props.value === currentValue;
    const items = item.props.children || [];
    const itemChildren = React.Children.map(items as any, (child: any) => {
      if (React.isValidElement(child) && child.type === AccordionContent) {
        return React.cloneElement(child, { isActive } as any);
      }
      return child;
    });
    return React.cloneElement(item, { children: itemChildren });
  });

  return (
    <AccordionContext.Provider
      value={{ value: currentValue, onValueChange, type, collapsible }}
    >
      <View style={[styles.accordion, style]} {...rest}>
        {contents}
      </View>
    </AccordionContext.Provider>
  );
};

export const AccordionItem: React.FC<AccordionItemProps> = ({
  children,
  value,
  style,
  ...rest
}) => (
  <AccordionItemContext.Provider value={{ itemValue: value }}>
    <View style={[styles.item, style]} {...rest}>
      {children}
    </View>
  </AccordionItemContext.Provider>
);

export const AccordionContent: React.FC<AccordionContentProps> = ({
  children,
  isActive,
  style,
  ...rest
}) => {
  if (!isActive) return null;
  return (
    <View style={[styles.content, style]} {...rest}>
      {children}
    </View>
  );
};

export type AccordionTriggerProps = TextProps & {
  value?: string;
};

export const AccordionTrigger: React.FC<AccordionTriggerProps> = ({
  children,
  style,
  ...rest
}) => {
  const context = React.useContext(AccordionContext);
  const itemCtx = React.useContext(AccordionItemContext);

  const handlePress = () => {
    if (context && itemCtx?.itemValue) {
      context.onValueChange(itemCtx.itemValue);
    }
  };

  return (
    <Pressable onPress={handlePress} style={styles.triggerWrapper}>
      <Text style={[styles.triggerText, style]} {...rest}>
        {children}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  accordion: {
    borderWidth: 4,
    borderColor: '#1a1b26',
  },
  item: {
    borderBottomWidth: 2,
    borderBottomColor: '#1a1b26',
  },
  content: {
    padding: 8,
    backgroundColor: '#24283b',
  },
  triggerWrapper: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    backgroundColor: '#414868',
  },
  triggerText: {
    color: '#e1e3ed',
  },
});
