import { Outlet } from 'react-router-dom';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuContent,
} from '@pixkit/react';

const topNavLinks = [
    { href: '#documentation', label: 'Docs' },
    { href: '#components', label: 'Components' },
];

export const Layout = () => (
    <div>
        <div>
            <header>
                <div>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuLink href="/">PixKit</NavigationMenuLink>
                            </NavigationMenuItem>
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
                                    <NavigationMenuList>
                                        <NavigationMenuItem key="blog">
                                            <NavigationMenuLink href="#blog">
                                                Blog
                                            </NavigationMenuLink>
                                        </NavigationMenuItem>
                                    </NavigationMenuList>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </header>
            <div>
                <main>
                    <Outlet />
                </main>
            </div>
            <footer>
                <p>Need another primitive? Track it in the roadmap or open a discussion with the design system squad.</p>
                <p>&copy; {new Date().getFullYear()} PixKit — crafted with accessibility in mind.</p>
            </footer>
        </div>
    </div>
);
