import { PROJECTS_ROUTES, ROOT_ROUTES } from '@/constants'
import { useLocation } from 'react-router-dom'

const PATH_TITLE = {
  [ROOT_ROUTES.STATISTIC]: 'Thống kê phân tích',
  [ROOT_ROUTES.PROJECTS]: 'Dự án',
  [ROOT_ROUTES.CLIENTS]: 'Khách hàng',
  [PROJECTS_ROUTES.CREATE]: 'Thêm dự án'
}

export const useBreadcrumb = () => {
  const { pathname } = useLocation()
  const pathList = pathname.split('/').filter(t => t)
  const activeBreadcrumb = pathList[pathList.length - 1]

  const breadcrumb = pathList.map(path => ({
    label: PATH_TITLE[path],
    path: path
  }))

  return { breadcrumb, activeBreadcrumb: activeBreadcrumb }
}
