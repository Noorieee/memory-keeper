import { createFileRoute } from '@tanstack/react-router'
import LoginContainer from '../../features/login/components/LoginContainer'

export const Route = createFileRoute('/login/')({
  component: LoginContainer,
})
