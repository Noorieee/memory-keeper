import { Link } from '@tanstack/react-router'

const Nav = () => {
  return (
    <div>
      <Link to="/">
        Home
      </Link>{' '}
      <Link to="/login">
        Login
      </Link>
    </div>
  )
}

export default Nav