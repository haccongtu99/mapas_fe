import Layout from '@/components/Layout'
import { PROJECTS_ROUTES, ROOT_ROUTES } from '@/constants/routesString'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        lazy: () => import('./Home'),
        path: ROOT_ROUTES.HOME
      },
      {
        lazy: () => import('./Statistic'),
        path: ROOT_ROUTES.STATISTIC
      },
      {
        lazy: () => import('./Projects'),
        path: ROOT_ROUTES.PROJECTS,
        children: [
          {
            lazy: () => import('./Projects'),
            path: PROJECTS_ROUTES.CREATE
          }
        ]
      },
      {
        lazy: () => import('./Users'),
        path: ROOT_ROUTES.CLIENTS
      }
    ]
  },
  { path: ROOT_ROUTES.NOT_FOUND, lazy: () => import('./NotFound') }
])
