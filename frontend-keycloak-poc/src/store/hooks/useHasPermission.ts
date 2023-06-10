import { useMemo } from 'react'
import { useSelector } from 'react-redux'

import { RolesEnum } from 'src/types'

import { selectCurrentUser } from 'src/store/reducers'

const useHasPermission = (requiredRole: RolesEnum): boolean => {
  const user = useSelector(selectCurrentUser)
  const userRole = useMemo(() => (user?.role ? RolesEnum[user.role as keyof typeof RolesEnum] : RolesEnum.Guest), [user])
  return useMemo(() => userRole >= requiredRole, [requiredRole, userRole])
}

export default useHasPermission
