import * as React from 'react';

export const Breadcrumb: React.FC<
    React.HTMLAttributes<HTMLElement> & { 'aria-label'?: string }
> = ({ className = '', ...props }) => (
    <nav className={`pix-bc ${className}`} aria-label={props['aria-label'] ?? 'Breadcrumb'} {...props} />
);

export const BreadcrumbList: React.FC<React.HTMLAttributes<HTMLOListElement>> = ({ className = '', ...props }) => (
    <ol className={`pix-bc__list ${className}`} {...props} />
);

export const BreadcrumbItem: React.FC<React.LiHTMLAttributes<HTMLLIElement>> = ({ className = '', ...props }) => (
    <li className={`pix-bc__item ${className}`} {...props} />
);

export const BreadcrumbLink: React.FC<
    React.AnchorHTMLAttributes<HTMLAnchorElement> & { isCurrent?: boolean }
> = ({ className = '', isCurrent, ...props }) => {
    if (isCurrent) {
        return <span className={`pix-bc__current ${className}`} aria-current="page">{props.children}</span>;
    }
    return <a className={`pix-bc__link ${className}`} {...props} />;
};

export const BreadcrumbSeparator: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({ className = '', ...props }) => (
    <span role="presentation" className={`pix-bc__separator ${className}`} {...props}>›</span>
);
