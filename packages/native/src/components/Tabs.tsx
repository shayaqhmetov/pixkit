import * as React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import type { ViewProps, TextProps } from 'react-native';
import { useColors } from '../PixkitProvider';

export type TabsContextValue = {
  value: string;
  onValueChange: (value: string) => void;
};

export const TabsContext = React.createContext<TabsContextValue | null>(null);

export const TabsProvider: React.FC<{
  value: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
}> = ({ value, onValueChange, children }) => (
  <TabsContext.Provider value={{ value, onValueChange }}>
    {children}
  </TabsContext.Provider>
);

export type TabsProps = ViewProps & {
  defaultValue: string;
};

export const Tabs: React.FC<TabsProps> = ({
  children,
  style,
  defaultValue,
  ...rest
}) => {
  const c = useColors();
  const [currentValue, setCurrentValue] = React.useState(defaultValue);

  React.useEffect(() => {
    setCurrentValue(defaultValue);
  }, [defaultValue]);

  const contents = React.Children.toArray(children).filter((child) => {
    return React.isValidElement(child) && child.type === TabsContent;
  }) as React.ReactElement<TabsContentProps>[];

  const targetContent = contents.find((content) => content.props.value === currentValue);

  const tabList = React.Children.toArray(children).find((child) => {
    return React.isValidElement(child) && child.type === TabsList;
  }) as React.ReactElement | undefined;

  const onValueChange = (value: string) => {
    setCurrentValue(value);
  };

  return (
    <TabsProvider value={currentValue} onValueChange={onValueChange}>
      <View style={[styles.tabs, { borderColor: c.line }, style]} {...rest}>
        {tabList}
        {targetContent}
      </View>
    </TabsProvider>
  );
};

export type TabsListProps = ViewProps;

export const TabsList: React.FC<TabsListProps> = ({ style, ...props }) => {
  const c = useColors();
  return <View style={[styles.list, { borderBottomColor: c.line }, style]} {...props} />;
};

export type TabsContentProps = ViewProps & {
  value: string;
};

export const TabsContent: React.FC<TabsContentProps> = ({ style, ...props }) => (
  <View style={[styles.content, style]} {...props} />
);

export type TabsTriggerProps = TextProps & {
  value: string;
};

export const TabsTrigger: React.FC<TabsTriggerProps> = ({
  children,
  style,
  value,
  ...props
}) => {
  const c = useColors();
  const context = React.useContext(TabsContext);
  const isActive = context?.value === value;

  const handlePress = () => {
    context?.onValueChange(value);
  };

  return (
    <Pressable
      onPress={handlePress}
      style={[
        styles.trigger,
        { borderRightColor: c.line, backgroundColor: isActive ? c.accent : c.bgElev1 },
      ]}
    >
      <Text style={[{ color: isActive ? c.bg : c.fg }, style]} {...props}>
        {children}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  tabs: {
    borderWidth: 4,
  },
  list: {
    flexDirection: 'row',
    borderBottomWidth: 2,
  },
  content: {
    padding: 8,
  },
  trigger: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRightWidth: 2,
  },
});
