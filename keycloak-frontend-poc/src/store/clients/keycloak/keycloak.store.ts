import Keycloak from 'keycloak-js'
import { Provider, createContext, useContext } from 'react'

interface KecloakStore {
  keycloak: Keycloak
  loading: boolean
}

function createKeycloakStore<T = KecloakStore>() {
  const Context = createContext<T | undefined>(undefined)

  function useStoreContext() {
    const context = useContext(Context)
    if (context === undefined) {
      throw new Error(`Context Provider for Keycloak Store is missing`)
    }
    return context
  }

  //adapter za provider napraviti
  //u njemu registrovati init funkcije
  // ostaviti state sa keycloak classom
  //wrapovati use callback

  return [Context.Provider, useStoreContext] as [Provider<T>, () => T]
}

const [KeycloakStoreProvider, useKeycloakStore] = createKeycloakStore()

export { KeycloakStoreProvider, useKeycloakStore }
