import React, { SyntheticEvent, useCallback } from "react";
import { Anchor } from "..";
import { CommonProps } from "../@types/common";
import { useClassNames } from "../utils";
import createChainedFunction from "../utils/createChainedFunction";

export interface DropdownItemProps<T = string> extends CommonProps {
  /** Active options */
  active?: boolean;
  /** The specified url path */
  href?: string;
  /** On select item callback */
  onSelect?: (itemKey?: T, event?: SyntheticEvent) => void;
  /** The unique key of the item option */
  itemKey?: T;
}

const DropdownItem = React.forwardRef((props: DropdownItemProps, ref) => {
  const {
    componentClass: Component = Anchor,
    classPrefix = "dropdown-item",
    children,
    className,
    active,
    onClick,
    onSelect,
    itemKey,
    ...rest
  } = props;

  const { merge, withClassPrefix } = useClassNames(classPrefix);
  const classes = merge(className, withClassPrefix({ active: active }));

  const handleClick = useCallback(
    (event: SyntheticEvent) => {
      onSelect?.(itemKey, event);
    },
    [itemKey]
  );

  return (
    <Component
      ref={ref}
      onClick={createChainedFunction(handleClick, onClick)}
      className={classes}
      {...rest}
    >
      {children}
    </Component>
  );
});

DropdownItem.defaultProps = {
  active: false,
};

export default DropdownItem;
