import { UserType } from 'src/types'

export type UserResponse = UserType & {
  token: string
}

export interface LoginRequest {
  email: string
  password: string
}

export interface RegisterRequest {
  email: string
  password: string
  firstName: string
  lastName: string
}

export interface BackendError {
  status: number
  data: {
    message: string
    statusCode: number
  }
}

export type ForgotPasswordResponse = boolean
export interface ForgotPasswordRequest {
  email: string
}

export type ChangePasswordResponse = boolean
export interface ChangePasswordRequest {
  currentPassword: string
  newPassword: string
  repeatNewPassword: string
}

export type ChangePasswordPublicResponse = boolean
export interface ChangePasswordPublicRequest {
  token: string
  newPassword: string
  repeatNewPassword: string
}
