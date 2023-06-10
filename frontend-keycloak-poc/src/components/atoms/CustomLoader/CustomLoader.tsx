import { CircularProgress } from '@mui/material'
import React, { FC } from 'react'

import { CustomLoaderProps } from './CustomLoader.interface'

const CustomLoader: FC<CustomLoaderProps> = (props) => {
  return <CircularProgress {...props} color="secondary" />
}

export default CustomLoader
