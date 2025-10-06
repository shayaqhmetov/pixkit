import { AppSidebar } from './AppSidebar';
import { SidebarProvider, SidebarTrigger } from '@pixkit/react';
import { Outlet } from 'react-router-dom';

export const ComponentsLayout = () => (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger/>
        <Outlet />
      </main>
    </SidebarProvider>
);
