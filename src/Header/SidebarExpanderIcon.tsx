import React from "react";

const SidebarExpanderIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="32"
      height="32"
      {...props}
    >
      <g
        fill="none"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 8 L28 8 M4 16 L28 16 M4 24 L28 24" />
      </g>
    </svg>
  );
};

export default SidebarExpanderIcon;
