import { createBrowserRouter } from 'react-router-dom'
import Layout from '@/components/Layout'
import { PROJECTS_ROUTES, ROOT_ROUTES } from '@/constants/routesString'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        lazy: () => import('../pages/Home'),
        path: ROOT_ROUTES.HOME
      },
      {
        lazy: () => import('../pages/Statistic'),
        path: ROOT_ROUTES.STATISTIC
      },
      {
        lazy: () => import('../pages/Projects'),
        path: ROOT_ROUTES.PROJECTS,
        children: [
          {
            lazy: () => import('../pages/Projects/ProjectCreateForm'),
            path: PROJECTS_ROUTES.CREATE
          },
          {
            lazy: () => import('../pages/Projects/ProjectEditForm'),
            path: PROJECTS_ROUTES.EDIT
          }
        ]
      },
      {
        lazy: () => import('../pages/Users'),
        path: ROOT_ROUTES.CLIENTS
      }
    ]
  },
  { path: ROOT_ROUTES.NOT_FOUND, lazy: () => import('../pages/NotFound') }
])
