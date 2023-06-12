import { AppBar, Button, Toolbar, Typography, useTheme } from '@mui/material'
import { FC, useState } from 'react'

import { MenuDrawer, UserMenu } from 'src/components/organisms'

import { useKeycloakStore } from 'src/store'

const Navigation: FC = () => {
  const theme = useTheme()
  const {
    keycloak: { login, authenticated },
  } = useKeycloakStore()
  const [drawerStatus, toggleDrawerStatus] = useState<boolean>(false)
  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: theme.palette.primary.main }}>
        <Toolbar>
          <Typography style={{ marginRight: 'auto' }}>Logo</Typography>
          {authenticated ? (
            <UserMenu />
          ) : (
            <Button color="secondary" onClick={() => login({ redirectUri: window.location.origin })}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <MenuDrawer anchor="left" open={drawerStatus} onClose={() => toggleDrawerStatus(false)} handleClose={toggleDrawerStatus} />
    </>
  )
}

export default Navigation
