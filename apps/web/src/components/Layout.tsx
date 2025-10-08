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
                                        <NavigationMenuItem key="github page">
                                            <NavigationMenuLink href="https://github.com/shayaqhmetov/pixkit">
                                                GitHub
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
            <footer style={{ textAlign: 'center', padding: '2rem 0' }}>
                <p>Need another primitive? Track it in the roadmap or open a discussion with the design system squad.</p>
                <p>&copy; {new Date().getFullYear()} PixKit — crafted with accessibility in mind.</p>
            </footer>
        </div>
    </div>
);
