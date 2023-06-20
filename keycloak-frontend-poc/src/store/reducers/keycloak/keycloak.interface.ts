import { UserType } from 'src/types'

export interface KeycloakReducerState {
  user: UserType | null
  token: string | null
}
