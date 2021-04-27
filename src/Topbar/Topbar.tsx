import React from "react";
import { CommonProps } from "../@types/common";
import { useClassNames } from "../utils";

export interface TopbarProps extends CommonProps {}

const Topbar: React.FC<TopbarProps> = (props: TopbarProps) => {
  const { classPrefix = "page-topbar", className, children, ...rest } = props;

  const { merge, withClassPrefix } = useClassNames(classPrefix);
  const classes = merge(className, withClassPrefix());

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default Topbar;
