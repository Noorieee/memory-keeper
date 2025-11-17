import styled from '@emotion/styled'

const Container = styled.div(({ theme }) => {
  return `
      background-color: ${theme.colors.background.dark};
      min-height: 100vh;
      width: 100%;
      color: ${theme.colors.text.light};
    `
})

interface PageBackgroundProps {
  children: React.ReactNode
}

const PageBackground = ({ children }: PageBackgroundProps) => {
  return <Container>{children}</Container>
}

export default PageBackground
