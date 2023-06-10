import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { RolesEnum } from 'src/types'

import { useHasPermission } from 'src/store'

import { ProtectedRoutePropsI } from './ProtectedRoute.interface'

const ProtectedRoute: React.FC<ProtectedRoutePropsI> = ({ requiredRole = RolesEnum.Guest }) => {
  const location = useLocation()
  const hasRequiredRole = useHasPermission(requiredRole)
  return hasRequiredRole ? <Outlet /> : <Navigate to="/login" state={{ from: location }} />
}

export default ProtectedRoute
