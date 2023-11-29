import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { AppShell, AppShellMain, Box } from '@mantine/core'
import classes from './Layout.module.scss'
import { Sidebar } from './Sidebar'
import Breadcrumb from '../Breadcrumbs'

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
      <AppShellMain>
        <Box p={40} bg="silver">
          <Breadcrumb />
          <Outlet />
        </Box>
      </AppShellMain>
    </AppShell>
  )
}

export default Layout
