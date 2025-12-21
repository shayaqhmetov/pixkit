
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
  ,
  {
    title: "Badge",
    url: "#components?component=badge",
    icon: "BadgeIcon",
  },
  {
    title: "Forms",
    url: "#components?component=forms",
    icon: "FormsIcon",
  },
  {
    title: "Dialog",
    url: "#components?component=dialog",
    icon: "DialogIcon",
  },
  {
    title: "Avatar",
    url: "#components?component=avatar",
    icon: "AvatarIcon",
  },
  {
    title: "Separator",
    url: "#components?component=separator",
    icon: "SeparatorIcon",
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