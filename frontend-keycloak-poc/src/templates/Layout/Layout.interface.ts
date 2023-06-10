import { ReactNode } from 'react'

export enum LayoutTypesEnum {
  Default = 'default',
  Centered = 'centered',
}

type LayoutType = LayoutTypesEnum[keyof LayoutTypesEnum]

export interface LayoutProps {
  children?: ReactNode
  type?: LayoutType
  title?: string
  loading?: boolean
  error?: boolean
}
