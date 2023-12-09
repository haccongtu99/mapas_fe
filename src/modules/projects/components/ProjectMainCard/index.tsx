import { useState } from 'react'
import { ActionIcon, Box, Paper, Image, Text, Flex } from '@mantine/core'
import { AppIcon } from '@/components/AppIcon'
import { ImageQuantityIcon } from '@/assets'
import classes from './ProjectMainCard.module.scss'
import { useNavigate } from 'react-router-dom'

export const ProjectMainCard = ({ isCreateNew = false }: any) => {
  const [isHovered, setIsHovered] = useState<boolean>(false)

  const navigate = useNavigate()

  const onEditProjects = () => {
    console.log('onEditProjects...')
    navigate(`/projects/edit/${123}`)
  }

  const onCreateNewProject = () => {
    console.log('onCreateNewProject...')
    navigate('/projects/create')
  }

  return (
    <Paper className={classes.container}>
      {isCreateNew ? (
        <Box className={classes['container__create-new']}>
          <ActionIcon size={128} color="#f5f5f5" onClick={onCreateNewProject}>
            <AppIcon name="add-fill" size={128} />
          </ActionIcon>
        </Box>
      ) : (
        <Box
          className={classes['container__card']}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image src={ImageQuantityIcon} />
          {isHovered && (
            <div onClick={onEditProjects}>
              <Flex
                direction={'column'}
                align={'center'}
                justify={'center'}
                className={classes['edit-icon']}
              >
                <AppIcon name="edit-light" size={40} color="#FFFFFF" />
                <Text c="#FFFFFF" className={classes['edit-icon__text']}>
                  Chỉnh
                </Text>
              </Flex>
            </div>
          )}
        </Box>
      )}
    </Paper>
  )
}
