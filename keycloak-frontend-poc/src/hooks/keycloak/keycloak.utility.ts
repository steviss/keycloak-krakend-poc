import { KeycloakTokenParsed } from 'keycloak-js'

import { UserType } from 'src/types'

export const parseKeycloakTokenToUser = (parsedToken: KeycloakTokenParsed): UserType => {
  return Object.assign({
    email: parsedToken.email,
    email_verified: parsedToken.email_verified,
    name: parsedToken.name,
    preferred_username: parsedToken.preferred_username,
    family_name: parsedToken.family_name,
    given_name: parsedToken.given_name,
  })
}
