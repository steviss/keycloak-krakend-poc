import { cleanup, screen } from '@testing-library/react'
import React from 'react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { MOCK_ADMIN_PRELOADED_STATE, MOCK_GUEST_PRELOADED_STATE, MOCK_USER_PRELOADED_STATE, renderWithProviders } from 'src/tests'

import GuestOnlyRoute from './GuestOnlyRoute'

const GuestOnlyRouteTestComponent: React.FC = () => {
  return (
    <MemoryRouter initialEntries={['/login']}>
      <Routes>
        <Route path="/" element={<span>Home Page</span>} />
        <Route path="login" element={<GuestOnlyRoute />}>
          <Route index element={<span>Login Page</span>} />
        </Route>
      </Routes>
    </MemoryRouter>
  )
}

describe('GuestOnlyRoute Test Suite', () => {
  describe('Authentication Tests', () => {
    afterEach(() => {
      cleanup()
    })
    test('User Authentication Level: Guest - Test', async () => {
      renderWithProviders(<GuestOnlyRouteTestComponent />, {
        preloadedState: MOCK_GUEST_PRELOADED_STATE,
      })
      expect(await screen.findByText(/Login Page/i)).toBeInTheDocument()
    })
    test('User Authentication Level: User - Test', async () => {
      renderWithProviders(<GuestOnlyRouteTestComponent />, {
        preloadedState: MOCK_USER_PRELOADED_STATE,
      })
      expect(await screen.findByText(/Home Page/i)).toBeInTheDocument()
    })
    test('User Authentication Level: Admin Test', async () => {
      renderWithProviders(<GuestOnlyRouteTestComponent />, {
        preloadedState: MOCK_ADMIN_PRELOADED_STATE,
      })
      expect(await screen.findByText(/Home Page/i)).toBeInTheDocument()
    })
  })
})
