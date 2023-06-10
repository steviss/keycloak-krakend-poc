import { Link as MuiLink } from '@mui/material'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

import { LinkProps } from './Link.interface'

const Link: React.FC<LinkProps> = ({ href, sx, ...props }) => {
  return <MuiLink {...props} component={RouterLink} to={href} sx={{ color: 'primary.contrastText', ...sx }} />
}

export default Link
