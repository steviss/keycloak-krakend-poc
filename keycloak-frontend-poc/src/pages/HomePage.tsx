import { Typography } from '@mui/material'
import { FC } from 'react'
import { Layout } from 'src/templates'

import { appConfig } from 'src/utilities'

const HomePage: FC = () => {
  return (
    <Layout title="Home Page">
      <Typography>{appConfig.APP_NAME}</Typography>
      Home Page
    </Layout>
  )
}

export default HomePage
