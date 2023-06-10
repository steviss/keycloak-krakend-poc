import { MenuItem } from '@mui/material'
import { FC } from 'react'

import { Link } from 'src/components/atoms'

import { MenuItemLinkProps } from './MenuItemLink.interface'

const MenuItemLink: FC<MenuItemLinkProps> = ({ href, children, ...props }) => {
  return (
    <MenuItem {...props}>
      <Link href={href} sx={{ color: 'common.black', textDecoration: 'none' }}>
        {children}
      </Link>
    </MenuItem>
  )
}

export default MenuItemLink
