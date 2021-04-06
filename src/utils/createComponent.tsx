import { kebabCase } from "lodash";
import * as React from "react";
import { useClassNames } from ".";
import { CommonProps, WithComponentAs } from "../@types/common";

interface Props extends CommonProps {
  name?: string;
  as: React.ElementType;
  classPrefix?: string;
}

type ComponentProps = WithComponentAs & React.HTMLAttributes<HTMLDivElement>;

const createComponent = (defaultProps: Props) => {
  const { as, name, classPrefix, ...componentRestProps } = defaultProps;

  const Component = React.forwardRef((props: ComponentProps, ref) => {
    const { as: Component, children, className, classPrefix, ...rest } = props;
    const { merge, withClassPrefix } = useClassNames(classPrefix);
    const classes = merge(className, withClassPrefix());

    return (
      <Component ref={ref} className={classes} {...rest}>
        {children}
      </Component>
    );
  });

  Component.displayName = name;
  Component.defaultProps = {
    ...componentRestProps,
    as: as || "div",
    classPrefix: classPrefix || kebabCase(name),
  };
  return Component;
};

export default createComponent;
