import { useNavigate } from 'react-router-dom'
import { AppShellHeader, Button, Flex, Input, Text } from '@mantine/core'
import storage from '@/storage'
import { IconSearch } from '@tabler/icons-react'
import classes from './Header.module.scss'
import { AuthApi } from '@/modules/auth/services/api'
import AppIcon from '@/components/AppIcon'

export const Header = () => {
  const authApi = new AuthApi()
  const navigate = useNavigate()

  const onLogout = async () => {
    const refreshToken = storage.getRefreshToken()
    const data = await authApi.logout({ refreshToken })
    if (data?.message) {
      // navigate('/login', { state: { from: location }, replace: true });
      navigate('/login')
      storage.clearToken()
      storage.clearRefreshToken()
    }
  }
  return (
    <AppShellHeader>
      <Flex px={20} className={classes.container}>
        <Flex className={classes['left-section']}>
          <Input
            leftSection={<IconSearch size={20} color="black" />}
            leftSectionWidth={40}
            placeholder="Search"
            size="sm"
            classNames={{ input: classes.input }}
          />
          <Button
            color="gray.3"
            classNames={{ root: classes.button, label: classes.label }}
          >
            Tìm kiếm
          </Button>
          <Flex px={20} align="center" gap={20}>
            <Text fw={700} size="sm">
              Chào Admin!
            </Text>
            <AppIcon name="logout" onClick={onLogout} />
          </Flex>
        </Flex>
      </Flex>
    </AppShellHeader>
  )
}
