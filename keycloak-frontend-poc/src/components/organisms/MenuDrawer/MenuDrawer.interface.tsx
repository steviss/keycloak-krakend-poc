import { DrawerProps } from '@mui/material'
import { Dispatch, SetStateAction } from 'react'

export type MenuDrawerProps = DrawerProps & { handleClose: Dispatch<SetStateAction<boolean>> }
