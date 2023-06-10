import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React, { PropsWithChildren } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'

interface ExtendedRenderOptions {
  route?: string
}

function renderWithRouter(ui: React.ReactElement, { route = '/' }: ExtendedRenderOptions = {}) {
  window.history.pushState({}, 'Current page', route)
  function Wrapper({ children }: PropsWithChildren<unknown>): JSX.Element {
    return (
      <HelmetProvider>
        <BrowserRouter>{children}</BrowserRouter>
      </HelmetProvider>
    )
  }
  return {
    user: userEvent,
    ...render(ui, { wrapper: Wrapper }),
  }
}

export default renderWithRouter
