import React from "react";
import { Anchor } from "..";
import { CommonProps } from "../@types/common";
import { createComponent, useClassNames } from "../utils";

export interface NavItemProps extends CommonProps {
  /** Use custom element for this element */
  componentClass?: React.ElementType;
  /** The speficied path url */
  href?: string;
  /** The active option*/
  active?: boolean;
  /** The icon berfore the children */
  iconBefore?: React.ReactNode;
  /** The icon after the children */
  iconAfter?: React.ReactNode;
}

// Create commponent for wrapping the nav options
const NavigationItemWrapper = createComponent({ name: "NavItem", as: "div" });

// Create component for icon before
const IconBefore = createComponent({ name: "NavIconBefore", as: "div" });

// Create component for icon after
const IconAfter = createComponent({ name: "NavIconAfter", as: "div" });

const NavItem: React.FC<NavItemProps> = (props: NavItemProps) => {
  const {
    classComponent: Component = Anchor,
    children,
    className,
    classPrefix = "nav-item-option",
    iconBefore,
    iconAfter,
    active,
    ...rest
  } = props;

  const { merge, withClassPrefix } = useClassNames(classPrefix);
  const classes = merge(className, withClassPrefix({ active: active }));

  const setIconBefore = iconBefore && <IconBefore>{iconBefore}</IconBefore>;

  const setIconAfter = iconAfter && <IconAfter>{iconBefore}</IconAfter>;

  return (
    <NavigationItemWrapper>
      <Component className={classes} {...rest}>
        {setIconBefore}
        {children}
        {setIconAfter}
      </Component>
    </NavigationItemWrapper>
  );
};

NavItem.displayName = "NavItemOption";

export default NavItem;
