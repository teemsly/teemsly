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
  type Color = 'red' | 'green' | 'yellow' | 'orange' | 'blue' | 'violet' | 'cyan'
  type Placement4 = 'top' | 'right' | 'bottom' | 'left'
  type Placement8 = 'bottomStart' | 'bottomEnd' | 'topStart' | 'topEnd' | 'leftStart' | 'rightStart' | 'leftEnd' | 'rightEnd'
  type Placement = Placement4 | Placement8 
}