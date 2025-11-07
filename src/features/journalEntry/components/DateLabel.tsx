import styled from '@emotion/styled'
import type { ColorKeys } from '../../../theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'

const Container = styled.p<{ accentColor: ColorKeys }>(
  ({ theme, accentColor }) => {
    return `
      width: fit-content;
      font-size: ${theme.fontSizes.sm}px;
      color: ${theme.colors.text.dark};
      background-color: ${theme.colors[accentColor].main};
      padding: ${theme.spacing.xs}px ${theme.spacing.sm}px;
      border-radius: ${theme.spacing.lg}px; 
      display: flex;
      align-items: center;
      gap: ${theme.spacing.xxs}px;
    `
  },
)

interface DateLabelProps {
  children: string
  accentColor: ColorKeys
}

const DateLabel = ({ accentColor, children }: DateLabelProps) => {
  return (
    <Container accentColor={accentColor}>
      <FontAwesomeIcon icon={faCalendar} size="1x" />
      {children}
    </Container>
  )
}

export default DateLabel
