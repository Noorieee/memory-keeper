import styled from "@emotion/styled";
import type { ChangeEvent } from "react";

const InputContainer = styled.div(({ theme }) => {
  return `
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: ${theme.spacing.sm}px;
    `;
});

const InputLabel = styled.label(({ theme }) => {
  return `
      color: ${theme.colors.primary.main};
      font-size: ${theme.fontSizes.sm}px;
    `;
});

const InputBox = styled.input(({ theme }) => {
  return `
      padding: ${theme.spacing.sm}px;
      border: 2px solid ${theme.colors.primary.main};
      border-radius: ${theme.radii.sm}px;
      background-color: ${theme.colors.surface.main};
      color: ${theme.colors.text.main};
    `;
});

interface InputProps {
  label: string
  placeholder: string
  value: string
  type: "email" | "password" | "text"
  onChange: (value: string) => void
}

const Input = ({label, type, placeholder, value, onChange}:InputProps) => {
  const handleOnChange = (event:ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }

  // const{label, placeholder, value, onChange}=props
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <InputBox type={type} placeholder={placeholder} value={value} onChange={handleOnChange}/>
    </InputContainer>
  )
}

export default Input