const config = {
  BACKEND_URL: String(process.env.REACT_APP_BACKEND_URL || ''),
  API_URL: String(process.env.REACT_APP_API_URL || ''),
  LOCAL_STORAGE_STORE_NAME: String(process.env.REACT_APP_LOCAL_STORAGE_NAME || ''),
  COOKIE_NAME: String(process.env.REACT_APP_COOKIE_NAME || ''),
  APP_NAME: String(process.env.REACT_APP_NAME || ''),
}

export default config
