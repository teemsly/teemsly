import { kebabCase } from "lodash";
import React from "react";
import { CommonProps, TypeAttributes } from "../@types/common";
import { createComponent, useClassNames } from "../utils";

export interface TooltipProps extends CommonProps {
  /** The tooltip content */
  content?: React.ReactNode;
  /** Tooltip placement */
  placement?: TypeAttributes.Placement8 | TypeAttributes.Placement4;
}

const TooltipContent = createComponent({
  name: "TooltipContent",
  as: "div",
});

const Tooltip: React.FC<TooltipProps> = (props: TooltipProps) => {
  const {
    componentClass: Component = "div",
    classPrefix = "tooltip",
    className,
    children,
    content,
    placement,
    ...rest
  } = props;

  const { merge, withClassPrefix } = useClassNames(classPrefix);
  const classes = merge(className, withClassPrefix(kebabCase(placement)));

  return (
    <Component className={classes} {...rest}>
      {children}
      <TooltipContent>{content}</TooltipContent>
    </Component>
  );
};

export default Tooltip;
