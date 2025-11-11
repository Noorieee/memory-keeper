import type { ColorKeys } from '@/theme'
import styled from '@emotion/styled'

const TextContainer = styled.div<{ color: ColorKeys; index: number }>(
  ({ theme, color, index }) => {
    const isEven = index % 2 !== 0

    return `
    background-color: color-mix(in oklab, ${theme.colors[color].main} 15%, transparent 50%);
    border: 2px solid ${theme.colors[color].main};
    padding: ${theme.spacing.lg}px;
    border-radius: ${theme.radii.md}px;
    margin-left: ${isEven ? `${theme.spacing.xl}px` : '0'};
  `
  },
)

const Text = styled.p(({ theme }) => {
  return `
    color: ${theme.colors.text.light};
    font-family: ${theme.fontFamilies.handWritten};
    font-size: ${theme.fontSizes.md}px;
    line-height: ${theme.lineHeights.xxl};
  `
})

interface TextBlockProps {
  children: string
  color: ColorKeys
  index: number
}

const TextBlock = ({ children, color, index }: TextBlockProps) => {
  return (
    <TextContainer color={color} index={index}>
      <Text>{children}</Text>
    </TextContainer>
  )
}

export default TextBlock
