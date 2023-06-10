import { PreloadedState } from '@reduxjs/toolkit'

import { UserType } from 'src/types'

import { RootState } from 'src/store'

export const MOCK_USER_LOGGED_IN_OBJECT: UserType | null = Object.create({
  firstName: 'Tester',
  lastName: 'Testington',
  lastLoginAt: '2022-09-07T20:27:25.308Z',
  email: 'tester.testington@gmail.com',
  role: 'User',
})

export const MOCK_ADMIN_LOGGED_IN_OBJECT: UserType | null = Object.create({
  firstName: 'Tester',
  lastName: 'Testington',
  lastLoginAt: '2022-09-07T20:27:25.308Z',
  email: 'tester.testington@gmail.com',
  role: 'Admin',
})

export const MOCK_USER_LOGGED_IN_TOKEN = 'header.payload.secret'

export const MOCK_GUEST_PRELOADED_STATE: PreloadedState<RootState> = { auth: { user: null, token: null } }

export const MOCK_USER_PRELOADED_STATE: PreloadedState<RootState> = {
  auth: { user: MOCK_USER_LOGGED_IN_OBJECT, token: MOCK_USER_LOGGED_IN_TOKEN },
}

export const MOCK_ADMIN_PRELOADED_STATE: PreloadedState<RootState> = {
  auth: { user: MOCK_ADMIN_LOGGED_IN_OBJECT, token: MOCK_USER_LOGGED_IN_TOKEN },
}
