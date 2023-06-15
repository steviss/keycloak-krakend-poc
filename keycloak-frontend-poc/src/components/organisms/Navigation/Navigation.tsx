import { AppBar, Button, Toolbar, Typography, useTheme } from '@mui/material'
import { FC, useState } from 'react'
import { useKeycloak } from 'src/hooks'

import { MenuDrawer, UserMenu } from 'src/components/organisms'

import { useAuth } from 'src/store'

const Navigation: FC = () => {
  const theme = useTheme()
  const { login } = useKeycloak()
  const { user } = useAuth()
  const [drawerStatus, toggleDrawerStatus] = useState<boolean>(false)
  console.log('user', user)
  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: theme.palette.primary.main }}>
        <Toolbar>
          <Typography style={{ marginRight: 'auto' }}>Logo</Typography>
          {user ? (
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
