import React from "react";
import { CommonProps, TypeAttributes } from "../@types/common";
import { useClassNames } from "../utils";

export interface InputGroupProps extends CommonProps {
  /** Input group size */
  size?: TypeAttributes.Size;
}

const InputGroup = (props: InputGroupProps) => {
  const {
    componentClass: Component = "div",
    className,
    classPrefix = "input-group",
    children,
    size,
    ...rest
  } = props;

  const { merge, withClassPrefix } = useClassNames(classPrefix);
  const classes = merge(className, withClassPrefix(size));

  const getChildren = () => {
    const elements = React.Children.map(children, (child: any, _: number) => {
      let displayName = child?.type?.displayName;

      if (displayName === "Input") {
        return React.cloneElement(child, {
          key: _,
          ...child?.props,
        });
      }

      return child;
    });

    return { elements };
  };

  const { elements } = getChildren();

  return (
    <Component className={classes} {...rest}>
      {elements}
    </Component>
  );
};

export default InputGroup;
