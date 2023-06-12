import Keycloak from 'keycloak-js'

import { UserType } from 'src/types'

export interface AuthReducerState {
  user: UserType | null
  keycloak: Keycloak | null
}
