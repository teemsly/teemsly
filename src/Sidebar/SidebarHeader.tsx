import React from "react";
import { CommonProps } from "../@types/common";
import { useClassNames } from "../utils";
import ExpanderIcon from "./SidebarExpanderIcon";

export interface SidebarHeaderProps extends CommonProps {
  /** The main content of the component */
  children?: React.ReactNode;
  /** The prefix of component CSS class */
  classPrefix?: string;
  /** Use custom element for this component */
  componentClass?: React.ElementType;
  /** Show Expander component  on the sidebar */
  expander?: boolean;
}
const SidebarHeader: React.FC<SidebarHeaderProps> = (
  props: SidebarHeaderProps
) => {
  const {
    children,
    componentClass: Component = "div",
    classPrefix = "sidebar-header",
    className,
    expander,
    handleCollapse,
    ...rest
  } = props;

  const { merge, withClassPrefix, prefix } = useClassNames(classPrefix);

  const classes = merge(className, withClassPrefix());

  let expanderElement: React.ReactNode;
  if (expander) {
    expanderElement = (
      <div className={prefix("expander")} onClick={handleCollapse()}>
        <ExpanderIcon />
      </div>
    );
  }

  return (
    <Component className={classes} {...rest}>
      <div className={prefix("logo")}>{children}</div>
      {expanderElement}
    </Component>
  );
};

SidebarHeader.displayName = "SidebarHeader";
SidebarHeader.defaultProps = {
  componentClass: "div",
  classPrefix: "sidebar-header",
};

export default SidebarHeader;
