import { KeycloakContext } from './keycloak.interface'
import { createContext } from 'react'

const KeycloakContext = createContext<KeycloakContext | undefined>(undefined)

export default KeycloakContext
