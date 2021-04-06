import React from "react";
import { CommonProps } from "../@types/common";
import { HeaderProps } from "../Header";
import { TopbarProps } from "../Topbar/Topbar";
import { useClassNames } from "../utils";

export interface TopNavigationProps extends CommonProps {
  header?: React.ReactElement<HeaderProps>;
  topbar?: React.ReactElement<TopbarProps>;
  shadow?: boolean;
}

const TopNavigation: React.FC<TopNavigationProps> = (
  props: TopNavigationProps
) => {
  const {
    componentClass: Component = "header",
    topbar,
    header,
    className,
    shadow = true,
    classPrefix = "top-navigation",
    ...rest
  } = props;

  const { merge, withClassPrefix } = useClassNames(classPrefix);

  const classes = merge(className, withClassPrefix({ shadow: shadow }));

  return (
    <Component className={classes} {...rest}>
      {header}
      {topbar}
    </Component>
  );
};

export default TopNavigation;
