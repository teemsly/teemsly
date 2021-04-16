import React from "react";
import { CommonProps, TypeAttributes } from "../@types/common";
import { useClassNames } from "../utils";

export interface CardProps extends CommonProps {
  /** Border radius of the card */
  border?: boolean;
  /** Box shadow of the card */
  shadow?: boolean;
  /** Padding size on card */
  size?: TypeAttributes.Size;
}

const Card: React.FC<CardProps> = (props: CardProps) => {
  const {
    componentClass: Component = "div",
    children,
    classPrefix = "card",
    className,
    border = true,
    shadow = true,
    size = "md",
    ...rest
  } = props;

  const { merge, withClassPrefix } = useClassNames(classPrefix);
  const classes = merge(
    className,
    withClassPrefix(size, { border: border, shadow: shadow })
  );

  return (
    <Component {...rest} className={classes}>
      {children}
    </Component>
  );
};

Card.defaultProps = {
  border: true,
  shadow: true,
  size: "md",
};

export default Card;
