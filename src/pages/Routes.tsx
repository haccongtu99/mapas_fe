import Layout from '@/components/Layout'
import { ROOT_ROUTES } from '@/constants/routesString'
import { lazyImport } from '@/utils/lazyImport'
import { createBrowserRouter } from 'react-router-dom'

const { HomePage } = lazyImport(() => import('@/pages/Home'), 'HomePage')
const { NotFoundPage } = lazyImport(
  () => import('@/pages/NotFound'),
  'NotFoundPage'
)

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        element: <HomePage />,
        path: ROOT_ROUTES.HOME
      },
      {
        element: <></>,
        path: ROOT_ROUTES.OVERVIEW
      },
      {
        element: null,
        path: ROOT_ROUTES.PROJECTS
      },
      {
        element: <></>,
        path: ROOT_ROUTES.USER
      }
    ]
  },
  { path: ROOT_ROUTES.NOT_FOUND, element: <NotFoundPage /> }
])
