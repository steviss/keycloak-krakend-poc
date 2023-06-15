import { useContext } from 'react'

import KeycloakContext from './keycloak.context'

function useKeycloak() {
  const context = useContext(KeycloakContext)
  if (context === undefined) {
    throw new Error(`Context Provider for Keycloak Store is missing`)
  }
  return context
}

export default useKeycloak
