
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@pixkit/react"

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: "Home",
  },
  {
    title: "Inbox",
    url: "#",
    icon: "Inbox",
  },
  {
    title: "Calendar",
    url: "#",
    icon: "Calendar",
  },
  {
    title: "Search",
    url: "#",
    icon: "Search",
  },
  {
    title: "Settings",
    url: "#",
    icon: "Settings",
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <a href={item.url}>
                    {item.title}
                  </a>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}