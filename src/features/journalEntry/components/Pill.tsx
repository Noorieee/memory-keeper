import FlexContainer from '@/common/components/FlexContainer'
import { theme, type ColorKey, type ColorKeys, type Sizing } from '@/theme'
import styled from '@emotion/styled'
import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type PillSize = Omit<Sizing, 'lg'>

interface PillProps {
  children: string
  color: ColorKeys
  colorVariant: ColorKey
  size: keyof PillSize
  icon: IconProp
}

const fontColorMap: Record<ColorKeys, ColorKey> = {
  amber: 'dark',
  surface: 'light',

  // TODO: check that these should be light
  pink: 'light',
  sky: 'light',
  success: 'light',
  emerald: 'light',
  violet: 'light',
  orange: 'light',
  text: 'light',
  background: 'light',
  warning: 'light',
  primary: 'light',
  danger: 'light',
}

const sizeMap: Record<
  keyof PillSize,
  { fontSize: number; paddingy: number; paddingx: number; gap: number }
> = {
  sm: {
    fontSize: theme.fontSizes.xxs,
    paddingy: theme.spacing.xs,
    paddingx: theme.spacing.sm,
    gap: theme.spacing.xs,
  },
  md: {
    fontSize: theme.fontSizes.md,
    paddingy: theme.spacing.xs,
    paddingx: theme.spacing.sm,
    gap: theme.spacing.xs,
  },
}

const Container = styled(FlexContainer)<{
  color: ColorKeys
  colorVariant: ColorKey
  size: keyof PillSize
}>(({ theme, color, colorVariant, size }) => {
  return `
    width: fit-content;
    color: ${theme.colors.text.dark};
    background-color: ${theme.colors[color][colorVariant]};
    padding: ${theme.spacing.xs}px ${theme.spacing.sm}px;
    border-radius: ${theme.radii.lg}px;
    color: ${theme.colors.text[fontColorMap[color]]};
    font-size: ${sizeMap[size].fontSize}px;
    padding: ${sizeMap[size].paddingy}px ${sizeMap[size].paddingx}px;
    gap: ${sizeMap[size].gap}px;
  `
})

const Label = styled.p<{ size: keyof PillSize }>(({ theme, size }) => {
  return `
    font-size: ${sizeMap[size].fontSize}px;
  `
})

const Pill = ({ children, color, colorVariant, size, icon }: PillProps) => {
  return (
    <Container
      color={color}
      colorVariant={colorVariant}
      size={size}
      gap="xxs"
      align="center"
    >
      <FontAwesomeIcon icon={icon} size="1x" />
      <Label size={size}>{children}</Label>
    </Container>
  )
}

export default Pill
