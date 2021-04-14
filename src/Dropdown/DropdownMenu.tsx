import { kebabCase } from "lodash";
import React from "react";
import { CommonProps, TypeAttributes } from "../@types/common";
import { useClassNames } from "../utils";
import createChainedFunction from "../utils/createChainedFunction";

export interface DropdownMenuProps<T = string> extends CommonProps {
  /** Reset dropdown menu style from existing style */
  reset?: boolean;
  /** Dropdown open */
  open?: boolean;
  /** Dropdown menu placement */
  placement?: TypeAttributes.Placement8;
  /** The selected item option's key*/
  activeKey?: T;
}

const DropdownMenu = React.forwardRef((props: DropdownMenuProps, ref) => {
  const {
    componentClass: Component = "div",
    classPrefix = "dropdown-menu",
    className,
    children,
    reset,
    placement,
    open,
    onSelect,
    activeKey,
    ...rest
  } = props;

  const { merge, withClassPrefix } = useClassNames(classPrefix);
  const classes = merge(
    className,
    withClassPrefix(kebabCase(placement), { rest: reset, open: open })
  );

  const getChildElement = () => {
    const elements = React.Children.map(children, (child: any, index: any) => {
      if (!child) {
        return null;
      }

      // render the child when the child as the dropdown item.
      const { onSelect: onItemSelected } = props;
      return React.cloneElement(child, {
        key: index,
        onSelect: createChainedFunction(onSelect, onItemSelected),
      });
    });

    return { elements };
  };

  const { elements } = getChildElement();

  return (
    <Component ref={ref} className={classes} {...rest}>
      {elements}
    </Component>
  );
});

DropdownMenu.defaultProps = {
  reset: false,
};

export default DropdownMenu;
