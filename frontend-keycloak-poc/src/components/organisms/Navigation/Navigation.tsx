import { AppBar, Toolbar, useTheme } from '@mui/material'
import React from 'react'

import { Link } from 'src/components/atoms'

import { useAuth } from 'src/store'

const Navigation: React.FC = () => {
  const theme = useTheme()
  const { user } = useAuth()
  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: theme.palette.primary.main }}>
        <Toolbar>
          Logo
          {user ? 'Logged In' : <Link href="/login">Login</Link>}
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navigation
