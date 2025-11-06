import styled from '@emotion/styled'
import { type IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, type ChangeEvent } from 'react'

const InputContainer = styled.div(({ theme }) => {
  return `
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: ${theme.spacing.sm}px;
    `
})

const InputLabel = styled.label(({ theme }) => {
  return `
      color: ${theme.colors.text.light};
      font-size: ${theme.fontSizes.xs}px;
    `
})

const InputBoxContainer = styled.div<{ isFocused: boolean }>(
  ({ theme, isFocused }) => {
    return `
      padding: ${theme.spacing.sm}px;
      border: 2px solid ${isFocused ? theme.colors.primary.light : theme.colors.primary.main};
      border-radius: ${theme.radii.sm}px;
      display: flex;
      align-items: center;
      gap: ${theme.spacing.xs}px;
    `
  },
)

const InputBox = styled.input(({ theme }) => {
  return `
      border: none;
      color: ${theme.colors.text.light};
      background-color: transparent;
      width: 100%;

      &:focus {
        outline: none;
      }
    `
})

interface InputProps {
  label: string
  placeholder: string
  value: string
  type: 'email' | 'password' | 'text'
  icon?: IconDefinition
  onChange: (value: string) => void
}

const Input = ({
  label,
  type,
  placeholder,
  value,
  icon,
  onChange,
}: InputProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false)

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }

  const handleFocus = (isFocused: boolean) => {
    setIsFocused(isFocused)
  }

  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <InputBoxContainer isFocused={isFocused}>
        {icon ? <FontAwesomeIcon icon={icon} size="1x" /> : null}
        <InputBox
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleOnChange}
          onFocus={() => {
            handleFocus(true)
          }}
          onBlur={() => {
            handleFocus(false)
          }}
        />
      </InputBoxContainer>
    </InputContainer>
  )
}

export default Input
