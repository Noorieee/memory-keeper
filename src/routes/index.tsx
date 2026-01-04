import { createFileRoute } from '@tanstack/react-router'
import Nav from '@/features/Nav'
import FlexContainer from '@/common/components/FlexContainer'
import styled from '@emotion/styled'

export const Route = createFileRoute('/')({
  component: Index,
})

const Container = styled(FlexContainer)(() => {
  return `
    width: fit-content;
  `
})

function Index() {
  return (
    <>
    <Container>
      <Nav />
      <div>
        <h3>Welcome Home!</h3>
      </div>
      </Container>
    </>
  )
}
