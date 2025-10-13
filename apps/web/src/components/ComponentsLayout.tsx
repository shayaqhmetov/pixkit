import "../styles/components.css";
import { Routes, Route, useLocation } from 'react-router-dom';
import { SidebarProvider } from '@pixkit/react';

import { AppSidebar } from './AppSidebar';
import { Accordion, Alert, Tabs } from "./components";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const componentsMap: Record<string, React.ComponentType> = {
  accordion: Accordion,
  alert: Alert,
  tabs: Tabs,
};

export const ComponentsLayout = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const componentName = query.get('component');
  console.log('Component to render:', componentName);

  const ComponentToRender = componentName ? componentsMap[componentName.toLowerCase()] : undefined;

  return (
    <SidebarProvider open={true}>
      <AppSidebar />
      <main className='components-layout'>
        {ComponentToRender ? <ComponentToRender /> : null}
      </main>
    </SidebarProvider>
  );
};
