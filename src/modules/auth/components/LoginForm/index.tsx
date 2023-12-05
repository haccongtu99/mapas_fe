import { MapasLogoComponent } from '@/assets'
import Button from '@/components/Button'
import { TextInput } from '@/components/TextInput'
import { ActionIcon, Flex, Stack, Stepper, Text, Title } from '@mantine/core'
import { IconCheck, IconLock, IconMailFilled } from '@tabler/icons-react'
import { useState } from 'react'
import classes from './LoginForm.module.scss'
import { useNavigate } from 'react-router-dom'
import { ROOT_ROUTES } from '@/constants'

const TOTAL_STEPS = 2

const LoginForm = () => {
  const navigate = useNavigate()
  const [active, setActive] = useState(1)
  const nextStep = () =>
    setActive(current => (current <= TOTAL_STEPS ? current + 1 : current))

  const handleOnSubmit = () => {
    // handle login logic here, run nextStep() after login successfully
    nextStep()
  }

  const onEnterHomePage = () => navigate(`/${ROOT_ROUTES.HOME}`)

  return (
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
            completedIcon={<span className={classes['completed-icon']}>1</span>}
          />

          <Stepper.Step
            completedIcon={<span className={classes['completed-icon']}>2</span>}
          >
            <Stack align="flex-end">
              <TextInput
                icon={<IconMailFilled size={24} />}
                type="text"
                placeholder="Email của bạn"
              />

              <TextInput
                type="password"
                icon={<IconLock size={24} />}
                placeholder="Mật khẩu của bạn"
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
  )
}

export default LoginForm
