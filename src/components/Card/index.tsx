import { TVariantProps } from '@/types/global'
import { CardProps, Card as MantineCard } from '@mantine/core'
import { FC } from 'react'
import classes from './Card.module.scss'

type TCardProps = CardProps & {
  variant?: TVariantProps | 'gradient'
}

const Card: FC<TCardProps> = ({ children, variant = 'default', ...props }) => {
  return (
    <MantineCard radius={30} classNames={{ root: classes[variant] }} {...props}>
      {children}
    </MantineCard>
  )
}

export default Card
