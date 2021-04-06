import SidebarNavComponent from "./SidebarNav";
import SidebarNavItem from "./SidebarNavItem";

type SidebarNavType = typeof SidebarNavComponent;

interface SidebarNav extends SidebarNavType {
  Item: typeof SidebarNavItem;
}

const SidebarNav = SidebarNavComponent as SidebarNav;
SidebarNav.Item = SidebarNavItem;

export default SidebarNav;
export * from "./SidebarNav";
