import * as React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import type { ViewProps, TextProps } from 'react-native';
import { useColors } from '../PixkitProvider';

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

  const c = useColors();
  return (
    <AccordionContext.Provider
      value={{ value: currentValue, onValueChange, type, collapsible }}
    >
      <View style={[styles.accordion, { borderColor: c.line }, style]} {...rest}>
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
}) => {
  const c = useColors();
  return (
    <AccordionItemContext.Provider value={{ itemValue: value }}>
      <View style={[styles.item, { borderBottomColor: c.line }, style]} {...rest}>
        {children}
      </View>
    </AccordionItemContext.Provider>
  );
};

export const AccordionContent: React.FC<AccordionContentProps> = ({
  children,
  isActive,
  style,
  ...rest
}) => {
  const c = useColors();
  if (!isActive) return null;
  return (
    <View style={[styles.content, { backgroundColor: c.bgElev1 }, style]} {...rest}>
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
  const c = useColors();

  const handlePress = () => {
    if (context && itemCtx?.itemValue) {
      context.onValueChange(itemCtx.itemValue);
    }
  };

  return (
    <Pressable onPress={handlePress} style={[styles.triggerWrapper, { backgroundColor: c.bgElev2 }]}>
      <Text style={[{ color: c.fg }, style]} {...rest}>
        {children}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  accordion: {
    borderWidth: 4,
  },
  item: {
    borderBottomWidth: 2,
  },
  content: {
    padding: 8,
  },
  triggerWrapper: {
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
});
