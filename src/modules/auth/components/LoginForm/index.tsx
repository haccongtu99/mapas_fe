import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { translation } from '@/configs/i18n/i18n'
import { IconCheck, IconLock, IconMailFilled } from '@tabler/icons-react'
import { ActionIcon, Flex, Stack, Stepper, Text, Title } from '@mantine/core'
import storage from '@/storage'
import { t } from 'i18next'
import { MapasLogoComponent } from '@/assets'
import {
  AuthProvider,
  initialAuthForm,
  useAuthForm
} from '@/modules/auth/services/form'
import { ROOT_ROUTES } from '@/constants'
import { TAuthLogin } from '@/modules/auth/types'
import { AuthApi } from '@/modules/auth/services/api'
import { useAuthStores } from '@/stores/auth'
import Button from '@/components/Button'
import { TextInput } from '@/components/TextInput'
import classes from './LoginForm.module.scss'
import { AxiosError } from 'axios'

const TOTAL_STEPS = 2

const LoginForm = () => {
  const authApi = new AuthApi()
  const navigate = useNavigate()
  const authStores = useAuthStores()
  const form = useAuthForm({
    initialValues: { ...initialAuthForm },
    validate: {
      email: value => (!value ? t(translation.common.invalidValue) : null),
      password: value => {
        if (!value) {
          return t(translation.common.invalidValue)
        }
        if (value.length < 3) {
          return t(translation.common.invalidLengthPassword)
        }
        return null
      }
    }
  })

  const [active, setActive] = useState(1)
  const [authForm, setAuthForm] = useState<TAuthLogin>()
  const nextStep = () =>
    setActive(current => (current <= TOTAL_STEPS ? current + 1 : current))

  const handleOnSubmit = async () => {
    try {
      const data = await authApi.login(authForm as TAuthLogin)
      if (data.accessToken) {
        authStores.setAuth({
          accessToken: data.accessToken,
          refreshToken: data.refreshToken,
          email: data.data.email
        })
        storage.setToken(data.accessToken)
        storage.setRefreshToken(data.refreshToken)
        nextStep()
      }
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        const { response } = error
        if (response?.data.status === 404) {
          form.setFieldError('email', t(translation.common.userNotExist))
        } else if (response?.data.status === 401) {
          form.setFieldError('password', t(translation.common.invalidPassword))
          console.log('Wrong password')
        }
      }
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
      <form
        onSubmit={form.onSubmit(() => handleOnSubmit())}
        style={{ width: '100%', height: '100%' }}
      >
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
            <Stepper
              active={active}
              onStepClick={setActive}
              classNames={classes}
            >
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
                    {...form.getInputProps('email')}
                    onChange={onUpdateAuthForm}
                  />
                  <TextInput
                    type="password"
                    name="password"
                    icon={<IconLock size={24} />}
                    placeholder="Mật khẩu của bạn"
                    {...form.getInputProps('password')}
                    onChange={onUpdateAuthForm}
                  />

                  <Button variant="outline" type="submit">
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
      </form>
    </AuthProvider>
  )
}

export default LoginForm
