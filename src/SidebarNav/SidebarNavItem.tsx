import React from "react";
import { CommonProps } from "../@types/common";
import Anchor from "../Anchor";
import { useClassNames } from "../utils";

export interface SidebarNavItemProps extends CommonProps {
  /** The main content */
  children?: React.ReactNode
  /** Use custom element for this component */
  componentClass?: React.ElementType
  /** The prefix of component CSS class */
  classPrefix?: string
  /** The specified url */
  href?: string
  /** The active component */
  active?: boolean;
  /** On Select of the options */
  onSelect?: () => void
  /** The nav icon before the main content*/
  iconBefore?: React.ReactNode
  /** The nav icon after the main content */
  iconAfter?: React.ReactNode
}

const SidebarNavItem = (props: SidebarNavItemProps) => {
  const {componentClass: Component = Anchor, classPrefix = 'sidebar-nav-item', children, className, active, iconBefore, iconAfter, ...rest} = props

  const {merge, withClassPrefix} = useClassNames(classPrefix)
  const classes = merge(className, withClassPrefix({active: active}))

  const iconBeforeChld = iconBefore && <div className="icon icon-before">{iconBefore}</div>

  const iconAfterChld = iconAfter && <div className="icon icon-after">{iconAfter}</div>

  return <Component className={classes} {...rest}>
    {iconBeforeChld}
    {children}
    {iconAfterChld}
  </Component>;
};

export default SidebarNavItem;
