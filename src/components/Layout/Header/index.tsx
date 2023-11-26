import { MapasLogo } from '@/assets'
import MenuIcon from '@/assets/svg/icon/MenuIcon'
import { translation } from '@/configs/i18n/i18n'
import { ROOT_ROUTES } from '@/constants'
import { ActionIcon, Flex, Input, Menu } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'
import classes from './Header.module.scss'

const Header = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <div className={classes.container}>
      <Flex gap={20}>
        <img
          src={MapasLogo}
          alt="logo"
          onClick={() => navigate(ROOT_ROUTES.HOME)}
          className={classes.image}
        />
        <Input
          leftSection={<IconSearch size={20} color="black" />}
          leftSectionWidth={40}
          placeholder="Search"
          size="sm"
          classNames={{ input: classes.input }}
        />
      </Flex>

      <Menu
        shadow="md"
        width={150}
        position="bottom-end"
        withinPortal
        offset={18}
      >
        <Menu.Target>
          <ActionIcon variant="white" className={classes.menu}>
            <MenuIcon />
          </ActionIcon>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item>
            <Link to={ROOT_ROUTES.HOME}>{t(translation.global.home)}</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to={ROOT_ROUTES.PROJECTS}>
              {t(translation.global.projects)}
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to={`/${ROOT_ROUTES.OVERVIEW}`}>
              {t(translation.global.services)}
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to={ROOT_ROUTES.BLOG}>{t(translation.global.blog)}</Link>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  )
}

export default Header
