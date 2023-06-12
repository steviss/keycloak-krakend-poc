import { KeycloakConfig } from 'keycloak-js'

import { appConfig } from 'src/utilities'

const keycloak: KeycloakConfig = {
  url: appConfig.KEYCLOAK_URL,
  realm: appConfig.KEYCLOAK_REALM,
  clientId: appConfig.KEYCLOAK_CLIENT_ID,
}

export default keycloak
