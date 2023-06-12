import { Menu as MenuIcon } from '@mui/icons-material'
import CloseIcon from '@mui/icons-material/Close'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { Box, Collapse, Drawer, IconButton, List, ListItemText, darken, useTheme } from '@mui/material'
import React, { MouseEvent, useState } from 'react'

import { RolesEnum } from 'src/types'

import { ListLinkButton } from 'src/components/atoms'

import { useHasPermission } from 'src/store'

import { MENU_ADMIN_LINKS, MENU_GUEST_LINKS, MENU_USER_LINKS } from './MenuDrawer.consts'
import { MenuDrawerProps } from './MenuDrawer.interface'

const MenuDrawer: React.FC<MenuDrawerProps> = ({ handleClose, ...props }) => {
  const theme = useTheme()
  const isAdmin = useHasPermission(RolesEnum.Admin)
  const [dashboardMenuOpen, toggleDashboardMenu] = useState<boolean>(false)
  const handleToggleDashboard = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    e.preventDefault()
    toggleDashboardMenu(prevState => !prevState)
  }
  return (
    <Drawer
      {...props}
      PaperProps={{
        sx: {
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: '1 1 100%',
          maxWidth: 'calc(100vh - 5rem)',
          width: '18rem',
        }}
      >
        <Box component="header" sx={{ display: 'flex', padding: '0.5rem', backgroundColor: darken(theme.palette.primary.main, 0.25) }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.75rem',
              mr: '2rem',
            }}
          >
            <MenuIcon />
          </Box>
          Logo
          <IconButton size="large" color="inherit" aria-label="close menu" sx={{ ml: '2rem' }} onClick={() => handleClose(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List component="nav" aria-label="main menu" sx={{ marginBottom: 'auto' }}>
          {MENU_GUEST_LINKS.map(({ label, url, id }) => (
            <ListLinkButton key={id} to={url}>
              <ListItemText primary={label} />
            </ListLinkButton>
          ))}
        </List>
        {isAdmin && (
          <List component="nav" aria-label="admin menu" sx={{ backgroundColor: darken(theme.palette.primary.main, 0.25) }}>
            <ListLinkButton to={MENU_USER_LINKS[0].url}>
              <ListItemText primary={MENU_USER_LINKS[0].label} />
              <IconButton size="large" color="inherit" aria-label="toggle dashboard menu" onClick={handleToggleDashboard}>
                {dashboardMenuOpen ? <ExpandMore /> : <ExpandLess />}
              </IconButton>
            </ListLinkButton>
            <Collapse in={dashboardMenuOpen} timeout="auto" unmountOnExit>
              <List component="nav" aria-label="dashboard menu" sx={{ backgroundColor: darken(theme.palette.primary.main, 0.25) }}>
                {MENU_ADMIN_LINKS.map(({ label, url, id }) => (
                  <ListLinkButton key={id} to={url}>
                    <ListItemText primary={label} />
                  </ListLinkButton>
                ))}
              </List>
            </Collapse>
          </List>
        )}
      </Box>
    </Drawer>
  )
}

export default MenuDrawer
