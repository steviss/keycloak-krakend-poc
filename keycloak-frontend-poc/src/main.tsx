import { ThemeProvider } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { KeycloakProvider } from 'src/store'

import App from './App.tsx'
import './index.css'
import { keycloakConfig, store } from './store'
import { theme } from './theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <KeycloakProvider config={keycloakConfig}>
      <HelmetProvider>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </ThemeProvider>
        </Provider>
      </HelmetProvider>
    </KeycloakProvider>
  </React.StrictMode>
)
