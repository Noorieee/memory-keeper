import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import "./index.css"
import { routeTree } from './routeTree.gen'
// import "@fontsource/nunito"; // Defaults to weight 400
// import "@fontsource/indie-flower";
// import "@fontsource/caveat"; // Defaults to weight 400// Defaults to weight 400
// import nunito400Url from "@fontsource/nunito/files/nunito-latin-400-normal.woff2?url"
// import caveat400Url from "@fontsource/caveat/files/nunito-latin-400-normal.woff2?url"
// import indieflower400Url from "@fontsource/indieflower/files/indie-flower-latin-400-normal.woff2?url"
import "@fontsource/caveat/400.css"
import "@fontsource/nunito/400.css"
import "@fontsource/indie-flower/400.css"

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
}
