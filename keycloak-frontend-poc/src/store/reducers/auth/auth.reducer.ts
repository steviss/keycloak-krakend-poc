import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import Keycloak from 'keycloak-js'

import { UserResponse } from 'src/store/services'

import { AuthReducerState } from './auth.interface'

const initialState: AuthReducerState = {
  token: null,
  user: null,
  keycloak: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, { payload: { token, ...user } }: PayloadAction<UserResponse>) => {
      state.token = token
      state.user = user
    },
    setKeycloakInstance: (state, { payload }: PayloadAction<Keycloak>) => {
      state.keycloak = payload
    },
    removeCredentials: state => {
      ;(state.token = null), (state.user = null)
    },
  },
})

export default authSlice.reducer
