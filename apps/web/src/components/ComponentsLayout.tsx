import "../styles/components.css";
import { useLocation } from 'react-router-dom';
import { SidebarProvider } from '@pixkit/react';

import { AppSidebar } from './AppSidebar';
import { AccordionComponent, Alert, Tabs, CardComponent, BadgeComponent, FormsComponent, DialogComponent, AvatarComponent, SeparatorComponent, NavbarComponent } from "./components";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const componentsMap: Record<string, React.ComponentType> = {
  accordion: AccordionComponent,
  alert: Alert,
  tabs: Tabs,
  card: CardComponent,
  badge: BadgeComponent,
  forms: FormsComponent,
  dialog: DialogComponent,
  avatar: AvatarComponent,
  separator: SeparatorComponent,
  navbar: NavbarComponent,
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
