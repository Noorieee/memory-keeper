import styled from '@emotion/styled'
import type { Color, Colors } from '../../../theme'

const Container = styled.p<{accentColor: Colors}>(({ theme, accentColor }) => {
  return `
      font-size: ${theme.fontSizes.sm}px;
      background-color: ${theme.colors[accentColor]};
    `
})

interface DateLabelProps {
  children: string
  accentColor: string
  date: string
}

const DateLabel = ({ accentColor, date, children }: DateLabelProps) => {
  return (
    <Container accentColor={accentColor} date={date}>
      {children}
    </Container>
  )
}

export default DateLabel
