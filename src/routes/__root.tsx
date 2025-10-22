import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { ThemeProvider } from '@emotion/react'
import { theme } from '../theme'

const RootLayout = () => (
  <ThemeProvider theme={theme}>
    <Outlet />
  </ThemeProvider>
)

export const Route = createRootRoute({ component: RootLayout })
