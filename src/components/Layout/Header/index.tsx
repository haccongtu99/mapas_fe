import { AppShellHeader, Button, Flex, Input, Text } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'
import classes from './Header.module.scss'
import { AuthApi } from '@/modules/auth/services/api'
import { AppIcon } from '@/components/AppIcon'
import storage from '@/storage'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuthStores } from '@/stores/auth'

export const Header = () => {
  const authApi = new AuthApi()
  const navigate = useNavigate()
  const location = useLocation()
  const authStores = useAuthStores()

  const onLogout = async () => {
    const accessToken = storage.getToken()
    const refreshToken = storage.getRefreshToken()
    const config = {
      headers: { Authorization: `Bearer ${accessToken}` }
    }
    const data = await authApi.logout({ refreshToken }, config)
    if (data.message) {
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
          <Flex px={20} align="center">
            <Text>Chào Admin</Text>
            <AppIcon name="logout" onClick={onLogout} />
          </Flex>
        </Flex>
      </Flex>
    </AppShellHeader>
  )
}
