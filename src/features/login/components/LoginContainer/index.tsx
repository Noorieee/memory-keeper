import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBook,
  faEnvelope,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import Input from "../../../../common/components/Input";
import { useState } from "react";
import Button from "../../../../common/components/Button";

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
      color: ${theme.colors.primary.main};
      padding: ${theme.spacing.lg}px;
      border-radius: ${theme.radii.lg}px;
      gap: ${theme.spacing.xl}px;
      border: 2px solid ${theme.colors.background.light};
      width: 100%;
      max-width: 425px;
      height: fit-content;
      box-shadow: ${theme.shadows.md};
      display: flex;
      flex-direction: column;
      margin: 0 ${theme.spacing.sm}px;
    `;
});

const IntroContainer = styled.div(({ theme }) => {
  return `
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: ${theme.spacing.md}px;
      text-align: center;
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

const Title = styled.h1(({ theme }) => {
  return `
      font-size: ${theme.fontSizes.lg}px;
      font-family: ${theme.fontFamilies.heading};
      font-style: italic;
    `;
});

const Subtitle = styled.p(({ theme }) => {
  return `
      font-size: ${theme.fontSizes.sm}px;
    `;
});

const InputsContainer = styled.div(({ theme }) => {
  return `
      display: flex;
      flex-direction: column;    
      gap: ${theme.spacing.lg}px;
    `;
});

const Tagline = styled.p(({ theme }) => {
  return `
      text-align: center;
      font-size: ${theme.fontSizes.sm}px;
      font-family: ${theme.fontFamilies.heading};
      font-style: italic;
    `;
});

const LoginContainer = () => {
  
  const [emailValue, setEmailValue] = useState<string>("")
  const [passwordValue, setPasswordValue] = useState<string>("")

  const handleEmailOnChange = (emailValue:string) => {
    setEmailValue(emailValue)
  }

  const handlePasswordOnChange = (passwordValue:string) => {
    setPasswordValue(passwordValue)
  }

  return (
    <Container>
      <FormContainer>
        <IntroContainer>
          <IconContainer>
            <FontAwesomeIcon icon={faBook} size="2x" />
          </IconContainer>
          <Title>The Memory Keeper</Title>
          <Subtitle>Welcome back to your private sanctuary</Subtitle>
        </IntroContainer>
        <InputsContainer>
          <Input
            icon={faEnvelope}
            label={"Email"}
            type={"email"}
            placeholder={"your@email.com"}
            value={emailValue}
            onChange={handleEmailOnChange}
          />
          <Input
            icon={faLock}
            label={"Password"}
            type={"password"}
            placeholder={"••••••••"}
            value={passwordValue}
            onChange={handlePasswordOnChange}
          />
          <Button onClick={() => {console.log("login")}} icon={{iconDefinition: faArrowRight, position: "right"}}>Login</Button>
        </InputsContainer>
        <Tagline>Your memories are safe with us ♡</Tagline>
      </FormContainer>
    </Container>
  );
};

export default LoginContainer;
