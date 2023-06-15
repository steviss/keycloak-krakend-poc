import { UserType } from 'src/types'

import { RootState } from 'src/store/configureStore'

import { keycloakSlice } from './keycloak.reducer'

export const selectCurrentUser = (state: RootState): UserType | null => state.keycloak.user

export const { setCredentials, removeCredentials } = keycloakSlice.actions
