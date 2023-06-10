import { useMemo } from 'react'
import { useSelector } from 'react-redux'

import { UserType } from 'src/types'

import { selectCurrentUser } from 'src/store/reducers'

export interface UseAuthReturnI {
  user: UserType | null
}

const useAuth = (): UseAuthReturnI => {
  const user = useSelector(selectCurrentUser)

  return useMemo(() => ({ user }), [user])
}

export default useAuth
