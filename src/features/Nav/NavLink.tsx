import FlexContainer from '@/common/components/FlexContainer'
import type { ColorKeys } from '@/theme'
import { Link } from '@tanstack/react-router'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons'

const Container = styled(FlexContainer)(({ theme }) => {
  return `
  padding: ${theme.spacing.sm}px;
  border-radius: ${theme.radii.md}px;
  transition: 0.2s ease;
  width: auto;

  &:hover {
    background-color: ${theme.colors.primary.dark};
  `
})

const LinkContainer = styled(FlexContainer)(({ theme }) => {
  return `
    font-size: ${theme.fontSizes.sm}px;
    color: ${theme.colors.neutral.light};
    text-decoration: none;
  `
})

const IconContainer = styled(FlexContainer)<{
  iconColor: ColorKeys
  iconBackgroundColor: ColorKeys
}>(({ theme, iconColor, iconBackgroundColor }) => {
  return `
      width: 35px;
      height: 35px;
      min-width: 35px;
      min-height: 35px;
      border-radius: ${theme.radii.lg}px;
      color: ${theme.colors[iconColor].light};
      background-color: color-mix(in oklab, ${theme.colors[iconBackgroundColor].main} 80%, transparent 10%);
    `
})

const ComingSoon = styled.p(
  ({ theme }) => `
  font-size: ${theme.fontSizes.xs}px;
  font-family: ${theme.fontFamilies.handWritten};
  color: ${theme.colors.neutral.main};
  opacity: 0.6;
`,
)

interface LinkProps {
  to: string
  icon: IconDefinition
  label: string
  iconColor: ColorKeys
  iconBackgroundColor: ColorKeys
}

const NavLink = ({
  to,
  icon,
  label,
  iconColor,
  iconBackgroundColor,
}: LinkProps) => {
  if (!to) {
    return (
      <Container align="center" gap="md">
        <IconContainer
          iconColor={iconColor}
          iconBackgroundColor={iconBackgroundColor}
          align="center"
          justify="center"
        >
          <FontAwesomeIcon icon={icon} size="1x" />
        </IconContainer>

        <FlexContainer direction="column" gap="xxs">
          <LinkContainer>{label}</LinkContainer>
          <ComingSoon>Coming soon...</ComingSoon>
        </FlexContainer>
      </Container>
    )
  }

  return (
    <Link to={to}>
      <Container align="center" gap="md">
        <IconContainer
          iconColor={iconColor}
          iconBackgroundColor={iconBackgroundColor}
          align="center"
          justify="center"
        >
          <FontAwesomeIcon icon={icon} size="1x" />
        </IconContainer>

        <LinkContainer>{label}</LinkContainer>
      </Container>
    </Link>
  )
}

export default NavLink
