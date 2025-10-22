import styled from "@emotion/styled";
import type { ChangeEvent } from "react";

const InputContainer = styled.div(({ theme }) => {
  return `
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: ${theme.colors.primary.main};
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
      <label>{label}</label>
      <input type={type} placeholder={placeholder} value={value} onChange={handleOnChange}/>
    </InputContainer>
  )
}

export default Input