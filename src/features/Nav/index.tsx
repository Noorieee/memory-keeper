import { Link } from '@tanstack/react-router'
import styled from '@emotion/styled'
import FlexContainer from '@/common/components/FlexContainer'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import NavLink from './NavLink'

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

const Nav = () => {
  return (
    <NavContainer>
      <FlexContainer direction="column" align="flex-start" gap="xl">
        {/* <Link to="/">
          <FlexContainer align="center">
            <IconContainer align="center" justify="center">
              <FontAwesomeIcon icon={faHeart} size="1x" />
            </IconContainer>
            <LinkContainer>Login</LinkContainer>
          </FlexContainer>
        </Link> */}
        <NavLink
          to={'/'}
          icon={faHeart}
          label={'Home'}
          iconColor={'amber'}
          iconBackgroundColor={'primary'}
        />
        <NavLink
          to={''}
          icon={faHeart}
          label={'Date Counter'}
          iconColor={'amber'}
          iconBackgroundColor={'primary'}
        />
        {/* <Link to="/login">
          <FlexContainer align="center">
            <IconContainer align="center" justify="center">
              <FontAwesomeIcon icon={faHeart} size="1x" />
            </IconContainer>
            <LinkContainer>Login</LinkContainer>
          </FlexContainer>
        </Link> */}
      </FlexContainer>
    </NavContainer>
  )
}

export default Nav
