import { Container, Typography } from '@mui/material'
import React from 'react'
import { Helmet } from 'react-helmet-async'

import { appConfig } from 'src/utilities'

import { Navigation } from 'src/components/organisms'

import { CustomLoader } from 'src/components/atoms'

import { TEST_LAYOUT_BOX_ID } from './Layout.consts'
import { LayoutProps, LayoutTypesEnum } from './Layout.interface'

const Layout: React.FC<LayoutProps> = ({ children, type = 'default', title = 'Default Title', loading, error }) => {
  const isDefault = type === LayoutTypesEnum.Default
  if (loading)
    return (
      <>
        <Helmet>
          <title>
            {appConfig.APP_NAME} - {title}
          </title>
        </Helmet>
        <Navigation />
        <Container
          fixed
          data-testid={TEST_LAYOUT_BOX_ID}
          component="div"
          sx={{
            flex: '1 1 100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem 0',
          }}
        >
          <CustomLoader />
        </Container>
      </>
    )
  if (error)
    return (
      <>
        <Helmet>
          <title>
            {appConfig.APP_NAME} - {title}
          </title>
        </Helmet>
        <Navigation />
        <Container
          fixed
          data-testid={TEST_LAYOUT_BOX_ID}
          component="div"
          sx={{
            flex: '1 1 100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem 0',
          }}
        >
          <Typography component="h3" sx={{ fontSize: '2rem', fontWeight: 300 }}>
            Something went wrong!
          </Typography>
          {children}
        </Container>
      </>
    )
  return (
    <>
      <Helmet>
        <title>
          {appConfig.APP_NAME} - {title}
        </title>
      </Helmet>
      <Navigation />
      <Container
        fixed
        data-testid={TEST_LAYOUT_BOX_ID}
        component="div"
        sx={{
          flex: '1 1 100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: !isDefault ? 'center' : undefined,
          justifyContent: !isDefault ? 'center' : undefined,
          padding: '2rem 0',
        }}
      >
        {children}
      </Container>
    </>
  )
}

export default Layout
