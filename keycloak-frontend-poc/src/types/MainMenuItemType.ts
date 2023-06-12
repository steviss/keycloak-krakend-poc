import { RolesEnum } from './RolesEnum'

export type MainMenuItemType = {
  id: string
  url: string
  label: string
  permissionRequired: RolesEnum
}
