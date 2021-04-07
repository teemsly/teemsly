import React from "react";
import { CommonProps } from "../@types/common";
import { useClassNames } from "../utils";

export interface NavProps extends CommonProps {
  /** You can use custom element for this component */
  componentClass?: React.ElementType;
  /** Navigation appearance */
  appearance?: "default" | "tabs" | "subtle";
  /** Justified navigation */
  justified?: boolean;
  /** Direction appearance of navigation it can be vertical or horizontal, default to horizontal*/
  direction?: "horizontal" | "vertical";
}

const Nav = (props: NavProps) => {
  const {
    componentClass: Component = "div",
    classPrefix = "nav",
    children,
    className,
    appearance = "default",
    justified = false,
    direction = "horizontal",
    ...rest
  } = props;

  const { merge, withClassPrefix } = useClassNames(classPrefix);
  const classes = merge(
    className,
    withClassPrefix(appearance, direction, { justified: justified })
  );

  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
};

Nav.defaultProps = {
  componentClass: "div",
  classPrefix: "nav",
  appearance: "default",
  direction: "horizontal",
};

export default Nav;
