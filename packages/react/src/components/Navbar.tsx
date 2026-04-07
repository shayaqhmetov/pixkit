import * as React from 'react';
import clsx from 'clsx';

// ── Navbar Root ───────────────────────────────────────────────────────────────

type NavbarProps = React.HTMLAttributes<HTMLElement> & {
    sticky?: boolean;
    transparent?: boolean;
};

const NavbarRoot = React.forwardRef<HTMLElement, NavbarProps>(
    ({ className, sticky, transparent, ...props }, ref) => (
        <nav
            ref={ref}
            className={clsx(
                'pix-navbar',
                sticky && 'pix-navbar--sticky',
                transparent && 'pix-navbar--transparent',
                className,
            )}
            {...props}
        />
    ),
);
NavbarRoot.displayName = 'Navbar';

// ── Navbar Brand ─────────────────────────────────────────────────────────────

type NavbarBrandProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

const NavbarBrand = React.forwardRef<HTMLAnchorElement, NavbarBrandProps>(
    ({ className, ...props }, ref) => (
        <a
            ref={ref}
            className={clsx('pix-navbar__brand', className)}
            {...props}
        />
    ),
);
NavbarBrand.displayName = 'NavbarBrand';

// ── Navbar Links ─────────────────────────────────────────────────────────────

type NavbarLinksProps = React.HTMLAttributes<HTMLUListElement>;

const NavbarLinks = React.forwardRef<HTMLUListElement, NavbarLinksProps>(
    ({ className, ...props }, ref) => (
        <ul
            ref={ref}
            className={clsx('pix-navbar__links', className)}
            {...props}
        />
    ),
);
NavbarLinks.displayName = 'NavbarLinks';

// ── Navbar Link ───────────────────────────────────────────────────────────────

type NavbarLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    active?: boolean;
};

const NavbarLink = React.forwardRef<HTMLAnchorElement, NavbarLinkProps>(
    ({ className, active, ...props }, ref) => (
        <li>
            <a
                ref={ref}
                className={clsx(
                    'pix-navbar__link',
                    active && 'pix-navbar__link--active',
                    className,
                )}
                {...props}
            />
        </li>
    ),
);
NavbarLink.displayName = 'NavbarLink';

// ── Navbar Actions ────────────────────────────────────────────────────────────

type NavbarActionsProps = React.HTMLAttributes<HTMLDivElement>;

const NavbarActions = React.forwardRef<HTMLDivElement, NavbarActionsProps>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={clsx('pix-navbar__actions', className)}
            {...props}
        />
    ),
);
NavbarActions.displayName = 'NavbarActions';

// ── Compound Export ───────────────────────────────────────────────────────────

export const Navbar = Object.assign(NavbarRoot, {
    Brand: NavbarBrand,
    Links: NavbarLinks,
    Link: NavbarLink,
    Actions: NavbarActions,
});
