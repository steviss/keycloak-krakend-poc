const config = {
  BACKEND_URL: String(import.meta.env.VITE_APP_BACKEND_URL || ''),
  API_URL: String(import.meta.env.VITE_APP_API_URL || ''),
  LOCAL_STORAGE_STORE_NAME: String(import.meta.env.VITE_APP_LOCAL_STORAGE_NAME || ''),
  COOKIE_NAME: String(import.meta.env.VITE_APP_COOKIE_NAME || ''),
  APP_NAME: String(import.meta.env.VITE_APP_NAME || ''),
}

export default config
