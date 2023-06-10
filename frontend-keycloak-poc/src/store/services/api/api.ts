import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { appConfig } from 'src/utilities'

import { RootState } from 'src/store/configureStore'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: appConfig.API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  tagTypes: [],
  endpoints: () => ({}),
})
