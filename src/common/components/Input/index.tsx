import styled from "@emotion/styled";
import { type IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, type ChangeEvent } from "react";

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

const InputBoxContainer = styled.div<{isFocused: boolean}>(({ theme, isFocused }) => {
  return `
      padding: ${theme.spacing.sm}px;
      border: 2px solid ${isFocused ? theme.colors.primary.main : theme.colors.background.light};
      border-radius: ${theme.radii.sm}px;
      display: flex;
      align-items: center;
      gap: ${theme.spacing.xs}px;
    `;
});


const InputBox = styled.input(({ theme }) => {
  return `
      border: none;
      color: ${theme.colors.primary.main};
      background-color: transparent;
      width: 100%;

      &:focus {
        outline: none;
      }
    `;
});

interface InputProps {
  label: string
  placeholder: string
  value: string
  type: "email" | "password" | "text"
  icon?: IconDefinition
  onChange: (value: string) => void
}

const Input = ({label, type, placeholder, value, icon, onChange}:InputProps) => {

  const [focus, setFocus] = useState<boolean>(false)

  const handleOnChange = (event:ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }

  const handleOnFocus = () => {
    setFocus(true)
  }

  const handleOnBlur = () => {
    setFocus(false)
  }

  return (
    
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <InputBoxContainer isFocused={focus}>
        {icon ? <FontAwesomeIcon icon={icon} size="1x" /> : null } 
        <InputBox type={type} placeholder={placeholder} value={value} onChange={handleOnChange} onFocus={() => {handleOnFocus()}} onBlur={() => {handleOnBlur()}}/>
      </InputBoxContainer>
    </InputContainer>
  )
}

export default Input