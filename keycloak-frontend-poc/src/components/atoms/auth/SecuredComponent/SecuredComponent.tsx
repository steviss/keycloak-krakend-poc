import { FC } from 'react'

import { RolesEnum } from 'src/types'

import { useHasPermission } from 'src/store'

import { SecuredComponentProps } from './SecuredComponent.interface'

const SecuredComponent: FC<SecuredComponentProps> = ({ requiredRole = RolesEnum.Guest, children }) => {
  const hasRequiredRole = useHasPermission(requiredRole)
  if (!hasRequiredRole) return null
  return <>{children}</>
}

export default SecuredComponent
