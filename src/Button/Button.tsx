import React from "react";
import { CommonProps, TypeAttributes } from "../@types/common";
import Anchor from "../Anchor/Anchor";
import { useClassNames } from "../utils";

export interface ButtonProps extends CommonProps {
  /** The active button */
  active?: boolean;
  /** The primary content of the component */
  children: React.ReactNode;
  /** Size of the button */
  size?: TypeAttributes.Size;
  /** Button show loading indicator */
  loading?: boolean;
  /** The prefix of the component CSS class name */
  classPrefix?: string;
  /** Button appearence */
  appearance?: "default" | "link" | "subtle" | "primary" | "outline";
  /** Button colors */
  color?: "red" | "green" | "yellow" | "orange" | "blue" | "violet" | "cyan";
  /** You can use custom element to this component */
  componentClass?: React.ElementType;
  /** Button unable to intracted with */
  disabled?: boolean;
  /** You can pass href then will render as 'a' element */
  href?: string;
  /** Click action */
  onClick?: (event: React.MouseEvent) => void;
  /** HTML button attribute */
  type?: "submit" | "reset" | "button";
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const {
    active,
    appearance = "default",
    componentClass: Component = "button",
    children,
    classPrefix = "btn",
    color,
    className,
    disabled,
    href,
    loading,
    block,
    size,
    type,
    ...rest
  } = props;

  const { withClassPrefix, prefix, merge } = useClassNames(classPrefix);
  const classes = merge(
    className,
    withClassPrefix(appearance, color, size, {
      active,
      disabled,
      loading,
      block,
    })
  );

  const spin = <span className={prefix`spiner`} />;

  if (href) {
    return (
      <Anchor href={href} {...rest}>
        {children}
      </Anchor>
    );
  }

  return (
    <Component className={classes} type={type} {...rest}>
      {loading && spin}
      {children}
    </Component>
  );
};

Button.defaultProps = {
  active: false,
  size: "md",
  loading: false,
  classPrefix: "btn",
  appearance: "default",
  componentClass: "button",
  disabled: false,
  type: "button",
};

export default Button;
