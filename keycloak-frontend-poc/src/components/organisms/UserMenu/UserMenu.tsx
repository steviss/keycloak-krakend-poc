import { AccountCircle } from '@mui/icons-material'
import { Box, IconButton, Menu, MenuItem } from '@mui/material'
import { FC, MouseEvent, useState } from 'react'
import { useKeycloak } from 'src/hooks'

import { MenuItemLink } from 'src/components/atoms'

const UserMenu: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const { logout, account } = useKeycloak()

  const handleMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const userLogout = () => {
    logout()
  }
  return (
    <Box>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItemLink onClick={handleClose} href="/user">
          My account
        </MenuItemLink>
        <MenuItem onClick={account}>Keycloak Account</MenuItem>
        <MenuItem onClick={userLogout}>Logout</MenuItem>
      </Menu>
    </Box>
  )
}

export default UserMenu
