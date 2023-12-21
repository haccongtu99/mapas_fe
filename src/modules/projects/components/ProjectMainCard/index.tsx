import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ActionIcon, Box, Paper, Image, Text, Flex } from '@mantine/core'
import { LoginBackground } from '@/assets'
import AppIcon from '@/components/AppIcon'
import { TProjectInfos } from '@/modules/projects/types'
import classes from './ProjectMainCard.module.scss'

type TProjectMainCard = {
  isCreateNew?: boolean
  infos?: TProjectInfos
}

export const ProjectMainCard = ({
  isCreateNew = false,
  infos,
  ...props
}: TProjectMainCard) => {
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const [imageUrl, setImageUrl] = useState<string>(
    infos?.avatar?.url !== '' ? (infos?.avatar?.url as string) : LoginBackground
  )

  const navigate = useNavigate()

  const onEditProjects = () => {
    navigate(`/projects/edit/${infos?._id}`)
  }

  const onCreateNewProject = () => {
    navigate('/projects/create')
  }

  useEffect(() => {
    console.log(infos, 'infos....')
  }, [])

  return (
    <Paper className={classes.container}>
      {isCreateNew ? (
        <Box className={classes['container__create-new']}>
          <ActionIcon
            size={128}
            color="#f5f5f5"
            onClick={onCreateNewProject}
            variant="transparent"
          >
            <AppIcon name="add-fill" size={128} />
          </ActionIcon>
        </Box>
      ) : (
        <Box
          className={classes['container__card']}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image src={imageUrl} fit="cover" />
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
