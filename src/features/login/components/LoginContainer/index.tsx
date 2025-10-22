import styled from "@emotion/styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div(({ theme }) => {
  return `
      background-color: ${theme.colors.background.main};
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    `;
});

const FormContainer = styled.div(({ theme }) => {
  return `
      background-color: ${theme.colors.surface.main};
      color: ${theme.colors.text.main};
      padding: ${theme.spacing.lg}px;
      border-radius: ${theme.radii.lg}px;
      gap: ${theme.spacing.lg}px;
      border: 2px solid ${theme.colors.background.light};
      width: 100%;
      max-width: 450px;
      height: fit-content;
      box-shadow: ${theme.shadows.md};
      display: flex;
      flex-direction: column;
    `;
});

const IntroContainer = styled.div(({ theme }) => {
  return `
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: ${theme.spacing.sm}px;
    `;
});

const IconContainer = styled.div(({ theme }) => {
  return `
      padding: ${theme.spacing.sm}px;
      width: fit-content;
      height: fit-content;
      background-color: ${theme.colors.primary.main};
      border-radius: ${theme.radii.lg}px;
      color: ${theme.colors.surface.main};
    `;
});

const LoginContainer = () => {
  return (
    <Container>
      <FormContainer>
        <IntroContainer>
          <IconContainer>
            <FontAwesomeIcon icon={faBook} size="2x" />
          </IconContainer>
          <h1>The Memory Keeper</h1>
          <p>Welcome back to your private sanctuary</p>

        </IntroContainer>
        <p>fdgdfg</p>
        <p>fddfg</p>
      </FormContainer>
    </Container>
  )
}

export default LoginContainer