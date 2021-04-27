import DropdownComponent from "./Dropdown";
import DropdwonDivider from "./DropdownDivider";
import DropdownItem from "./DropdownItem";
import DropdownMenu from "./DropdownMenu";

type DropdownComponentType = typeof DropdownComponent;

interface Dropdown extends DropdownComponentType {
  Menu: typeof DropdownMenu;
  Item: typeof DropdownItem;
  Divider: typeof DropdwonDivider;
}

const Dropdown = DropdownComponent as Dropdown;
Dropdown.Menu = DropdownMenu;
Dropdown.Item = DropdownItem;
Dropdown.Divider = DropdwonDivider;

export default Dropdown;
export * from "./Dropdown";
