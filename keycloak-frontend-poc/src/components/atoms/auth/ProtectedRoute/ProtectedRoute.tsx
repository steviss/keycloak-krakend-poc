import { FC } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { RolesEnum } from 'src/types'

import { useHasPermission } from 'src/store'

import { ProtectedRouteProps } from './ProtectedRoute.interface'

const ProtectedRoute: FC<ProtectedRouteProps> = ({ requiredRole = RolesEnum.Guest }) => {
  const location = useLocation()
  const hasRequiredRole = useHasPermission(requiredRole)
  return hasRequiredRole ? <Outlet /> : <Navigate to="/login" state={{ from: location }} />
}

export default ProtectedRoute
