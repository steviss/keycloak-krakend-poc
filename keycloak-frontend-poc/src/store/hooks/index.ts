import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import type { AppDispatch, RootState } from 'src/store/configureStore'

export { default as useAuth } from './useAuth'
export type { UseAuthReturnI } from './useAuth'

export { default as useHasPermission } from './useHasPermission'

export { default as useUserRole } from './useUserRole'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
