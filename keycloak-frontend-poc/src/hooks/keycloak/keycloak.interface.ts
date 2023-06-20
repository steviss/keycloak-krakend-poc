import Keycloak from 'keycloak-js'
import { PropsWithChildren } from 'react'

export type KeycloakProviderProps = PropsWithChildren

export type TrustMeBroType<T> = Exclude<T, null | undefined>

export type KeycloakOnReadyFunction = TrustMeBroType<Keycloak['onReady']>

export type KeycloakOnActionUpdateFunction = Keycloak['onActionUpdate']

export type KeycloakOnAuthErrorFunction = Keycloak['onAuthError']

export type KeycloakOnAuthLogoutFunction = Keycloak['onAuthLogout']

export type KeycloakOnAuthRefreshErrorFunction = Keycloak['onAuthRefreshError']

export type KeycloakOnAuthRefreshSuccessFunction = Keycloak['onAuthRefreshSuccess']

export type KeycloakOnAuthSuccessFunction = Keycloak['onAuthSuccess']

export type KeycloakOnTokenExpiredFunction = Keycloak['onTokenExpired']

export type KeycloakURLsType = {
  register: string
  account: string
  login: string
  logout: string
}

export type KeycloakContextType = {
  login: Keycloak['login']
  logout: () => void
  account: Keycloak['accountManagement']
  urls: KeycloakURLsType | undefined
}
