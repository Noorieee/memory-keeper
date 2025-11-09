import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import Input from '@/common/components/Input'
import { useState } from 'react'
import Button from '@/common/components/Button'
import FlexContainer from '@/common/components/FlexContainer'

const Container = styled(FlexContainer)(({ theme }) => {
  return `
      background-color: ${theme.colors.background.dark};
      height: 100vh;
    `
})

const FormContainer = styled(FlexContainer)(({ theme }) => {
  return `
      background-color: ${theme.colors.surface.main};
      color: ${theme.colors.primary.light};
      padding: ${theme.spacing.lg}px;
      border-radius: ${theme.radii.lg}px;
      border: 2px solid ${theme.colors.primary.main};
      max-width: 425px;
      height: fit-content;
      box-shadow: ${theme.shadows.md};
      margin: 0 ${theme.spacing.sm}px;
    `
})

const IconContainer = styled.div(({ theme }) => {
  return `
      padding: ${theme.spacing.sm}px;
      width: fit-content;
      height: fit-content;
      background-color: ${theme.colors.primary.main};
      border-radius: ${theme.radii.lg}px;
      color: ${theme.colors.primary.light};
    `
})

const Title = styled.h1(({ theme }) => {
  return `
      font-size: ${theme.fontSizes.lg}px;
      font-family: ${theme.fontFamilies.heading};
      font-style: italic;
    `
})

const Subtitle = styled.p(({ theme }) => {
  return `
      font-size: ${theme.fontSizes.sm}px;
    `
})

const Tagline = styled.p(({ theme }) => {
  return `
      text-align: center;
      font-size: ${theme.fontSizes.sm}px;
      font-family: ${theme.fontFamilies.heading};
      font-style: italic;
      width: 100%;
    `
})

const LoginContainer = () => {
  const [emailValue, setEmailValue] = useState<string>('')
  const [passwordValue, setPasswordValue] = useState<string>('')

  const handleEmailOnChange = (emailValue: string) => {
    setEmailValue(emailValue)
  }

  const handlePasswordOnChange = (passwordValue: string) => {
    setPasswordValue(passwordValue)
  }

  return (
    <Container justify="center" align="center">
      <FormContainer direction="column" gap="lg">
        <FlexContainer direction="column" gap="md" align="center">
          <IconContainer>
            <FontAwesomeIcon icon={faBook} size="2x" />
          </IconContainer>
          <Title>The Memory Keeper</Title>
          <Subtitle>Welcome back to your private sanctuary</Subtitle>
        </FlexContainer>
        <FlexContainer direction="column" gap="md">
          <Input
            icon={faEnvelope}
            label="Email"
            type="email"
            placeholder="your@email.com"
            value={emailValue}
            onChange={handleEmailOnChange}
          />
          <Input
            icon={faLock}
            label="Password"
            type="password"
            placeholder="••••••••"
            value={passwordValue}
            onChange={handlePasswordOnChange}
          />
        </FlexContainer>
        <Button
          size="md"
          onClick={() => {
            console.log('login')
          }}
        >
          Enter Your Journal
        </Button>
        <Tagline>Your memories are safe with us ♡</Tagline>
      </FormContainer>
    </Container>
  )
}

export default LoginContainer
