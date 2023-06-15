import { PreloadedState } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

import { appConfig } from 'src/utilities'

import { RootState } from 'src/store/configureStore'

export const reHydrateStore = (): PreloadedState<RootState> | undefined => {
  const fromCookie = Cookies.get(appConfig.COOKIE_NAME)
  if (fromCookie) return JSON.parse(fromCookie) as unknown as PreloadedState<RootState>
  return undefined
}
