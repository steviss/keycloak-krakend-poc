import { UserType } from 'src/types'

import { RootState } from 'src/store/configureStore'

import { authSlice } from './auth.reducer'

export const selectCurrentUser = (state: RootState): UserType | null => state.auth.user

export const selectDefaultAddress = (state: RootState): string | undefined | null => state.auth.user?.primaryAddress

export const { setCredentials, removeCredentials } = authSlice.actions
