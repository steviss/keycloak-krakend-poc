import { ThemeProvider } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { KeycloakProvider, keycloakConfig, keycloakInitOptions } from 'src/hooks'

import App from './App.tsx'
import './index.css'
import { store } from './store'
import { theme } from './theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <KeycloakProvider keycloakConfig={keycloakConfig} keycloakInitOptions={keycloakInitOptions}>
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </ThemeProvider>
        </KeycloakProvider>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
)
