import type { PropsWithChildren } from 'react';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuContent,
    Panel,
} from '@pixkit/react';

const topNavLinks = [
    { href: '#documentation', label: 'Docs' },
    { href: '#components', label: 'Components' },
];

const sidebarLinks = [
    { href: '#getting-started', label: 'Getting Started' },
    { href: '#theming', label: 'Theming' },
    { href: '#accessibility', label: 'Accessibility' },
    { href: '#roadmap', label: 'Roadmap' },
];

export const Layout = ({ children }: PropsWithChildren) => (
    <div>
        <div>
            <header>
                <div>
                    <NavigationMenu>
                        <NavigationMenuList>
                            {topNavLinks.map((link) => (
                                <NavigationMenuItem key={link.href}>
                                    <NavigationMenuLink href={link.href}>
                                        {link.label}
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>More</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <NavigationMenuItem key="blog">
                                        <NavigationMenuLink href="#blog">
                                            Blog
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </header>
            <div>
                <main>
                    {children}
                </main>
            </div>
            <footer>
                <p>Need another primitive? Track it in the roadmap or open a discussion with the design system squad.</p>
                <p>&copy; {new Date().getFullYear()} PixKit — crafted with accessibility in mind.</p>
            </footer>
        </div>
    </div>
);
