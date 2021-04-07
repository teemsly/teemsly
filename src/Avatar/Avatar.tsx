import React from "react";
import { CommonProps, TypeAttributes } from "../@types/common";
import { useClassNames } from "../utils";

export interface AvatarProps extends CommonProps {
  /** The specified path to the image or photo */
  src?: string;
  /** The circle shape of the avatar */
  circle?: boolean;
  /** Size of the avatar */
  size?: TypeAttributes.Size;
  /** Backgorund color of the avatar*/
  color?: TypeAttributes.Color;
}

const Avatar: React.FC<AvatarProps> = (props: AvatarProps) => {
  const {
    componentClass: Component = "div",
    classPrefix = "avatar",
    className,
    children,
    src,
    circle = false,
    size = "md",
    style,
    color,
    ...rest
  } = props;

  const { merge, withClassPrefix } = useClassNames(classPrefix);
  const classes = merge(
    className,
    withClassPrefix(size, color, { circle: circle, photo: src })
  );

  const avatarPhotoStyles = {
    ...style,
    backgroundImage: `url(${src})`,
  };

  if (src) {
    return (
      <Component className={classes} style={avatarPhotoStyles} {...rest} />
    );
  }

  return (
    <Component className={classes} style={style} {...rest}>
      {children}
    </Component>
  );
};

Avatar.defaultProps = {
  size: "md",
  circle: false,
};

export default Avatar;
