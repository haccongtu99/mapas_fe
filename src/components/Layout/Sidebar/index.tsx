import { MapasLogo } from '@/assets'
import { ROOT_ROUTES } from '@/constants'
import { navbarConfig } from '@/constants/navbar'
import { ActionIcon, AppShellNavbar, Flex, NavLink, Stack } from '@mantine/core'
import { IconGridDots } from '@tabler/icons-react'
import { useLocation, useNavigate } from 'react-router-dom'
import classes from './Sidebar.module.scss'
import clsx from 'clsx'
import { useEffect } from 'react'

export const Sidebar = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  useEffect(() => {
    console.log(navbarConfig, 'navbarConfig...')
  }, [])

  return (
    <AppShellNavbar>
      <Stack className={classes.container}>
        <Flex className={classes['sidebar-title']}>
          <img
            src={MapasLogo}
            alt="logo"
            onClick={() => navigate(ROOT_ROUTES.HOME)}
            className={classes.image}
          />
          <ActionIcon variant="white" color="dark" size={24}>
            <IconGridDots />
          </ActionIcon>
        </Flex>
        {navbarConfig.map(({ mainLink, subLink, icon }, index) => (
          <NavLink
            label={mainLink.label}
            leftSection={icon}
            classNames={{
              root: classes.root,
              body: classes.body,
              children: classes.children
            }}
            key={index}
          >
            {subLink.map(({ label, path }, index) => (
              <NavLink
                key={index}
                label={label}
                onClick={() => navigate(path)}
                classNames={{
                  root: clsx(
                    classes['sub-root'],
                    pathname.includes(path) && classes.active
                  )
                }}
              ></NavLink>
            ))}
          </NavLink>
        ))}
      </Stack>
    </AppShellNavbar>
  )
}
