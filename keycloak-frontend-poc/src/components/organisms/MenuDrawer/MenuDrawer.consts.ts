import { MainMenuItemType, RolesEnum } from 'src/types'

export const MENU_GUEST_LINKS: MainMenuItemType[] = [
  {
    id: 'home',
    url: '/',
    label: 'Menu',
    permissionRequired: RolesEnum.Guest,
  },
]

export const MENU_USER_LINKS: MainMenuItemType[] = [
  {
    id: 'user',
    label: 'User',
    url: '/user',
    permissionRequired: RolesEnum.User,
  },
]

export const MENU_ADMIN_LINKS: MainMenuItemType[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    url: '/dashboard',
    permissionRequired: RolesEnum.Admin,
  },
]
