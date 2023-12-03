import { Box, Stack, Text } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { translation } from '@/configs/i18n/i18n'
import { ProjectMainCard } from '@/modules/projects/components/ProjectMainCard'
import classes from './Projects.module.scss'

export const ProjectPage = () => {
  const { t } = useTranslation()
  return (
    <Box>
      <Stack>
        <Text>{t(translation.global.projects)}</Text>
        <Box className={classes.container}>
          <ProjectMainCard isCreateNew="true"></ProjectMainCard>
          <ProjectMainCard></ProjectMainCard>
          <ProjectMainCard></ProjectMainCard>
          <ProjectMainCard></ProjectMainCard>
          <ProjectMainCard></ProjectMainCard>
        </Box>
      </Stack>
    </Box>
  )
}

export const Component = ProjectPage
