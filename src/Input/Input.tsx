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
    size = "md",
    hasError = false,
    ...rest
  } = props;

  const { merge, withClassPrefix } = useClassNames(classPrefix);
  const classes = merge(
    className,
    withClassPrefix(size, { "has-error": hasError })
  );

  return <Component className={classes} {...rest} />;
};

Input.defaultProps = {
  size: "md",
  floating: false,
  hasError: false,
};

export default Input;
