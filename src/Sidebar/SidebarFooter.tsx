import classNames from "classnames";
import React from "react";
import { CommonProps } from "../@types/common";
import { useClassNames } from "../utils";

export interface SidebarFooterProps extends CommonProps {
  /** The prefix of component CSS class */
  classPrefix?: string;
  /** The main content */
  children?: React.ReactNode;
  /** Use custom element for this component */
  componentClass?: React.ElementType;
}

const SidebarFooter = (props: SidebarFooterProps) => {
  const {
    componentClass: Component = "div",
    children,
    classPrefix = "sidebar-footer",
    ...rest
  } = props;
  const { merge, withClassPrefix } = useClassNames(classPrefix);
  const classes = merge(classNames, withClassPrefix());

  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
};

SidebarFooter.defaultProps = {
  classPrefix: 'sidebar-footer',
  componentClass: 'div'
}

export default SidebarFooter;
