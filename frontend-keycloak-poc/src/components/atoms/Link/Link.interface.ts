import { LinkProps as MuiLinkProps } from '@mui/material'
import { LinkProps as RouterLinkProps } from 'react-router-dom'

export type LinkProps = MuiLinkProps & Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }
