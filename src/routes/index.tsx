import { createFileRoute } from '@tanstack/react-router'
import Nav from '../features/Nav'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <>
      <Nav />
      <div>
        <h3>Welcome Home!</h3>
      </div>
    </>
  )
}
