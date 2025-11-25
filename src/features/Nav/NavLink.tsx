import FlexContainer from '@/common/components/FlexContainer'
import type { ColorKeys } from '@/theme'
import { Link } from '@tanstack/react-router'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons'

const LinkContainer = styled.p(({ theme }) => {
  return `
    font-size: ${theme.fontSizes.sm}px;
    color: white;
    text-decoration: none;
  `
})

const IconContainer = styled(FlexContainer)<{
  iconColor: ColorKeys
  iconBackgroundColor: ColorKeys
}>(({ theme, iconColor, iconBackgroundColor }) => {
  return `
      width: 40px;
      height: 40px;
      min-width: 40px;
      min-height: 40px;
      border-radius: ${theme.radii.lg}px;
      color: ${theme.colors[iconColor].light};
      background-color: ${theme.colors[iconBackgroundColor].main};
    `
})

const ComingSoon = styled.p(
  ({ theme }) => `
  font-size: ${theme.fontSizes.xs}px;
  font-family: ${theme.fontFamilies.handWritten};
  color: ${theme.colors.neutral.main};
  opacity: .6;
  margin: 0;
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
      <FlexContainer align="center">
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
      </FlexContainer>
    )
  }

  return (
    <Link to={to}>
      <FlexContainer align="center">
        <IconContainer
          iconColor={iconColor}
          iconBackgroundColor={iconBackgroundColor}
          align="center"
          justify="center"
        >
          <FontAwesomeIcon icon={icon} size="1x" />
        </IconContainer>

        <LinkContainer>{label}</LinkContainer>
      </FlexContainer>
    </Link>
  )
}

export default NavLink
