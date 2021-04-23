import React, { HTMLAttributes } from "react";
import { CommonProps } from "../@types/common";
import { useClassNames } from "../utils";

export interface ContainerProps
  extends CommonProps,
    HTMLAttributes<HTMLDivElement> {
  /** Container fit to the parent width */
  fluid?: boolean;
  /** Reset the container padding */
  noPadding?: boolean;
}

const Container: React.FC<ContainerProps> = (props: ContainerProps) => {
  const {
    componentClass: Component = "div",
    classPrefix = "container",
    children,
    className,
    fluid,
    noPadding,
    ...rest
  } = props;

  const { merge, withClassPrefix } = useClassNames(classPrefix);
  const classes = merge(
    className,
    withClassPrefix({ fluid: fluid, "no-padding": noPadding })
  );

  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
};

export default Container;
