import React from "react";
import { CommonProps } from "../@types/common";
import { useClassNames } from "../utils";
import MainHeader from "./MainHeader";
import HeaderIcon from "./HeaderIcon";
import HeaderExtra from "./HeaderExtra";

export interface HeaderProps extends CommonProps {
  /** Navigation on the header */
  navigation?: React.ReactNode;
  /** Header icon */
  icon?: React.ReactNode;
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
  } = props;

  const { merge, withClassPrefix } = useClassNames(classPrefix);
  const classes = merge(className, withClassPrefix({}));

  let mainHeaderProps = {
    title,
    navigation,
    renderTitle,
  };

  return (
    <Component className={classes}>
      <HeaderIcon>Icon Header</HeaderIcon>
      <MainHeader {...mainHeaderProps} />
      <HeaderExtra>header extra</HeaderExtra>
    </Component>
  );
};

Header.defaultProps = {
  componentClass: "div",
  classPrefix: "page-header",
};

export default Header;
