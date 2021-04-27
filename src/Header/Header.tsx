import React, { useContext } from "react";
import { CommonProps } from "../@types/common";
import { useClassNames } from "../utils";
import MainHeader from "./MainHeader";
import HeaderIcon from "./HeaderIcon";
import HeaderExtra from "./HeaderExtra";
import { PageContext } from "../Page";
import SidebarExpanderIcon from "./SidebarExpanderIcon";

export interface HeaderProps extends CommonProps {
  /** Navigation on the header */
  navigation?: React.ReactNode;
  /** Header icon */
  icon?: React.ReactNode;
  /** Header icon */
  headerIcon?: React.ReactNode;
  /** The title of header */
  title?: string;
  /** Custom render of the title */
  renderTitle?: (children: React.ReactNode) => React.ReactNode;
  /** Extra component on the header */
  extraElement?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const {
    componentClass: Component = "div",
    classPrefix = "page-header",
    className,
    title,
    renderTitle,
    navigation,
    headerIcon,
    extraElement,
  } = props;

  const { setMinimizedSidebar } = useContext(PageContext);

  const { merge, withClassPrefix, prefix } = useClassNames(classPrefix);
  const classes = merge(className, withClassPrefix({}));

  const handleCollapseSidebar = () => {
    setMinimizedSidebar?.(false);
  };

  let mainHeaderProps = {
    title,
    navigation,
    renderTitle,
  };

  let headerIconElement: React.ReactNode;
  if (headerIcon) {
    headerIconElement = <HeaderIcon>{headerIcon}</HeaderIcon>;
  }

  let headerExtraElement: React.ReactNode;
  if (extraElement) {
    headerExtraElement = <HeaderExtra>{extraElement}</HeaderExtra>;
  }

  return (
    <Component className={classes}>
      <div
        className={prefix("sidebar-expander")}
        onClick={() => handleCollapseSidebar()}
      >
        <SidebarExpanderIcon height="20" width="20" />
      </div>
      {headerIconElement}
      <MainHeader {...mainHeaderProps} />
      {headerExtraElement}
    </Component>
  );
};

Header.defaultProps = {
  componentClass: "div",
  classPrefix: "page-header",
};

export default Header;
