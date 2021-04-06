import React from "react";
import { CommonProps } from "../@types/common";

export interface TopbarProps extends CommonProps {}

const Topbar: React.FC<TopbarProps> = (props: TopbarProps) => {
  const { children } = props;
  return <div>{children}</div>;
};

export default Topbar;
