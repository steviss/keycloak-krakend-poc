import { createContext } from 'react'

import { KeycloakContextType } from './keycloak.interface'

const KeycloakContext = createContext<KeycloakContextType | undefined>(undefined)

export default KeycloakContext
