import React, { useMemo } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { useAuth } from 'src/store'

const GuestOnlyRoute: React.FC = () => {
  const { user } = useAuth()
  const location = useLocation()
  const isGuest = useMemo(() => !user, [user])
  return isGuest ? <Outlet /> : <Navigate to="/" state={{ from: location }} />
}

export default GuestOnlyRoute
