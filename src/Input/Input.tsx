import React, { HTMLAttributes } from "react";
import { CommonProps, TypeAttributes } from "../@types/common";
import { useClassNames } from "../utils";

export interface InputProps
  extends CommonProps,
    HTMLAttributes<HTMLInputElement> {
  /** Input size */
  size?: TypeAttributes.Size;
  /** Validation style of input element*/
  hasError?: boolean;
}

const Input: React.FC<InputProps> = (props: InputProps) => {
  const {
    componentClass: Component = "input",
    classPrefix = "input",
    className,
    hasError = false,
    size,
    ...rest
  } = props;

  const ref = React.useRef();

  const { merge, withClassPrefix } = useClassNames(classPrefix);
  const classes = merge(
    className,
    withClassPrefix(size, { "has-error": hasError })
  );

  return <Component ref={ref} className={classes} {...rest} />;
};

export default Input;
