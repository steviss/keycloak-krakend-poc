import { PreloadedState } from '@reduxjs/toolkit'
import Keycloak from 'keycloak-js'

import { appConfig } from 'src/utilities'

import { keycloakConfig } from 'src/store'
import { RootState } from 'src/store/configureStore'
import { keycloakInitOptions, keycloakConfig } from './keycloak.config'

export const reHydrateStore = (): PreloadedState<RootState> | undefined => {
  const keycloak = new Keycloak(keycloakConfig)
  keycloak
    .init(keycloakInitOptions)
    .then(value => {
      if (value) {
        console.log('keycloak token', keycloak.current.token)
        console.log('tokenParse', keycloak.current.tokenParsed)
      }
    })
    .catch(e => console.error('keycloak error', e))
  const hydratedStoreState: PreloadedState<RootState> = {
    auth: {
      keycloak,
      user: null,
    },
  }
  if (fromLocalStorage) return hydratedStoreState
  return undefined
}
