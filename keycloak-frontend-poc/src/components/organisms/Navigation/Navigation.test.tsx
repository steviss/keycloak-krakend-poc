import { cleanup, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { MOCK_GUEST_PRELOADED_STATE, MOCK_USER_PRELOADED_STATE, renderWithProviders } from 'src/tests'

import Navigation from './Navigation'

describe('Navigation Test Suite', () => {
  afterEach(() => {
    cleanup()
  })
  describe('User Logged Out', () => {
    renderWithProviders(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>,
      { preloadedState: MOCK_GUEST_PRELOADED_STATE }
    )
    test('Render test', () => {
      expect(screen.getByText(/Login/i)).toBeInTheDocument()
    })
  })
  describe('User Logged In', () => {
    renderWithProviders(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>,
      { preloadedState: MOCK_USER_PRELOADED_STATE }
    )
    test('Render test', () => {
      expect(screen.queryByText(/Login/i)).not.toBeInTheDocument()
    })
  })
})
