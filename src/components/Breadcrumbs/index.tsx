import { useNavigate, useLocation } from 'react-router-dom'
import { Anchor, Breadcrumbs as MantineBreadcrumbs } from '@mantine/core'
import { PROJECTS_ROUTES, ROOT_ROUTES } from '@/constants'
import clsx from 'clsx'
import classes from './Breadcrumbs.module.scss'

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

  const nestPathList = pathList
    .reduce(
      (prev, cur, index) => {
        prev.push(`${prev[index]}/${cur}`)
        return prev
      },
      ['']
    )
    .filter(t => t)

  const activeBreadcrumb = nestPathList[nestPathList.length - 1]
  const breadcrumb = nestPathList.map((path, index) => ({
    label: PATH_TITLE[pathList[index]] ?? pathList[index],
    path: path
  }))

  return { breadcrumb, activeBreadcrumb }
}

const Breadcrumb = () => {
  const navigate = useNavigate()
  const { breadcrumb, activeBreadcrumb } = useBreadcrumb()
  const onNavigate = (path: string) => {
    if (activeBreadcrumb === path) {
      return
    }
    navigate(`${path}`)
  }
  const listItems = breadcrumb.map((item, index) => {
    const activeAnchor = activeBreadcrumb === item.path

    return (
      <Anchor
        onClick={() => onNavigate(item.path)}
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
