import React, { useContext, useEffect } from "react";
import { CommonProps } from "../@types/common";
import { PageContext } from "../Page";
import { useClassNames } from '../utils'

export interface SidebarProps extends CommonProps {
  /** Use custom element for this component */
  componentClass?: React.ElementType
  /** The main content */
  children?: React.ReactNode
  /** The prefix of component CSS class */
  classPrefix?: string;
  /** The sidebar can be collapsible */
  collapsible?: boolean
  /** The width of the sidebar */
  width?: number
}

const Sidebar = (props: SidebarProps) => {
  const {componentClass: Component = 'aside', children, classPrefix = "sidebar", width = 240,className, collapsible, style, ...rest} = props

  const {withClassPrefix, merge} = useClassNames(classPrefix);

  const classes = merge(className, withClassPrefix({ collapse: collapsible }))

  const {setHasSidebar} = useContext(PageContext)

  // hook to the Page component that the child has a sidebar.
  useEffect(() => {
    setHasSidebar?.(true)
  }, [setHasSidebar])

  const styles = {
    width: `${width}px`,
    ...style
  }

  return <Component style={styles} className={classes} {...rest}>{children}</Component>;
};

Sidebar.defaultProps = {
  width: 240,
  classPrefix: 'sidebar',
  componentClass: 'aside'
}

export default Sidebar;
