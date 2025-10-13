// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import React from "react";



export const TabsList: React.FC<React.HTMLAttributes<HTMLElement>> = ({ className = '', ...props }) => (
    <div className={`pix-tabs-list ${className}`} {...props} />
);

export const TabsContext = React.createContext<{
    value: string;
    onValueChange: (value: string) => void;
} | null>(null);

export const TabsProvider: React.FC<{ value: string; onValueChange: (value: string) => void; children: React.ReactNode }> = ({ value, onValueChange, children }) => (
    <TabsContext.Provider value={{ value, onValueChange }}>
        {children}
    </TabsContext.Provider>
);

export const TabsContent: React.FC<React.HTMLAttributes<HTMLElement> & { value: string }> = ({ className = '', value, ...props }) => {
    return <div className={`pix-tabs-content ${className}`} {...props} />;
};

export const TabsTrigger: React.FC<React.HTMLAttributes<HTMLElement> & { value: string }> = ({ className = '', value, ...props }) => {
    const context = React.useContext(TabsContext);
    const isActive = context?.value === value;
    const handleClick = () => {
        context?.onValueChange(value);
    };
    return (<button className={`pix-tabs-trigger ${isActive ? 'active' : ''} ${className}`} onClick={handleClick} {...props} />);
};

export const Tabs: React.FC<React.HTMLAttributes<HTMLElement> & { defaultValue: string; }> = ({
    className = '',
    defaultValue,
    ...props
}) => {
     const contents = React.Children.toArray(props.children).filter(child => {
        return React.isValidElement(child) && child.type === TabsContent;
    }) as React.ReactElement<{ value: string }>[]; 
    let defaultTargetContent = contents.find(content => content.props.value === defaultValue);
    const [targetContent, setTargetContent] = React.useState(defaultTargetContent);

    React.useEffect(() => {
        setTargetContent(defaultTargetContent);
    }, [defaultValue]);

    // Find the TabsList and TabsContent children.
    const tabList = React.Children.toArray(props.children).find(child => {
        return React.isValidElement(child) && child.type === TabsList;
    }) as React.ReactElement;

    const onValueChange = (value: string) => {
        setTargetContent(contents.find(content => content.props.value === value));
    };

    return (
        <TabsProvider value={defaultValue} onValueChange={onValueChange}>
            <div className={`pix-tabs ${className}`} {...props}>
                {tabList}
                {targetContent}
            </div>
        </TabsProvider>
    );
};