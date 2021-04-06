import React from "react";
import { CommonProps } from "../@types/common";
import { useClassNames } from "../utils";

export interface SidebarHeaderProps extends CommonProps {
  /** The main content of the component */
  children?: React.ReactNode;
  /** The prefix of component CSS class */
  classPrefix?: string;
  /** Use custom element for this component */
  componentClass?: React.ElementType;
}
const SidebarHeader = (props: SidebarHeaderProps) => {
  const { children, componentClass: Component = 'div', classPrefix = "sidebar-header", className, ...rest } = props;

  const {merge, withClassPrefix} = useClassNames(classPrefix)

  const classes = merge(className, withClassPrefix())

  return <Component className={classes} {...rest}>{children}</Component>;
};

SidebarHeader.defualtProps = {
  componentClass: 'div',
  classPrefix: 'sidebar-header'
}

export default SidebarHeader;
