import React, { FC, PropsWithChildren } from 'react'
import classes from './HomeLayout.module.scss'

type THomeLayoutProps = PropsWithChildren & {
  header?: React.ReactNode
}

const HomeLayout: FC<THomeLayoutProps> = ({ children, header }) => {
  return (
    <div className={classes.container}>
      {header}
      {children}
    </div>
  )
}

export default HomeLayout
