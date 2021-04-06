import React, { SyntheticEvent } from "react";
import { CommonProps } from "../@types/common";

export interface AnchorProps extends CommonProps {
  /** The specified path of the url */
  href?: string;
  /** The custom element for this component */
  componentClass?: React.ElementType;
  /** The main content for component */
  children?: React.ReactNode;
  /** On click action */
  onClick?: (e: SyntheticEvent) => void;
}

const Anchor: React.FC<AnchorProps> = (props: AnchorProps) => {
  const { componentClass: Component = "a", children, ...rest } = props;
  return <Component {...rest}>{children}</Component>;
};

export default Anchor;
