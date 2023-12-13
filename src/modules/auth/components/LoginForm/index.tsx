import { useEffect, useState } from 'react'
import { MapasLogoComponent } from '@/assets'
import Button from '@/components/Button'
import { TextInput } from '@/components/TextInput'
import { ActionIcon, Flex, Stack, Stepper, Text, Title } from '@mantine/core'
import { IconCheck, IconLock, IconMailFilled } from '@tabler/icons-react'
import { AuthProvider, initialAuthForm, useAuthForm } from '../../services/form'
import classes from './LoginForm.module.scss'
import { useNavigate } from 'react-router-dom'
import { ROOT_ROUTES } from '@/constants'
import { TAuthLogin } from '../../types'
import { AuthApi } from '../../services/api'
import storage from '@/storage'
import { useAuthStores } from '@/stores/auth'

const TOTAL_STEPS = 2

const LoginForm = () => {
  const authApi = new AuthApi()
  const navigate = useNavigate()
  const authStores = useAuthStores()
  const form = useAuthForm({
    initialValues: { ...initialAuthForm }
  })

  const [active, setActive] = useState(1)
  const [authForm, setAuthForm] = useState<TAuthLogin>()
  const nextStep = () =>
    setActive(current => (current <= TOTAL_STEPS ? current + 1 : current))

  const handleOnSubmit = async () => {
    const data = await authApi.login(authForm as TAuthLogin)
    if (data.accessToken) {
      authStores.setAuth({
        accessToken: data.accessToken as string,
        refreshToken: data.refreshToken as string,
        email: data.data.email as string
      })
      storage.setToken(data.accessToken)
      storage.setRefreshToken(data.refreshToken)
      nextStep()
    }
  }

  const onUpdateAuthForm = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = event.target
    form.setValues({
      [name]: value
    })
  }

  const onEnterHomePage = () => navigate(`/${ROOT_ROUTES.HOME}`)

  useEffect(() => {
    setAuthForm(form.values)
  }, [form.values])

  return (
    <AuthProvider form={form}>
      <Flex justify="center" align="center" gap={112}>
        <Stack className={classes['left-section']}>
          <MapasLogoComponent />
          <Title size="h6" c="white" className={classes.title}>
            Chào Mừng Admin!
          </Title>
          <Text c="white" className={classes.description}>
            Mapas chào đón bạn quay lại hệ thống quản trị.
          </Text>
        </Stack>

        <Stack className={classes['form-container']}>
          <Stepper active={active} onStepClick={setActive} classNames={classes}>
            <Stepper.Step
              completedIcon={
                <span className={classes['completed-icon']}>1</span>
              }
            />

            <Stepper.Step
              completedIcon={
                <span className={classes['completed-icon']}>2</span>
              }
            >
              <Stack align="flex-end">
                <TextInput
                  icon={<IconMailFilled size={24} />}
                  type="text"
                  name="email"
                  placeholder="Email của bạn"
                  onChange={onUpdateAuthForm}
                />

                <TextInput
                  type="password"
                  name="password"
                  icon={<IconLock size={24} />}
                  placeholder="Mật khẩu của bạn"
                  onChange={onUpdateAuthForm}
                />

                <Button variant="outline" onClick={handleOnSubmit}>
                  Tiếp tục
                </Button>
              </Stack>
            </Stepper.Step>

            <Stepper.Completed>
              <Stack gap={10} align="center">
                <ActionIcon classNames={{ root: classes['check-icon'] }}>
                  <IconCheck size={100} color="black" />
                </ActionIcon>
                <Title size={40} c="white">
                  Đăng nhập thành công
                </Title>
                <Text size="md" c="white">
                  Chúc bạn có một hành trình vui vẻ
                </Text>
                <Button variant="outline" onClick={onEnterHomePage}>
                  Quay lại trang chính
                </Button>
              </Stack>
            </Stepper.Completed>
          </Stepper>
        </Stack>
      </Flex>
    </AuthProvider>
  )
}

export default LoginForm
