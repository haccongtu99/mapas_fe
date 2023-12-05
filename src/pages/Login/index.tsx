import { BackgroundContainer } from '@/modules/auth/components/BackgroundContainer'
import LoginForm from '@/modules/auth/components/LoginForm'

const LoginPage = () => {
  return (
    <BackgroundContainer>
      <LoginForm />
    </BackgroundContainer>
  )
}

export const Component = LoginPage
