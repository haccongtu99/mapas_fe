import { Flex, FlexProps, Title } from '@mantine/core'
import { FC } from 'react'
import classes from './HomeHeader.module.scss'

type THomeHeaderProps = {
  rightSection?: FlexProps['children']
  title: string
}

const HomeHeader: FC<THomeHeaderProps> = ({ rightSection, title }) => {
  return (
    <Flex justify="space-between" align="center" className={classes.header}>
      <Title>{title}</Title>
      {rightSection}
    </Flex>
  )
}

export default HomeHeader
