import { Outlet } from 'react-router-dom'
import { AppShell, AppShellMain, Box } from '@mantine/core'
import { Header } from './Header'
import { Sidebar } from './Sidebar'
import Breadcrumb from '../Breadcrumbs'
import classes from './Layout.module.scss'

const Layout = () => {
  return (
    <AppShell
      classNames={{
        header: classes.header,
        navbar: classes.navbar,
        main: classes.main
      }}
    >
      <Header />
      <Sidebar />
      <AppShellMain className={classes.container}>
        <Box className={classes.content}>
          {/* <Breadcrumb /> */}
          <Box className={classes['content__main']}>
            <Outlet />
          </Box>
        </Box>
      </AppShellMain>
    </AppShell>
  )
}

export default Layout
