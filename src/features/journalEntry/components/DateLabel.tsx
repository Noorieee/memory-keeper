import styled from '@emotion/styled'
import type { ColorKeys } from '../../../theme'

const Container = styled.p<{ accentColor: ColorKeys }>(
  ({ theme, accentColor }) => {
    return `
      font-size: ${theme.fontSizes.sm}px;
      background-color: ${theme.colors[accentColor].main};
    `
  },
)

interface DateLabelProps {
  children: string
  accentColor: ColorKeys
}

const DateLabel = ({ accentColor, children }: DateLabelProps) => {
  return <Container accentColor={accentColor}>{children}</Container>
}

export default DateLabel
