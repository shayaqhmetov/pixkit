import React from 'react';

export const NavigationMenuLink: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({ className = '', ...props }) => (
    <a className={`pix-nav__link ${className}`} {...props} />
);

export const NavigationMenu: React.FC<React.HTMLAttributes<HTMLElement>> = ({ className = '', ...props }) => (
    <nav className={`pix-nav ${className}`} {...props} />
);

export const NavigationMenuList: React.FC<React.HTMLAttributes<HTMLUListElement>> = ({ className = '', ...props }) => (
    <ul className={`pix-nav__list ${className}`} {...props} />
);

export const NavigationMenuItem: React.FC<React.LiHTMLAttributes<HTMLLIElement>> = ({ className = '', ...props }) => (
    <li className={`pix-nav__item ${className}`} {...props} />
);

export const NavigationMenuTrigger: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ className = '', ...props }) => (
    <button className={`pix-nav__trigger ${className}`} {...props} />
);

export const NavigationMenuContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = '', ...props }) => (
    <div className={`pix-nav__content_region ${className}`}>
        <div className={`pix-nav__content`} {...props} />
    </div>
);
