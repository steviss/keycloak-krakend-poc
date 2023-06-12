import Keycloak from 'keycloak-js'

import { UserType } from 'src/types'

import { RootState } from 'src/store/configureStore'

import { authSlice } from './auth.reducer'

export const selectCurrentUser = (state: RootState): UserType | null => state.auth.user

export const selectDefaultAddress = (state: RootState): string | undefined | null => state.auth.user?.primaryAddress

export const selectKeycloakInstance = (state: RootState): Keycloak | null => state.auth.keycloak

export const { setCredentials, removeCredentials } = authSlice.actions
