import { Box, Flex, Stack, Text } from '@mantine/core'
import { AppInput } from '@/components/AppInput'
import { AppUploadImage } from '@/components/AppUploadImage'
import { useTranslation } from 'react-i18next'
import { translation } from '@/configs/i18n/i18n'
import {
  ProjectInfosProvider,
  initialProjectInfosFormValues,
  useProjectInfosForm
} from '@/modules/projects/services/form'
import { TProject } from '@/modules/projects/types'
import Breadcrumb from '@/components/Breadcrumbs'
import classes from '../Projects.module.scss'
import Button from '@/components/Button'
import { useEffect, useState } from 'react'
import { AppIcon } from '@/components/AppIcon'
import useFetchProject from '@/modules/projects/composables/useFetchProject'

export const ProjectUpdateForm = () => {
  const { t } = useTranslation()
  const { projectInfos } = useFetchProject()
  const [projectData, setProjectData] = useState<TProject>()
  const label = {
    title: t(translation.projects.title),
    client: t(translation.client.client),
    description: t(translation.common.description)
  }
  const form = useProjectInfosForm({
    initialValues: { ...initialProjectInfosFormValues }
  })
  const updateInput = (data: {
    field: keyof TProject
    value: string | number
  }) => {
    form.setValues({
      [data.field]: data.value
    })
  }

  const onUpdateProject = () => {
    console.log('onUpdateProject...')
  }

  const onDeleteProject = () => {
    console.log('onDeleteProject...')
  }

  useEffect(() => {
    console.log(form.values, 'form.values...')
    setProjectData(form.values as unknown as TProject)
  }, [form.values])

  useEffect(() => {
    form.setValues({ ...projectInfos })
  }, [])

  return (
    <ProjectInfosProvider form={form}>
      <Stack>
        <Flex align="center" justify="space-between">
          <Breadcrumb />
          <Flex align="center" columnGap={10}>
            <Button
              className={classes['btn__create-form']}
              onClick={onUpdateProject}
            >
              <Text className={classes['text__create-form']}>
                Cập nhật dự án
              </Text>
            </Button>
            <div onClick={onDeleteProject}>
              <AppIcon name="delete-light" width={16} height={18} />
            </div>
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
            value={projectData?.name}
            placeholder="Tên"
            updateInput={updateInput}
          />
          <AppInput
            isImperative={true}
            title={label.client}
            value={projectData?.client}
            field="client"
            placeholder="Khách hàng"
            updateInput={updateInput}
          />
          <AppInput
            typeInput="area"
            title={label.description}
            field="description"
            value={projectData?.description}
            placeholder="Mô tả"
            updateInput={updateInput}
          />
          <AppUploadImage title={t(translation.global.images)} />
        </Box>
      </Stack>
    </ProjectInfosProvider>
  )
}

export const Component = ProjectUpdateForm
