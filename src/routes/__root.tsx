import { createRootRoute, Outlet } from '@tanstack/react-router'
import { ThemeProvider, Global, css } from '@emotion/react'
import { theme } from '@/theme'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import PageBackground from '@/common/components/PageBackground'

const GlobalStyles = css`
  * {
    font-family: ${theme.fontFamilies.body};
  }
`
library.add(fas, far, fab)

const RootLayout = () => (
  <ThemeProvider theme={theme}>
    <Global styles={GlobalStyles} />
    <PageBackground>
    <Outlet />
    </PageBackground>
  </ThemeProvider>
)

export const Route = createRootRoute({ component: RootLayout })
