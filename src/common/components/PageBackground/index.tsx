import styled from '@emotion/styled'

const PageBackground = styled.div(({ theme }) => {
  return `
    background-color: ${theme.colors.background.dark};
    min-height: 100vh;
    width: 100%;
    color: ${theme.colors.text.light};
  `
})

export default PageBackground
