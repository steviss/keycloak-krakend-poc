/// <reference types="vite/client" />

interface ImportMetaEnv {
    
  readonlyVITE_APP_BACKEND_URL: string
  readonly VITE_APP_API_URL: string
  readonly VITE_APP_LOCAL_STORAGE_NAME: string
  readonly VITE_APP_COOKIE_NAME: string
  readonly VITE_APP_NAME: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}