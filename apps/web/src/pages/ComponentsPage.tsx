import { SidebarProvider, Sidebar, SidebarHeader, SidebarContent, SidebarGroup, SidebarFooter } from "@pixkit/react";
export default function ComponentsPage() {
  return (
    <SidebarProvider>
      <div>
        <h1>Components</h1>
        <p>List of components goes here.</p>
        <Sidebar>
          <SidebarHeader>Header</SidebarHeader>
          <SidebarContent>Content</SidebarContent>
          <SidebarGroup>Group</SidebarGroup>
          <SidebarFooter>Footer</SidebarFooter>
        </Sidebar>
      </div>
    </SidebarProvider>
  );
}