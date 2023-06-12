import Keycloak, { KeycloakAdapter, KeycloakConfig } from 'keycloak-js'
import { FC, PropsWithChildren, useEffect, useRef, useState } from 'react'

import { KeycloakStoreProvider } from './keycloak.store'

export type KeycloakStoreReactAdapter = KeycloakAdapter

export type KeycloakProviderProps = PropsWithChildren<{ config: KeycloakConfig }>

const KeycloakProvider: FC<KeycloakProviderProps> = ({ config, children }) => {
  const keycloak = useRef<Keycloak>(new Keycloak(config))
  const [loading, setLoading] = useState<boolean>(true)
  useEffect(() => {
    keycloak.current
      .init({ adapter: 'default', onLoad: 'check-sso', silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html' })
      .then(value => {
        if (value) {
          console.log('keycloak token', keycloak.current.token)
          console.log('tokenParse', keycloak.current.tokenParsed)
        }
      })
      .catch(e => console.error('keycloak error', e))
      .finally(() => setLoading(false))
  }, [keycloak])
  if (loading) return <div>Loading...</div>
  return <KeycloakStoreProvider value={{ keycloak: keycloak.current, loading }}>{children}</KeycloakStoreProvider>
}

export default KeycloakProvider
