import NavWrapper from "./Nav";
import NavItem from "./NavItem";

type NavType = typeof NavWrapper;

interface Nav extends NavType {
  Item: typeof NavItem;
}

const Nav = NavWrapper as Nav;
Nav.Item = NavItem;

export default Nav;
export * from "./Nav";
