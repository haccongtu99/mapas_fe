import { MapasLogo } from '@/assets'
import { ROOT_ROUTES } from '@/constants'
import { ActionIcon, AppShellNavbar, Flex, NavLink, Stack } from '@mantine/core'
import { IconGridDots } from '@tabler/icons-react'
import clsx from 'clsx'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import classes from './Sidebar.module.scss'

import { IconHome, IconPlus } from '@tabler/icons-react'

export const navbarConfig = [
  {
    mainLink: { label: 'Tổng quan', path: '' },
    icon: <IconHome size={20} color="silver" />,
    subLink: [{ label: 'Thống kê phân tích', path: '/statistic' }]
  },
  {
    mainLink: { label: 'Tạo lập', path: '' },
    icon: <IconPlus size={20} color="silver" />,
    subLink: [
      { label: 'Dự án', path: '/projects' },
      { label: 'Khách hàng', path: '/clients' }
    ]
  }
]

export const Sidebar = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

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
