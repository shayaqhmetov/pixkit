import React from "react";

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
