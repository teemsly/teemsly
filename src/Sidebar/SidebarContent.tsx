import React from "react";
import { CommonProps } from "../@types/common";
import { useClassNames } from "../utils";

export interface SidebarContentProps extends CommonProps {
  /** Use custom element for this component */
  componentClass?: React.ElementType
  /** The main content */
  children?: React.ReactNode
  /** The prefix of component CSS class */
  classPrefix?: string
}

const SidebarContent = (props: SidebarContentProps) => {
  const {componentClass: Component = 'div', classPrefix = 'sidebar-scrollable', className, children, ...rest } = props
  const {merge, withClassPrefix} = useClassNames(classPrefix)
  const classes = merge(className, withClassPrefix({}))
  
  return <Component className={classes} {...rest}>
    <div className="ts-sidebar-scrollable-content">{children}</div>
  </Component>;
};

export default SidebarContent;
