import "../styles/components.css";

import { AppSidebar } from './AppSidebar';
import { SidebarProvider, SidebarTrigger } from '@pixkit/react';
import { Outlet } from 'react-router-dom';

export const ComponentsLayout = () => (
    <SidebarProvider open={true}>
      <AppSidebar />
      <main className='components-layout'>
        <Outlet/>
      </main>
    </SidebarProvider>
);