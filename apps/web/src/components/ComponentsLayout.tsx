import { AppSidebar } from './AppSidebar';
import { SidebarProvider } from '@pixkit/react';
import { Outlet } from 'react-router-dom';

export const ComponentsLayout = () => (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <Outlet />
      </main>
    </SidebarProvider>
);
