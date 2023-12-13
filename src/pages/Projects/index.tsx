import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Box, Stack, Text } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { translation } from '@/configs/i18n/i18n'
import { ProjectMainCard } from '@/modules/projects/components/ProjectMainCard'
import Breadcrumb from '@/components/Breadcrumbs'
import classes from './Projects.module.scss'
import useFetchProject from '@/modules/projects/composables/useFetchProject'

export const ProjectPage = () => {
  const { t } = useTranslation()
  const location = useLocation()
  const [isMainPage, setIsMainPage] = useState<boolean>(false)
  const { getAllProjects } = useFetchProject()
  const { data: projects, refetch } = getAllProjects()

  useEffect(() => {
    const isMainPage = location.pathname === '/projects'
    if (isMainPage) {
      refetch()
    }
    setIsMainPage(isMainPage)
  }, [location])

  return (
    <Box>
      {isMainPage ? (
        <Stack>
          <Breadcrumb />
          <Stack className={classes.container__form} gap={25}>
            <Text className={classes.container__title}>
              {t(translation.global.projects)}
            </Text>
            <Box className={classes.container}>
              <ProjectMainCard isCreateNew={true} />
              {projects?.map((item: any, index: number) => (
                <ProjectMainCard infos={item} key={index} />
              ))}
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
