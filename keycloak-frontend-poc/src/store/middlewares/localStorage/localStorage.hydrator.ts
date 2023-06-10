import { PreloadedState } from '@reduxjs/toolkit'

import { appConfig } from 'src/utilities'

import { RootState } from 'src/store/configureStore'

export const reHydrateStore = (): PreloadedState<RootState> | undefined => {
  const fromLocalStorage = localStorage.getItem(appConfig.LOCAL_STORAGE_STORE_NAME)
  if (fromLocalStorage) return JSON.parse(fromLocalStorage) as unknown as PreloadedState<RootState>
  return undefined
}
