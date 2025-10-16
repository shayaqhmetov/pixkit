import React from "react";

type AccordionProps = React.HTMLAttributes<HTMLDivElement> & {
    type?: 'single' | 'multiple';
    collapsible?: boolean;
    className?: string;
    defaultValue?: string;
};

type AccordionItemProps = React.HTMLAttributes<HTMLDivElement> & {
    className?: string;
    value?: string;
};

type AccordionContentProps = React.HTMLAttributes<HTMLDivElement> & {
    className?: string;
    isActive?: boolean;
};

const AccordionContext = React.createContext<{
    value: string | null;
    onValueChange: (value: string) => void;
    type: 'single' | 'multiple';
    collapsible: boolean;
} | null>(null);

const AccordionProvider: React.FC<{
    value: string | null;
    onValueChange: (value: string) => void;
    type: 'single' | 'multiple';
    collapsible: boolean;
    children: React.ReactNode;
}> = ({ value, onValueChange, type, collapsible, children }) => (
    <AccordionContext.Provider value={{ value, onValueChange, type, collapsible }}>
        {children}
    </AccordionContext.Provider>
);

const AccordionItemContext = React.createContext<{
    itemValue?: string;
} | null>(null);

export const Accordion: React.FC<AccordionProps> = (props) => {
    const { className = '', type = 'single', collapsible = false, defaultValue = '', ...rest } = props;
    const [currentValue, setCurrentValue] = React.useState<string | null>(defaultValue || (collapsible ? null : ''));
    const onValueChange = (value: string) => {
        if (type === 'single') {
            if (collapsible && currentValue === value) {
                setCurrentValue(null);
            } else {
                setCurrentValue(value);
            }
        } else {
            // For 'multiple' type, we can implement multi-select logic if needed.
            setCurrentValue(value);
        }
    };
    let contents = React.Children.toArray(props.children).filter((child) => {
        if (React.isValidElement(child) && child.type === AccordionItem) {
            return true;
        }
        return false;
    }) as React.ReactElement<AccordionItemProps>[];

    contents = contents.map((item) => {
        const isActive = item.props.value === currentValue;
        const items = item?.props?.children || [];
        const itemProps = (items as any[]).map((child: any) => {
            if (React.isValidElement(child) && child.type === AccordionContent) {
                return React.cloneElement(child, { isActive, key: item.props.value } as any);
            }
            return child;
        });
        return React.cloneElement(item, { children: itemProps });
    });

    React.useEffect(() => {
        setCurrentValue(defaultValue || (collapsible ? null : ''));
    }, [defaultValue, collapsible]);

    return (
        <AccordionProvider value={currentValue} onValueChange={onValueChange} type={type} collapsible={collapsible}>
            <div className={`pix-accordion ${className}`} {...rest} >
                {contents}
            </div>
        </AccordionProvider>
    );
};

export const AccordionContent: React.FC<AccordionContentProps> = ({ className = '', isActive, ...props }) => (
    <div className={`pix-accordion-content ${className} ${isActive ? 'active' : ''}`} {...props} >
        {props.children}
    </div>
);

export const AccordionItem: React.FC<AccordionItemProps> = ({ className = '', value, ...props }) => (
    <AccordionItemContext.Provider value={{ itemValue: value }}>
        <div className={`pix-accordion-item ${className}`} {...props} />
    </AccordionItemContext.Provider>
);

export const AccordionTrigger: React.FC<React.HTMLAttributes<HTMLElement>> = ({ className = '', ...props }) => {
    const context = React.useContext(AccordionContext);
    const itemCtx = React.useContext(AccordionItemContext);
    const triggerRef = React.useRef<HTMLDivElement>(null);

    const handleClick = () => {
        if (context && itemCtx?.itemValue) {
            context.onValueChange(itemCtx.itemValue);
        }   
    };

    return (
        <div
            ref={triggerRef}
            className={`pix-accordion-trigger ${className}`}
            onClick={handleClick}
            {...props}
        >
           <span>{props.children}</span>
        </div>
    );
};
