import { ListItemButton } from '@mui/material'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

import { ListLinkButtonProps } from './ListLinkButton.interface'

const ListLinkButton: React.FC<ListLinkButtonProps> = ({ to, children, ...props }) => {
  return (
    <ListItemButton {...props} component={RouterLink} to={to}>
      {children}
    </ListItemButton>
  )
}

export default ListLinkButton
