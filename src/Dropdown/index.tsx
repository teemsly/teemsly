import DropdownComponent from "./Dropdown";
import DropdownItem from "./DropdownItem";
import DropdownMenu from "./DropdownMenu";

type DropdownComponentType = typeof DropdownComponent;

interface Dropdown extends DropdownComponentType {
  Menu: typeof DropdownMenu;
  Item: typeof DropdownItem;
}

const Dropdown = DropdownComponent as Dropdown;
Dropdown.Menu = DropdownMenu;
Dropdown.Item = DropdownItem;

export default Dropdown;
export * from "./Dropdown";
