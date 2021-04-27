import React, { useState } from "react";
import { CommonProps } from "../@types/common";
import { useClassNames } from "../utils";
import PageMain from "./PageMain";
import PageMainLayer from "./PageMainLayer";

export const PageContext = React.createContext<PageContextValue>({});

interface PageContextValue {
  setHasSidebar?: (value: boolean) => void;
  setMinimizedSidebar?: (value: boolean) => void;
}

export interface PageProps
  extends CommonProps,
    React.HtmlHTMLAttributes<HTMLDivElement> {
  /** The prefix of component CSS class */
  classPrefix?: string;
  /** Use a custom element for this component */
  componentClass?: React.ElementType;
}

const Page: React.FC<PageProps> = (props: PageProps) => {
  const {
    componentClass: Component = "div",
    children,
    className,
    classPrefix = "page",
    ...rest
  } = props;

  const [hasSidebar, setHasSidebar] = useState<boolean>(false);
  const [minimizedSidebar, setMinimizedSidebar] = useState<boolean>(false);

  const { withClassPrefix, merge } = useClassNames(classPrefix);

  const classnames = merge(
    className,
    withClassPrefix({
      "has-sidebar": hasSidebar,
      "sidebar-minimized": minimizedSidebar,
    })
  );

  return (
    <PageContext.Provider value={{ setHasSidebar, setMinimizedSidebar }}>
      <Component className={classnames} {...rest}>
        <PageMain>
          <PageMainLayer>{children}</PageMainLayer>
        </PageMain>
      </Component>
    </PageContext.Provider>
  );
};

export default Page;
