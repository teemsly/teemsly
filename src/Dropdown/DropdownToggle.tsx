import React, { SyntheticEvent } from "react";
import { CommonProps } from "../@types/common";
import { useClassNames } from "../utils";

export interface DropdownToggleProps extends CommonProps {
  /** Render custom toggle component */
  renderToggle?: (children: React.ReactNode) => React.ReactNode;
  /** On click event */
  onClick?: (event: SyntheticEvent) => void;
}

const DropdownToggle = React.forwardRef((props: DropdownToggleProps, ref) => {
  const {
    componentClass: Component = "div",
    classPrefix = "dropdown-toggle",
    className,
    renderToggle,
    children,
    ...rest
  } = props;
  const { merge, withClassPrefix } = useClassNames(classPrefix);
  const classes = merge(className, withClassPrefix());

  if (renderToggle) {
    return (
      <Component ref={ref} className={classes} {...rest}>
        {renderToggle(children)}
      </Component>
    );
  }

  return (
    <Component ref={ref} className={classes} {...rest}>
      {children}
    </Component>
  );
});

export default DropdownToggle;
