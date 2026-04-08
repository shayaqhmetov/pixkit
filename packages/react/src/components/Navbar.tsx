import * as React from 'react';
import clsx from 'clsx';

// ── Navbar Root ───────────────────────────────────────────────────────────────

type NavbarProps = React.HTMLAttributes<HTMLElement> & {
    sticky?: boolean;
    transparent?: boolean;
    /** Enables hamburger menu on small screens */
    adaptive?: boolean;
};

const NavbarRoot = React.forwardRef<HTMLElement, NavbarProps>(
    ({ className, sticky, transparent, adaptive, children, ...props }, ref) => {
        const [open, setOpen] = React.useState(false);

        // Split children into brand, links, actions for adaptive layout
        if (adaptive) {
            let brand: React.ReactNode = null;
            let links: React.ReactNode = null;
            let actions: React.ReactNode = null;

            React.Children.forEach(children, child => {
                if (!React.isValidElement(child)) return;
                const type = (child as React.ReactElement & { type: { displayName?: string } }).type;
                const name = type?.displayName;
                if (name === 'NavbarBrand') brand = child;
                else if (name === 'NavbarLinks') links = child;
                else if (name === 'NavbarActions') actions = child;
            });

            return (
                <nav
                    ref={ref}
                    className={clsx(
                        'pix-navbar',
                        'pix-navbar--adaptive',
                        sticky && 'pix-navbar--sticky',
                        transparent && 'pix-navbar--transparent',
                        className,
                    )}
                    {...props}
                >
                    {/* Top row: brand + actions + hamburger */}
                    <div className="pix-navbar__row">
                        {brand}
                        <div className="pix-navbar__row-end">
                            <div className="pix-navbar__actions-desktop">{actions}</div>
                            {links && (
                                <button
                                    className={clsx('pix-navbar__burger', open && 'pix-navbar__burger--open')}
                                    onClick={() => setOpen(v => !v)}
                                    aria-label={open ? 'Close menu' : 'Open menu'}
                                    aria-expanded={open}
                                >
                                    <span /><span /><span />
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Desktop links row (hidden on mobile) */}
                    <div className="pix-navbar__links-desktop">{links}</div>

                    {/* Mobile drawer */}
                    {open && (
                        <div className="pix-navbar__drawer">
                            {links}
                            {actions && <div className="pix-navbar__drawer-actions">{actions}</div>}
                        </div>
                    )}
                </nav>
            );
        }

        return (
            <nav
                ref={ref}
                className={clsx(
                    'pix-navbar',
                    sticky && 'pix-navbar--sticky',
                    transparent && 'pix-navbar--transparent',
                    className,
                )}
                {...props}
            >
                {children}
            </nav>
        );
    },
);
NavbarRoot.displayName = 'Navbar';

// ── Navbar Brand ─────────────────────────────────────────────────────────────

type NavbarBrandProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

const NavbarBrand = React.forwardRef<HTMLAnchorElement, NavbarBrandProps>(
    ({ className, ...props }, ref) => (
        <a ref={ref} className={clsx('pix-navbar__brand', className)} {...props} />
    ),
);
NavbarBrand.displayName = 'NavbarBrand';

// ── Navbar Links ─────────────────────────────────────────────────────────────

type NavbarLinksProps = React.HTMLAttributes<HTMLUListElement>;

const NavbarLinks = React.forwardRef<HTMLUListElement, NavbarLinksProps>(
    ({ className, ...props }, ref) => (
        <ul ref={ref} className={clsx('pix-navbar__links', className)} {...props} />
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
        <div ref={ref} className={clsx('pix-navbar__actions', className)} {...props} />
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
