import React from "react";
import { Button } from "../primitives/Button";
import { IconSidebarToggle } from "../primitives/icons";

type SidebarContextValue = {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    toggle: () => void;
};

const SidebarContext = React.createContext<SidebarContextValue | null>(null);

export const SidebarProvider: React.FC<React.PropsWithChildren<{ open?: boolean }>> = ({ children, open: openProp }) => {
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
        () => ({
            isOpen,
            open,
            close,
            toggle,
        }),
        [isOpen, open, close, toggle]
    );

    return (
        <SidebarContext.Provider value={value}>
            <div className="pix-sidebar-provider">{children}</div>
        </SidebarContext.Provider>
    );
};

export const Sidebar: React.FC<React.HTMLAttributes<HTMLElement>> = ({ className = '', ...props }) => {
    const context = React.useContext(SidebarContext);
    const stateClass = context ? (context.isOpen ? 'open' : 'closed') : '';
    const classes = ['pix-sidebar', stateClass, className].filter(Boolean).join(' ');

    return <aside className={classes} {...props} />;
};

export const SidebarHeader: React.FC<React.HTMLAttributes<HTMLElement>> = ({ className = '', ...props }) => (
    <div className={`pix-sidebar-header ${className}`} {...props} />
);

export const SidebarContent: React.FC<React.HTMLAttributes<HTMLElement>> = ({ className = '', ...props }) => (
    <div className={`pix-sidebar-content ${className}`} {...props} />
);

export const SidebarGroup: React.FC<React.HTMLAttributes<HTMLElement>> = ({ className = '', ...props }) => (
    <div className={`pix-sidebar-group ${className}`} {...props} />
);

export const SidebarFooter: React.FC<React.HTMLAttributes<HTMLElement>> = ({ className = '', ...props }) => (
    <div className={`pix-sidebar-footer ${className}`} {...props} />
);

export const SidebarGroupContent: React.FC<React.HTMLAttributes<HTMLElement>> = ({ className = '', ...props }) => (
    <div className={`pix-sidebar-group-content ${className}`} {...props} />
);

export const SidebarGroupLabel: React.FC<React.HTMLAttributes<HTMLElement>> = ({ className = '', ...props }) => (
    <h3 className={`pix-sidebar-group-label ${className}`} {...props} />
);

export const SidebarMenu: React.FC<React.HTMLAttributes<HTMLElement>> = ({ className = '', ...props }) => (
    <nav className={`pix-sidebar-menu ${className}`} {...props} />
);

export const SidebarMenuButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ className = '', ...props }) => (
    <button className={`pix-sidebar-menu-button ${className}`} {...props} />
);

export const SidebarMenuItem: React.FC<React.LiHTMLAttributes<HTMLLIElement>> = ({ className = '', ...props }) => (
    <li className={`pix-sidebar-menu-item ${className}`} {...props} />
);

export const SidebarTrigger: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
    className = '',
    onClick,
    ['aria-pressed']: ariaPressedProp,
    ...props
}) => {
    const context = React.useContext(SidebarContext);
    const classes = ['pix-sidebar-trigger', className].filter(Boolean).join(' ');

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onClick?.(event);
        if (event.defaultPrevented) {
            return;
        }

        context?.toggle();
    };

    const ariaPressed = context ? context.isOpen : ariaPressedProp;

    return (
        <span className="pix-sidebar-trigger-wrapper" onClick={handleClick}>
            <IconSidebarToggle />
        </span>
    );
};
