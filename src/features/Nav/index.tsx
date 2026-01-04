import styled from '@emotion/styled'
import FlexContainer from '@/common/components/FlexContainer'
import {
  faArrowRightFromBracket,
  faBook,
  faCalendar,
  faHome,
} from '@fortawesome/free-solid-svg-icons'
import NavLink from './NavLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavContainer = styled.nav(({ theme }) => {
  return `
    background-color: ${theme.colors.surface.main};
    width: 330px;
    max-width: 330px;
    min-width: 330px;
    height: 100vh;
    border-right: 2px solid ${theme.colors.primary.dark};
    color: ${theme.colors.text.light};
    padding: ${theme.spacing.md}px;
  `
})

const NavContent = styled(FlexContainer)(() => {
  return `  
    height: 100%;
  `
})

const NavHeader = styled(FlexContainer)(({ theme }) => {
  return `
    padding: 0 ${theme.spacing.xxs}px ${theme.spacing.md}px ${theme.spacing.xxs}px;
    border-bottom: 1px solid ${theme.colors.primary.main};
  `
})

const NavHeading = styled.h2(({ theme }) => {
  return `
    font-family: ${theme.fontFamilies.heading};
    color: ${theme.colors.primary.light};
  `
})

const NavSlogan = styled.p(({ theme }) => {
  return `
    font-size: ${theme.fontSizes.xs}px;
    color: ${theme.colors.neutral.dark};
  `
})

const IconContainer = styled(FlexContainer)(({ theme }) => {
  return `
    padding: ${theme.spacing.sm}px;
    width: 40px;
    height: 40px;
    min-width: 40px;
    min-height: 40px;
    background-color: ${theme.colors.primary.light};
    border-radius: ${theme.radii.lg}px;
    color: ${theme.colors.primary.dark};
  `
})

const NavFooter = styled(FlexContainer)(({ theme }) => {
  return `
    padding-top: ${theme.spacing.md}px;
    border-top: 1px solid ${theme.colors.primary.main};
    margin-top: auto;
    font-size: ${theme.fontSizes.sm}px;
    text-decoration: none;
  `
})

const Nav = () => {
  return (
    <NavContainer>
      <NavContent direction="column">
        <NavHeader align="center">
          <IconContainer align="center" justify="center">
            <FontAwesomeIcon icon={faBook} size="1x" />
          </IconContainer>
          <FlexContainer direction="column" gap="xxs">
            <NavHeading>Memory Keeper</NavHeading>
            <NavSlogan>Your personal journal</NavSlogan>
          </FlexContainer>
        </NavHeader>

        <FlexContainer direction="column" align="flex-start" gap="xs">
          <NavLink
            to="/"
            icon={faHome}
            label="Home"
            iconColor="orange"
            iconBackgroundColor="orange"
          />
          <NavLink
            icon={faCalendar}
            label="Date Counter"
            iconColor="amber"
            iconBackgroundColor="amber"
          />
        </FlexContainer>

        <NavFooter align="center">
          <NavLink
            to="/login"
            icon={faArrowRightFromBracket}
            label="Logout"
            iconColor="pink"
            iconBackgroundColor="pink"
          />
        </NavFooter>
      </NavContent>
    </NavContainer>
  )
}

export default Nav
