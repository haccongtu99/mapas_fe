import { ActionIcon, Box, Paper, Image } from '@mantine/core'
import classes from './ProjectMainCard.module.scss'
import { AppIcon } from '@/components/AppIcon'
import { ImageQuantityIcon } from '@/assets'

export const ProjectMainCard = ({ isCreateNew = false }: any) => {
  return (
    <Paper className={classes.container}>
      {isCreateNew ? (
        <Box>
          <ActionIcon size={128} color="#f5f5f5">
            <AppIcon name="add-fill" size={128} />
          </ActionIcon>
        </Box>
      ) : (
        <Box>
          <Image src={ImageQuantityIcon}></Image>
        </Box>
      )}
    </Paper>
  )
}
