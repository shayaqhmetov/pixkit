
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
} from "@pixkit/react"

// Menu items.
const items = [
  {
    title: "Accordion",
    url: "#components?component=accordion",
    icon: "AccordionIcon",
  },
  {
    title: "Alert",
    url: "#components?component=alert",
    icon: "AlertIcon",
  },
  {
    title: "Tabs",
    url: "#components?component=tabs",
    icon: "TabsIcon",
  },
  {
    title: "Card",
    url: "#components?component=card",
    icon: "CardIcon",
  }
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Components</SidebarGroupLabel>
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