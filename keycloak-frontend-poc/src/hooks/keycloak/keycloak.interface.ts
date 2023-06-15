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

export type KeycloakContext = {
  login: Keycloak['login']
  logout: () => void
}
