import { useBreadcrumb } from '@/hook/useBreadcrumb'
import { Anchor, Breadcrumbs as MantineBreadcrumbs } from '@mantine/core'
import classes from './Breadcrumbs.module.scss'
import clsx from 'clsx'
import { useNavigate } from 'react-router-dom'

const Breadcrumb = () => {
  const navigate = useNavigate()
  const { breadcrumb, activeBreadcrumb } = useBreadcrumb()
  const listItems = breadcrumb.map((item, index) => {
    const activeAnchor = activeBreadcrumb === item.path

    return (
      <Anchor
        onClick={() => navigate(item.path)}
        key={index}
        classNames={{ root: clsx(activeAnchor && classes.active) }}
      >
        {item.label}
      </Anchor>
    )
  })

  return (
    <MantineBreadcrumbs
      classNames={{ root: classes.root, breadcrumb: clsx(classes.breadcrumb) }}
    >
      {listItems}
    </MantineBreadcrumbs>
  )
}

export default Breadcrumb
