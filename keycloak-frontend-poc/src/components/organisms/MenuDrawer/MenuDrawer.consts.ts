import { MainMenuItemType, RolesEnum } from 'src/types'

export const MENU_GUEST_LINKS: MainMenuItemType[] = [
  {
    id: 'home',
    url: '/',
    label: 'Menu',
    permissionRequired: RolesEnum.Guest,
  },
  {
    id: 'about',
    label: 'About',
    url: '/about',
    permissionRequired: RolesEnum.Guest,
  },
  {
    id: 'terms-of-service',
    label: 'Terms of Service',
    url: '/tos',
    permissionRequired: RolesEnum.Guest,
  },
  {
    id: 'privacy',
    label: 'Privacy Policy',
    url: '/privacy',
    permissionRequired: RolesEnum.Guest,
  },
]

export const DASHBOARD_LINK: MainMenuItemType = {
  id: 'dashboard',
  label: 'Dashboard',
  url: '/dashboard',
  permissionRequired: RolesEnum.Manager,
}

export const MENU_PROTECTED_LINKS: MainMenuItemType[] = [
  {
    id: 'categories',
    label: 'Categories',
    url: '/dashboard/categories',
    permissionRequired: RolesEnum.Manager,
  },
  {
    id: 'menu-items',
    label: 'Menu Items',
    url: '/dashboard/menu-items',
    permissionRequired: RolesEnum.Manager,
  },
  {
    id: 'menu-item-variants',
    label: 'Menu Item Variants',
    url: '/dashboard/menu-item-variants',
    permissionRequired: RolesEnum.Manager,
  },
  {
    id: 'topping-groups',
    label: 'Topping Groups',
    url: '/dashboard/topping-groups',
    permissionRequired: RolesEnum.Manager,
  },
  {
    id: 'toppings',
    label: 'Toppings',
    url: '/dashboard/toppings',
    permissionRequired: RolesEnum.Manager,
  },
]
