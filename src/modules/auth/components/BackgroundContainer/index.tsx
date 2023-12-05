import { LoginBackground } from '@/assets'
import { Box, ContainerProps } from '@mantine/core'
import classes from './BackgroundContainer.module.scss'

type TBackgroundContainerProps = {
  children: ContainerProps['children']
}

export const BackgroundContainer = ({
  children
}: TBackgroundContainerProps) => {
  return (
    <Box className={classes.container}>
      <img className={classes.background} src={LoginBackground} alt="login" />
      <div className={classes.content}>{children}</div>
    </Box>
  )
}
