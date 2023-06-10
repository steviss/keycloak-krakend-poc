import { useMemo } from 'react'
import { useSelector } from 'react-redux'

import { RolesEnum } from 'src/types'

import { selectCurrentUser } from 'src/store/reducers'

export interface UseAuthReturnI {
  role: RolesEnum
}

const useUserRole = (): RolesEnum => {
  const user = useSelector(selectCurrentUser)

  return useMemo(() => (user?.role ? RolesEnum[user.role as keyof typeof RolesEnum] : RolesEnum.Guest), [user])
}

export default useUserRole
