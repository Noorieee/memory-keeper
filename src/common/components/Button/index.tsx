import styled from '@emotion/styled'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledButton = styled.button<{
  size: Size
  variant: Variant
  block: boolean
}>(({ theme, size, variant, block }) => {
  const sizeMap: Record<Size, string> = {
    sm: `
        padding: ${theme.spacing.sm}px ${theme.spacing.sm}px;
        font-size: ${theme.fontSizes.xxs}px;
        line-height: 1.2;
        `,
    md: `
        padding: ${theme.spacing.sm}px ${theme.spacing.md}px;
        font-size: ${theme.fontSizes.xs}px;
        line-height: 1.4;
      `,
    lg: `
        padding: ${theme.spacing.md}px ${theme.spacing.lg}px;
        font-size: ${theme.fontSizes.sm}px;
        line-height: 1.2;
      `,
  }

  const variantMap: Record<Variant, string> = {
    solid: `
        background-color: ${theme.colors.violet.light};
        color: ${theme.colors.text.dark};
      `,
    outline: `
        background-color: transparent;
        color: ${theme.colors.text.dark};
        border: 1px solid ${theme.colors.primary.main};
      `,
    ghost: `
        background-color: transparent;
        color: ${theme.colors.primary.main};
      `,
  }

  return `
      border-radius: ${theme.radii.sm}px;
      border: none;
      ${sizeMap[size]};
      ${variantMap[variant]};
      cursor: pointer;
      font-weight: 500;
      width: ${block ? '100%' : 'fit-content'};
      display: ${block ? 'block' : 'initial'};
      &:hover {
        background-color: ${theme.colors.primary.main};
        color: ${theme.colors.text.light};
        transition: 0.2s ease;
      }
   `
})

interface IconProps {
  iconDefinition: IconDefinition
  position: 'left' | 'right'
}

type Size = 'sm' | 'md' | 'lg'
type Variant = 'solid' | 'outline' | 'ghost'

interface ButtonProps {
  children: string
  size?: Size
  icon?: IconProps
  disabled?: boolean
  variant?: Variant
  block?: boolean
  onClick: () => void
}

const Button = ({
  children,
  size = 'md',
  icon,
  disabled = false,
  variant = 'solid',
  block = true,
  onClick,
}: ButtonProps) => {
  return (
    <StyledButton
      size={size}
      block={block}
      disabled={disabled}
      variant={variant}
      onClick={onClick}
    >
      {icon && icon.position === 'left' ? (
        <FontAwesomeIcon icon={icon.iconDefinition} size="1x" />
      ) : null}
      {children}
      {icon && icon.position === 'right' ? (
        <FontAwesomeIcon icon={icon.iconDefinition} size="1x" />
      ) : null}
    </StyledButton>
  )
}

export default Button
