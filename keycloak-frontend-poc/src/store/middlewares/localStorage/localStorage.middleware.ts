import { createListenerMiddleware } from '@reduxjs/toolkit'

import { appConfig } from 'src/utilities'

import { RootState } from 'src/store'
import { setCredentials } from 'src/store/reducers'

export const localStorageMiddleware = createListenerMiddleware<RootState>()

localStorageMiddleware.startListening({
  actionCreator: setCredentials,
  effect: async (_action, localStorageApi) => {
    localStorage.setItem(appConfig.LOCAL_STORAGE_STORE_NAME, JSON.stringify(localStorageApi.getState()))
  },
})
