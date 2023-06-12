/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_BACKEND_URL: string
  readonly VITE_APP_API_URL: string
  readonly VITE_APP_LOCAL_STORAGE_NAME: string
  readonly VITE_APP_COOKIE_NAME: string
  readonly VITE_APP_NAME: string
  readonly VITE_APP_KEYCLOAK_REALM: string
  readonly VITE_APP_KEYCLOAK_CLIENT_ID: string
  readonly VITE_APP_KEYCLOAK_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
