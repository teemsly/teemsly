import React from "react";
import { CommonProps } from "../@types/common";
import { createComponent, useClassNames } from "../utils";

export interface MainHeaderProps extends CommonProps {
  /** Menu navigation on header */
  navigation?: React.ReactNode;
  /** Title of the header */
  title?: string;
  /** Render custom element for title */
  renderTitle?: (children: React.ReactNode) => React.ReactNode;
}

/**
 * Main Header Title Component
 * This create component for title of the header
 */
const MainHeaderTitle = createComponent({
  name: "MainHeaderTitle",
  as: "h1",
});

/**
 * Main Header Navigation Row Component.
 * This component use for warpping the navigation on the header
 */
const HeaderNavigationRow = createComponent({
  name: "HeaderNavigationRow",
  as: "div",
});

const MainHeader = (props: MainHeaderProps) => {
  const {
    componentClass: Component = "div",
    title,
    children,
    renderTitle,
    classPrefix = "main-header",
    className,
    navigation,
    ...rest
  } = props;

  const { merge, withClassPrefix } = useClassNames(classPrefix);
  const classes = merge(className, withClassPrefix({ navigation: navigation }));

  let navigationComponent: React.ReactNode;
  if (navigation) {
    navigationComponent = (
      <HeaderNavigationRow>{navigation}</HeaderNavigationRow>
    );
  }

  if (renderTitle) {
    return (
      <Component className={classes} {...rest}>
        {renderTitle(children)}
        {navigationComponent}
      </Component>
    );
  }

  return (
    <Component className={classes} {...rest}>
      <MainHeaderTitle>{title}</MainHeaderTitle>
      {navigationComponent}
    </Component>
  );
};

export default MainHeader;
