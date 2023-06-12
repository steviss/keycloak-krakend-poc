import { PropsWithChildren } from 'react'

import { RolesEnum } from 'src/types'

export type SecuredComponentProps = PropsWithChildren<{
  requiredRole?: RolesEnum
}>
