import React from "react";
import { CommonProps } from "../@types/common";
import { useClassNames } from "../utils";

export interface SidebarNavProps extends CommonProps {
  /** The prefix of component CSS class */
  classPrefix?: string;
}

const SidebarNav = (props: SidebarNavProps) => {
  const {children, componentClass: Component = 'div', classPrefix = 'sidebar-nav', className, ...rest} = props
  const {merge, withClassPrefix} = useClassNames(classPrefix)

  const classes = merge(className, withClassPrefix({}));

  return <Component className={classes} {...rest}>{children}</Component>;
};

export default SidebarNav;
