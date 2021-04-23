import React, { HTMLAttributes } from "react";
import { CommonProps } from "../@types/common";
import { useClassNames } from "../utils";

export interface FormProps
  extends CommonProps,
    HTMLAttributes<HTMLFormElement> {
  /** Set form with to the parent node of form */
  fluid?: boolean;
  /** Form layout */
  layout?: "horizontal" | "vertical";
}

const Form: React.FC<FormProps> = (props: FormProps) => {
  const {
    classPrefix = "form",
    children,
    className,
    fluid,
    layout,
    ...rest
  } = props;

  const { merge, withClassPrefix } = useClassNames(classPrefix);
  const classes = merge(className, withClassPrefix(layout, { fluid: fluid }));

  return (
    <form className={classes} {...rest}>
      {children}
    </form>
  );
};

export default Form;
