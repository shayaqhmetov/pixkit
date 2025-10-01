import React from "react";

export const SidebarProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    return <div className="pix-sidebar-provider">{children}</div>;
};

export const Sidebar: React.FC<React.HTMLAttributes<HTMLElement>> = ({ className = '', ...props }) => (
    <aside className={`pix-sidebar ${className}`} {...props} />
);

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
    <div className={`pix-sidebar-group-label ${className}`} {...props} />
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