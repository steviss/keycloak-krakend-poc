import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { UserResponse } from 'src/store/services'

import { KeycloakReducerState } from './keycloak.interface'

const initialState: KeycloakReducerState = {
  token: null,
  user: null,
}

export const keycloakSlice = createSlice({
  name: 'keycloak',
  initialState,
  reducers: {
    setCredentials: (state, { payload: { token, ...user } }: PayloadAction<UserResponse>) => {
      state.token = token
      state.user = user
    },
    removeCredentials: state => {
      ;(state.token = null), (state.user = null)
    },
  },
})

export default keycloakSlice.reducer
