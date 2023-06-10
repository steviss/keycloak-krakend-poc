import { AppBar, Toolbar, useTheme } from '@mui/material'
import { FC, useState } from 'react'

import { MenuDrawer, UserMenu } from 'src/components/organisms'

import { Link } from 'src/components/atoms'

import { useAuth } from 'src/store'

const Navigation: FC = () => {
  const theme = useTheme()
  const { user } = useAuth()
  const [drawerStatus, toggleDrawerStatus] = useState<boolean>(false)
  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: theme.palette.primary.main }}>
        <Toolbar>
          Logo
          {user ? <UserMenu /> : <Link href="/login">Login</Link>}
        </Toolbar>
      </AppBar>
      <MenuDrawer anchor="left" open={drawerStatus} onClose={() => toggleDrawerStatus(false)} handleClose={toggleDrawerStatus} />
    </>
  )
}

export default Navigation
