import React from "react";
import { CommonProps, TypeAttributes } from "../@types/common";
import { useClassNames } from "../utils";
import FormLabel from "./FormLabel";
import { createComponent } from "../utils";

export const FormGroupField = createComponent({
  name: "FormGroupField",
  as: "div",
});

export const ErrorField = createComponent({
  name: "ErrorField",
  as: "div",
});

export interface FormGroupProps extends CommonProps {
  size?: TypeAttributes.Size;
  label?: React.ReactNode;
  labelClassName?: string;
  labelStyle?: React.CSSProperties;
  id?: string;
  inline?: boolean;
  hasError?: boolean;
  errorMessage?: string;
}

const FormGroup: React.FC<FormGroupProps> = (props: FormGroupProps) => {
  const {
    classPrefix = "form-group",
    children,
    className,
    size,
    label,
    id,
    labelClassName,
    labelStyle,
    inline,
    hasError,
    errorMessage,
    ...rest
  } = props;

  const { merge, withClassPrefix } = useClassNames(classPrefix);
  const classes = merge(
    className,
    withClassPrefix(size, { inline: inline, "has-error": hasError })
  );

  const getElements = () => {
    const elements = React.Children.map(
      children,
      (child: any, index: number) => {
        return React.cloneElement(child, {
          hasError: hasError ? hasError : false,
          key: index,
          id: id,
          ...child?.props,
        });
      }
    );

    return { elements };
  };

  const { elements } = getElements();

  const labelProps = {
    className: labelClassName,
    style: labelStyle,
    htmlFor: id,
  };

  let labelElement: React.ReactNode;
  if (label) {
    labelElement = <FormLabel {...labelProps}>{label}</FormLabel>;
  }

  return (
    <div className={classes} {...rest}>
      {labelElement}
      <FormGroupField>
        {elements}
        <ErrorField>{errorMessage}</ErrorField>
      </FormGroupField>
    </div>
  );
};

export default FormGroup;
