import { Anchor, Breadcrumbs as MantineBreadcrumbs } from '@mantine/core'
import clsx from 'clsx'
import { useNavigate } from 'react-router-dom'
import classes from './Breadcrumbs.module.scss'

import { PROJECTS_ROUTES, ROOT_ROUTES } from '@/constants'
import { useLocation } from 'react-router-dom'

const PATH_TITLE = {
  [ROOT_ROUTES.STATISTIC]: 'Thống kê phân tích',
  [ROOT_ROUTES.PROJECTS]: 'Dự án',
  [ROOT_ROUTES.CLIENTS]: 'Khách hàng',
  [PROJECTS_ROUTES.CREATE]: 'Thêm dự án',
  [PROJECTS_ROUTES.EDIT]: 'Cập nhật dự án'
}

const useBreadcrumb = () => {
  const { pathname } = useLocation()
  const pathList = pathname.split('/').filter(t => t)
  const activeBreadcrumb = pathList[pathList.length - 1]

  const breadcrumb = pathList.map(path => ({
    label: PATH_TITLE[path],
    path: path
  }))

  return { breadcrumb, activeBreadcrumb }
}

const Breadcrumb = () => {
  const navigate = useNavigate()
  const { breadcrumb, activeBreadcrumb } = useBreadcrumb()
  const listItems = breadcrumb.map((item, index) => {
    const activeAnchor = activeBreadcrumb === item.path

    return (
      <Anchor
        onClick={() => navigate(`/${item.path}`)}
        key={index}
        classNames={{ root: clsx(activeAnchor && classes.active) }}
      >
        {item.label}
      </Anchor>
    )
  })

  return (
    <MantineBreadcrumbs
      classNames={{
        root: classes.root,
        breadcrumb: clsx(classes.breadcrumb)
      }}
    >
      {listItems}
    </MantineBreadcrumbs>
  )
}

export default Breadcrumb
