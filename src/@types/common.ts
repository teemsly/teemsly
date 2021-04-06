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

export interface WithComponentAs<As extends React.ElementType | string = React.ElementType> extends CommonProps {
  as: As
}

export declare namespace TypeAttributes {
  type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}