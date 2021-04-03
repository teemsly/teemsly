import React from "react";

export interface CommonProps {
  /** Additional classes */
  className?: string
  /** Primary content of the component */
  children?: React.ReactNode
  /** Additional style */
  style?: React.CSSProperties

  [key: string]: any
}

export declare namespace TypeAttributes {
  type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}