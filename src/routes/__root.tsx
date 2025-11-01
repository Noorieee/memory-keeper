import { createRootRoute, Outlet } from '@tanstack/react-router'
import { ThemeProvider, Global, css } from '@emotion/react'
import { theme } from '../theme'

const GlobalStyles = css`
  * {
    font-family: ${theme.fontFamilies.body};
  }
`

const RootLayout = () => (
  <ThemeProvider theme={theme}>
    <Global styles={GlobalStyles}/>
    <Outlet />
  </ThemeProvider>
)

export const Route = createRootRoute({ component: RootLayout })
