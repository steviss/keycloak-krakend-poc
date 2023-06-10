import { cleanup, screen } from '@testing-library/react'
import { FC } from 'react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { MOCK_ADMIN_PRELOADED_STATE, MOCK_GUEST_PRELOADED_STATE, MOCK_USER_PRELOADED_STATE, renderWithProviders } from 'src/tests'

import { RolesEnum } from 'src/types'

import ProtectedRoute from './ProtectedRoute'
import { TEST_ADMIN_MINIMAL_REQUIREMENT, TEST_GUEST_MINIMAL_REQUIREMENT, TEST_USER_MINIMAL_REQUIREMENT } from './ProtectedRoute.consts'

const ProtectedRoutesTestComponent: FC<{
  minimalRequirement: RolesEnum
}> = ({ minimalRequirement }) => {
  return (
    <MemoryRouter initialEntries={['/dashboard']}>
      <Routes>
        <Route path="/" element={<span>Home Page</span>} />
        <Route path="login" element={<span>Login Page</span>} />
        <Route path="dashboard" element={<ProtectedRoute requiredRole={minimalRequirement} />}>
          <Route index element={<span>Forbidden Page</span>} />
        </Route>
      </Routes>
    </MemoryRouter>
  )
}

describe('ProtectedRoute Test Suite', () => {
  afterEach(() => {
    cleanup()
  })
  describe('Authentication Tests', () => {
    describe('Minimal requirement: Guest Tests', () => {
      test('User Authentication Level: Guest - Test', async () => {
        renderWithProviders(<ProtectedRoutesTestComponent minimalRequirement={TEST_GUEST_MINIMAL_REQUIREMENT} />, {
          preloadedState: MOCK_GUEST_PRELOADED_STATE,
        })
        expect(await screen.findByText(/Forbidden Page/i)).toBeInTheDocument()
      })
      test('Minimal requirement: User - Test', async () => {
        renderWithProviders(<ProtectedRoutesTestComponent minimalRequirement={TEST_GUEST_MINIMAL_REQUIREMENT} />, {
          preloadedState: MOCK_USER_PRELOADED_STATE,
        })
        expect(await screen.findByText(/Forbidden Page/i)).toBeInTheDocument()
      })
      test('Minimal requirement: Admin Test', async () => {
        renderWithProviders(<ProtectedRoutesTestComponent minimalRequirement={TEST_GUEST_MINIMAL_REQUIREMENT} />, {
          preloadedState: MOCK_ADMIN_PRELOADED_STATE,
        })
        expect(await screen.findByText(/Forbidden Page/i)).toBeInTheDocument()
      })
    })
    describe('Minimal requirement: User Tests', () => {
      test('User Authentication Level: Guest - Test', async () => {
        renderWithProviders(<ProtectedRoutesTestComponent minimalRequirement={TEST_USER_MINIMAL_REQUIREMENT} />, {
          preloadedState: MOCK_GUEST_PRELOADED_STATE,
        })
        expect(await screen.findByText(/Login Page/i)).toBeInTheDocument()
      })
      test('Minimal requirement: User - Test', async () => {
        renderWithProviders(<ProtectedRoutesTestComponent minimalRequirement={TEST_USER_MINIMAL_REQUIREMENT} />, {
          preloadedState: MOCK_USER_PRELOADED_STATE,
        })
        expect(await screen.findByText(/Forbidden Page/i)).toBeInTheDocument()
      })
      test('Minimal requirement: Admin Test', async () => {
        renderWithProviders(<ProtectedRoutesTestComponent minimalRequirement={TEST_USER_MINIMAL_REQUIREMENT} />, {
          preloadedState: MOCK_ADMIN_PRELOADED_STATE,
        })
        expect(await screen.findByText(/Forbidden Page/i)).toBeInTheDocument()
      })
    })
    describe('Minimal requirement: Admin Tests', () => {
      test('User Authentication Level: Guest - Test', async () => {
        renderWithProviders(<ProtectedRoutesTestComponent minimalRequirement={TEST_ADMIN_MINIMAL_REQUIREMENT} />, {
          preloadedState: MOCK_GUEST_PRELOADED_STATE,
        })
        expect(await screen.findByText(/Login Page/i)).toBeInTheDocument()
      })
      test('Minimal requirement: User - Test', async () => {
        renderWithProviders(<ProtectedRoutesTestComponent minimalRequirement={TEST_ADMIN_MINIMAL_REQUIREMENT} />, {
          preloadedState: MOCK_USER_PRELOADED_STATE,
        })
        expect(await screen.findByText(/Login Page/i)).toBeInTheDocument()
      })
      test('Minimal requirement: Admin Test', async () => {
        renderWithProviders(<ProtectedRoutesTestComponent minimalRequirement={TEST_ADMIN_MINIMAL_REQUIREMENT} />, {
          preloadedState: MOCK_ADMIN_PRELOADED_STATE,
        })
        expect(await screen.findByText(/Forbidden Page/i)).toBeInTheDocument()
      })
    })
  })
})
