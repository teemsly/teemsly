import React, {
  CSSProperties,
  SyntheticEvent,
  useCallback,
  useRef,
  useState,
} from "react";
import _ from "lodash";
import { CommonProps, TypeAttributes } from "../@types/common";
import { overlayClose, useClassNames } from "../utils";
import DropdownMenu from "./DropdownMenu";
import DropdownToggle from "./DropdownToggle";
import createChainedFunction from "../utils/createChainedFunction";

export interface DropdownProps<T = string> extends CommonProps {
  /** Palcement of the dropdown menu */
  placement?: TypeAttributes.Placement8;
  /** Dropdown open */
  open?: boolean;
  /** Toggle component */
  toggle?: React.ReactNode;
  /** Use for custom toggle component */
  renderToggle?: (children: React.ReactNode) => React.ReactNode;
  /** Callback function when menu is show  */
  onOpen?: () => void;
  /** Callback function on menu is closed */
  onClose?: () => void;
  /** Callback function for menu state switching */
  onToggle?: (open?: boolean) => void;
  /** Selected item callback */
  onSelect?: (itemKey: T, event: React.MouseEvent<HTMLElement>) => void;
  /** The selected item key */
  activeKey?: T;
  /** Use for style the dropdown menu */
  menuStyle?: CSSProperties;
}

const Dropdown: React.FC<DropdownProps> = (props: DropdownProps) => {
  const {
    componentClass: Component = "div",
    classPrefix = "dropdown",
    children,
    className,
    placement,
    toggle,
    renderToggle,
    onToggle,
    onClose,
    onOpen,
    onClick,
    open: openProp,
    onSelect,
    activeKey,
    menuStyle,
  } = props;

  const { merge, withClassPrefix } = useClassNames(classPrefix);
  const classes = merge(className, withClassPrefix());

  const [open, setOpen] = useState<boolean>(openProp || false);

  const rootRef = React.createRef();

  const triggerTarget = useRef();

  const overlayTarget = useRef();

  const getOpen = () => {
    if (_.isUndefined(openProp)) {
      return open;
    }
    return openProp;
  };

  const handleToggle = useCallback(
    (isOpen?: boolean) => {
      const nextOpen = _.isUndefined(isOpen) ? !getOpen() : isOpen;
      const fn = nextOpen ? onOpen : onClose;

      fn?.();
      setOpen(nextOpen);
      onToggle?.(nextOpen);
    },
    [open, setOpen, onOpen, onClose]
  );

  const handleClick = useCallback(
    (event: SyntheticEvent) => {
      event.preventDefault();
      handleToggle();
    },
    [handleToggle]
  );

  const handleSelect = useCallback(
    (itemKey: string, event: React.MouseEvent<HTMLElement>) => {
      onSelect?.(itemKey, event);
      handleToggle(false);
    },
    []
  );

  overlayClose(() => handleToggle(), {
    triggerTarget,
    overlayTarget,
    disabled: !open,
  });

  let dropdownToggleProps = {
    onClick: createChainedFunction(handleClick, onClick),
  };

  const dropdownToggleElement = (
    <DropdownToggle
      ref={triggerTarget}
      renderToggle={renderToggle}
      {...dropdownToggleProps}
    >
      {toggle}
    </DropdownToggle>
  );

  let dropdownMenuProps = {
    open,
    placement,
  };

  let dropdownMenuElement = (
    <DropdownMenu
      ref={overlayTarget}
      style={menuStyle}
      activeKey={activeKey}
      onSelect={handleSelect}
      {...dropdownMenuProps}
    >
      {children}
    </DropdownMenu>
  );

  return (
    <Component ref={rootRef} className={classes}>
      {dropdownToggleElement}
      {dropdownMenuElement}
    </Component>
  );
};

Dropdown.defaultProps = {
  placement: "bottomStart",
};

export default Dropdown;
