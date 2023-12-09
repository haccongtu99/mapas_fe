import { Box, Stack, Text } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { translation } from '@/configs/i18n/i18n'
import { ProjectMainCard } from '@/modules/projects/components/ProjectMainCard'
import classes from './Projects.module.scss'
import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Breadcrumb from '@/components/Breadcrumbs'

export const ProjectPage = () => {
  const { t } = useTranslation()
  const location = useLocation()
  const [isMainPage, setIsMainPage] = useState<boolean>(false)

  useEffect(() => {
    setIsMainPage(location.pathname === '/projects')
  }, [location])

  return (
    <Box>
      {isMainPage ? (
        <Stack>
          <Breadcrumb />
          <Stack className={classes.container__form}>
            <Text>{t(translation.global.projects)}</Text>
            <Box className={classes.container}>
              <ProjectMainCard isCreateNew="true"></ProjectMainCard>
              <ProjectMainCard></ProjectMainCard>
              <ProjectMainCard></ProjectMainCard>
              <ProjectMainCard></ProjectMainCard>
              <ProjectMainCard></ProjectMainCard>
            </Box>
          </Stack>
        </Stack>
      ) : (
        <Outlet />
      )}
    </Box>
  )
}

export const Component = ProjectPage
