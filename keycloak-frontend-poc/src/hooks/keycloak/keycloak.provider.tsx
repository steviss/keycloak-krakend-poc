import Keycloak from 'keycloak-js'
import { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'

import { removeCredentials, setCredentials } from 'src/store'

import KeycloakContext from './keycloak.context'
import {
  KeycloakOnActionUpdateFunction,
  KeycloakOnAuthErrorFunction,
  KeycloakOnAuthLogoutFunction,
  KeycloakOnAuthRefreshErrorFunction,
  KeycloakOnAuthRefreshSuccessFunction,
  KeycloakOnAuthSuccessFunction,
  KeycloakOnReadyFunction,
  KeycloakOnTokenExpiredFunction,
  KeycloakProviderProps,
  KeycloakURLsType,
} from './keycloak.interface'
import { parseKeycloakTokenToUser } from './keycloak.utility'

const KeycloakProvider: FC<KeycloakProviderProps> = ({ keycloakConfig, keycloakInitOptions, children }) => {
  const [loading, setLoading] = useState<boolean>(true)
  const [keycloakUrls, setKeycloakUrls] = useState<KeycloakURLsType | undefined>(undefined)

  const dispatch = useDispatch()

  const keycloak = useMemo(() => new Keycloak(keycloakConfig), [keycloakConfig])

  const loginUser = useCallback(() => {
    if (keycloak.tokenParsed && keycloak.token) {
      const user = parseKeycloakTokenToUser(keycloak.tokenParsed)
      dispatch(setCredentials({ token: keycloak.token, ...user }))
    }
  }, [dispatch, keycloak.token, keycloak.tokenParsed])

  const logoutUser = useCallback(() => dispatch(removeCredentials()), [dispatch])

  const handleOnReady: KeycloakOnReadyFunction = useCallback(() => {
    const login = keycloak.createLoginUrl({ redirectUri: 'http://localhost:3000' })
    const register = keycloak.createRegisterUrl({ redirectUri: 'http://localhost:3000' })
    const account = keycloak.createAccountUrl({ redirectUri: 'http://localhost:3000' })
    const logout = keycloak.createLogoutUrl({ redirectUri: 'http://localhost:3000' })
    setKeycloakUrls({
      register,
      account,
      login,
      logout,
    })
    setLoading(false)
  }, [keycloak])

  const handleOnActionUpdate: KeycloakOnActionUpdateFunction = () => {
    console.log('action update')
  }

  const handleOnAuthError: KeycloakOnAuthErrorFunction = () => {
    console.log('auth error')
  }

  const handleOnAuthLogout: KeycloakOnAuthLogoutFunction = useCallback(() => {
    console.log('auth logout')
  }, [])

  const handleOnAuthRefreshError: KeycloakOnAuthRefreshErrorFunction = useCallback(() => {
    logoutUser()
    console.log('auth refresh error')
  }, [logoutUser])

  const handleOnAuthRefreshSuccess: KeycloakOnAuthRefreshSuccessFunction = () => {
    console.log('auth refresh success')
  }

  const handleOnAuthSuccess: KeycloakOnAuthSuccessFunction = useCallback(() => {
    console.log('auth user success')
    loginUser()
  }, [loginUser])

  const handleOnTokenExpired: KeycloakOnTokenExpiredFunction = () => {
    console.log('token expired')
  }

  const handleKeycloakLogin = useCallback(() => keycloak.login(), [keycloak])

  const handleKeycloakLogout = useCallback(() => {
    keycloak.logout()
    logoutUser()
  }, [keycloak, logoutUser])

  const handleKeycloakRegister = useCallback(() => keycloak.register(), [keycloak])

  const handleKeycloakAccountManagement = useCallback(() => keycloak.accountManagement(), [keycloak])

  useEffect(() => {
    keycloak.onReady = handleOnReady
    keycloak.onActionUpdate = handleOnActionUpdate
    keycloak.onAuthError = handleOnAuthError
    keycloak.onAuthLogout = handleOnAuthLogout
    keycloak.onAuthRefreshError = handleOnAuthRefreshError
    keycloak.onAuthRefreshSuccess = handleOnAuthRefreshSuccess
    keycloak.onAuthSuccess = handleOnAuthSuccess
    keycloak.onTokenExpired = handleOnTokenExpired
    keycloak.init(keycloakInitOptions)
  }, [handleOnAuthLogout, handleOnAuthRefreshError, handleOnAuthSuccess, handleOnReady, keycloak, keycloakInitOptions])

  if (loading) return <div>Authenticating...</div>

  return (
    <KeycloakContext.Provider
      value={{
        login: handleKeycloakLogin,
        register: handleKeycloakRegister,
        logout: handleKeycloakLogout,
        account: handleKeycloakAccountManagement,
        urls: keycloakUrls,
      }}
    >
      {children}
    </KeycloakContext.Provider>
  )
}
//dodati rute i sve to ostalo sto se komponenti tice
//refresh tokena uraditi

export default KeycloakProvider
