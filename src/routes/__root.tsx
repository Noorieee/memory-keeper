import { createRootRoute, Outlet } from '@tanstack/react-router'
import { ThemeProvider, Global, css } from '@emotion/react'
import { theme } from '@/theme'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

const GlobalStyles = css`
  * {
    font-family: ${theme.fontFamilies.body};
  }
`
library.add(fas, far, fab)

const RootLayout = () => (
  <ThemeProvider theme={theme}>
    <Global styles={GlobalStyles} />
    <Outlet />
  </ThemeProvider>
)

export const Route = createRootRoute({ component: RootLayout })
