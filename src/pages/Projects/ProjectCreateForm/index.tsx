import { Box, Flex, Stack, Text } from '@mantine/core'
import { AppInput } from '@/components/AppInput'
import { AppUploadImage } from '@/components/AppUploadImage'
import { useTranslation } from 'react-i18next'
import { translation } from '@/configs/i18n/i18n'
import {
  ProjectCreateNewProvider,
  initialProjectFormValues,
  useProjectCreateNewForm
} from '@/modules/projects/services/form'
import { TProject } from '@/modules/projects/types'
import Breadcrumb from '@/components/Breadcrumbs'
import classes from '../Projects.module.scss'
import Button from '@/components/Button'
import { useEffect, useState } from 'react'

export const ProjectCreateForm = () => {
  const { t } = useTranslation()
  const [projectData, setProjectData] = useState<TProject>()
  const label = {
    title: t(translation.projects.title),
    client: t(translation.client.client),
    description: t(translation.common.description)
  }
  const form = useProjectCreateNewForm({
    initialValues: { ...initialProjectFormValues }
  })
  const updateInput = (data: {
    field: keyof TProject
    value: string | number
  }) => {
    console.log(data, 'updateInput....')
    form.setValues({
      [data.field]: data.value
    })
  }

  const onCreateNewProject = () => {
    console.log(projectData, 'projectData...')
  }

  useEffect(() => {
    console.log(form.values, 'form.values.dataForm...')
    setProjectData(form.values as unknown as TProject)
  }, [form.values])

  return (
    <ProjectCreateNewProvider form={form}>
      <Stack>
        <Flex align="center" justify="space-between">
          <Breadcrumb />
          <Flex>
            <Button
              className={classes['btn__create-form']}
              onClick={onCreateNewProject}
            >
              <Text className={classes['text__create-form']}>
                Tạo dự án mới
              </Text>
            </Button>
          </Flex>
        </Flex>
        <Box className={classes.container__form}>
          {JSON.stringify(form.values)}
          <AppUploadImage
            title={t(translation.common.coverPhoto)}
            type="square"
          />
          <AppInput
            isImperative={true}
            title={label.title}
            field="name"
            placeholder="test"
            updateInput={updateInput}
          />
          <AppInput
            isImperative={true}
            title={label.client}
            field="client"
            placeholder="test"
            updateInput={updateInput}
          />
          <AppInput
            typeInput="area"
            title={label.description}
            field="description"
            placeholder="test"
            updateInput={updateInput}
          />
          <AppUploadImage title={t(translation.global.images)} />
        </Box>
      </Stack>
    </ProjectCreateNewProvider>
  )
}

export const Component = ProjectCreateForm
