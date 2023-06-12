import { KeycloakConfig, KeycloakInitOptions } from 'keycloak-js'

import { appConfig } from 'src/utilities'

export const keycloakConfig: KeycloakConfig = {
  url: appConfig.KEYCLOAK_URL,
  realm: appConfig.KEYCLOAK_REALM,
  clientId: appConfig.KEYCLOAK_CLIENT_ID,
}

export const keycloakInitOptions: KeycloakInitOptions = {
  adapter: 'default',
  onLoad: 'check-sso',
  silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
}
