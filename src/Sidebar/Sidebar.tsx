import React, { useContext, useEffect } from "react";
import { CommonProps } from "../@types/common";
import { PageContext } from "../Page";
import { useClassNames } from "../utils";

export interface SidebarProps extends CommonProps {
  /** Use custom element for this component */
  componentClass?: React.ElementType;
  /** The main content */
  children?: React.ReactNode;
  /** The prefix of component CSS class */
  classPrefix?: string;
  /** The sidebar can be collapsible */
  collapsible?: boolean;
  /** Show expander element of sidebar */
  expander?: boolean;
  /** The width of the sidebar */
  width?: number;
}

const Sidebar = (props: SidebarProps) => {
  const {
    componentClass: Component = "aside",
    children,
    classPrefix = "sidebar",
    width = 240,
    className,
    collapsible,
    expander,
    style,
    ...rest
  } = props;

  const { setHasSidebar, setMinimizedSidebar } = useContext(PageContext);

  const { withClassPrefix, merge } = useClassNames(classPrefix);

  const classes = merge(className, withClassPrefix({ collapse: collapsible }));

  // hook to the Page component that the child has a sidebar.
  useEffect(() => {
    setHasSidebar?.(true);
  }, [setHasSidebar]);

  const handleCollapse = () => {
    setMinimizedSidebar?.(true);
    // setIsCollapsible(!isCollapsible);
  };

  const styles = {
    width: `${width}px`,
    ...style,
  };

  const getElements = () => {
    const elements = React.Children.map(
      children,
      (child: any, index: number) => {
        let displayName = child?.type?.displayName;

        if (displayName === "SidebarHeader") {
          return React.cloneElement(child, {
            key: index,
            expander: expander,
            handleCollapse: () => handleCollapse,
            ...child?.props,
          });
        }
        return React.cloneElement(child, { key: index, ...child?.props });
      }
    );

    return { elements };
  };

  const { elements } = getElements();
  return (
    <Component style={styles} className={classes} {...rest}>
      {elements}
    </Component>
  );
};

Sidebar.defaultProps = {
  width: 240,
  classPrefix: "sidebar",
  componentClass: "aside",
};

export default Sidebar;
