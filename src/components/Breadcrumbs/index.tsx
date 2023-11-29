import { useBreadcrumb } from '@/hook/useBreadcrumb'
import { Anchor, Breadcrumbs as MantineBreadcrumbs } from '@mantine/core'
import classes from './Breadcrumbs.module.scss'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

const Breadcrumb = () => {
  const { breadcrumb, activeBreadcrumb } = useBreadcrumb()
  const listItems = breadcrumb.map((item, index) => {
    const activeAnchor = activeBreadcrumb === item.path

    return (
      <Anchor
        key={index}
        classNames={{ root: clsx(activeAnchor && classes.active) }}
      >
        <Link to={`/${item.path}`} className={classes.label}>
          {item.label}
        </Link>
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
