import { RequestMethodEnum } from 'src/types'

import { api } from 'src/store/services/api'

import {
  ChangePasswordPublicRequest,
  ChangePasswordPublicResponse,
  ChangePasswordRequest,
  ChangePasswordResponse,
  ForgotPasswordRequest,
  ForgotPasswordResponse,
  LoginRequest,
  RegisterRequest,
  UserResponse,
} from './auth.interface'

export const authApi = api.injectEndpoints({
  endpoints: build => ({
    login: build.mutation<UserResponse, LoginRequest>({
      query: credentials => ({
        url: 'auth/login',
        method: RequestMethodEnum.Post,
        body: credentials,
      }),
    }),
    register: build.mutation<UserResponse, RegisterRequest>({
      query: credentials => ({
        url: 'auth/login',
        method: RequestMethodEnum.Post,
        body: credentials,
      }),
    }),
    forgotPassword: build.mutation<ForgotPasswordResponse, ForgotPasswordRequest>({
      query: credentials => ({
        url: 'auth/forgot-password',
        method: RequestMethodEnum.Post,
        body: credentials,
      }),
    }),
    changePassword: build.mutation<ChangePasswordResponse, ChangePasswordRequest>({
      query: credentials => ({
        url: 'auth/change-password',
        method: RequestMethodEnum.Patch,
        body: credentials,
      }),
    }),
    changePasswordPublic: build.mutation<ChangePasswordPublicResponse, ChangePasswordPublicRequest>({
      query: credentials => ({
        url: 'auth/change-password',
        method: RequestMethodEnum.Post,
        body: credentials,
      }),
    }),
    me: build.query<UserResponse, void>({
      query: () => ({
        url: 'auth/me',
        method: RequestMethodEnum.Get,
      }),
    }),
  }),
})

export const {
  useLoginMutation,
  useRegisterMutation,
  useMeQuery,
  useChangePasswordMutation,
  useChangePasswordPublicMutation,
  useForgotPasswordMutation,
} = authApi
