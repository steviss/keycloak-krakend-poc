import { UserType } from 'src/types'

export interface AuthReducerState {
  token: string | null
  user: UserType | null
}
