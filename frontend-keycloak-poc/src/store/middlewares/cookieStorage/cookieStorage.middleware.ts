import { createListenerMiddleware } from '@reduxjs/toolkit'

import { appConfig } from 'src/utilities'

import { setCredentials } from 'src/store/reducers'

export const localStorageMiddleware = createListenerMiddleware()

localStorageMiddleware.startListening({
  actionCreator: setCredentials,
  effect: async (action, cookieStorageApi) => {
    localStorage.setItem(appConfig.COOKIE_NAME, JSON.stringify(cookieStorageApi.getState()))
  },
})
