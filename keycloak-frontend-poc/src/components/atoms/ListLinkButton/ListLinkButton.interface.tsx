import { ListItemProps } from '@mui/material'
import { LinkProps as RouterLinkProps } from 'react-router-dom'

export type ListLinkButtonProps = ListItemProps<'a'> & Pick<RouterLinkProps, 'to'>
