import { useEffect, useState } from 'react'
import { Box, Flex, Stack, Text } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { AppInput } from '@/components/AppInput'
import { AppUploadImage } from '@/components/AppUploadImage'
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
import { projectQueryService } from '@/modules/projects/services/hook'
import { AppLayout } from '@/components/AppLayout'

export const ProjectCreateForm = () => {
  const { t } = useTranslation()
  const { isSuccess, mutate } = projectQueryService.useCreateProject()
  const form = useProjectCreateNewForm({
    initialValues: { ...initialProjectFormValues },
    validate: {
      name: value => (!value ? t(translation.common.invalidValue) : null),
      client: value => (!value ? t(translation.common.invalidValue) : null),
      description: value => (!value ? t(translation.common.invalidValue) : null)
    }
  })

  const label = {
    title: t(translation.projects.title),
    client: t(translation.client.client),
    description: t(translation.common.description)
  }

  const [projectData, setProjectData] = useState<TProject>()

  const updateInput = (data: {
    field: keyof TProject
    value: string | number
  }) => {
    form.setValues({ [data.field]: data.value })
  }

  const updateProjectImages = (data: any) => {
    console.log(data, 'data...')
  }

  const updateProjectAvatar = (data: any) => {
    console.log(data, 'data....')
  }

  useEffect(() => {
    setProjectData(form.values as unknown as TProject)
  }, [form.values])

  useEffect(() => {
    if (isSuccess) {
      console.log('Create Update Product Success!')
    }
  }, [isSuccess])

  return (
    <ProjectCreateNewProvider form={form}>
      <form
        onSubmit={form.onSubmit(() => {
          mutate(projectData as TProject)
        })}
      >
        <Stack>
          <Flex align="center" justify="space-between">
            <Breadcrumb />
            <Flex>
              <Button type="submit" className={classes['btn__create-form']}>
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
              onChange={() => updateProjectAvatar}
            />
            <AppInput
              isImperative={true}
              title={label.title}
              field="name"
              placeholder={label.title}
              updateInput={updateInput}
              {...form.getInputProps('name')}
            />
            <AppInput
              isImperative={true}
              title={label.client}
              field="client"
              placeholder={label.client}
              updateInput={updateInput}
              {...form.getInputProps('client')}
            />
            <AppInput
              isImperative={true}
              typeInput="area"
              title={label.description}
              field="description"
              placeholder={label.description}
              updateInput={updateInput}
              {...form.getInputProps('description')}
            />
            <AppInput
              isImperative={true}
              typeInput="richArea"
              title={label.description}
              field="description"
              placeholder={label.description}
              updateInput={updateInput}
              {...form.getInputProps('description')}
            />
            <div style={{ marginTop: '20px' }}>
              <AppUploadImage
                title={t(translation.global.images)}
                onChange={() => updateProjectImages}
              />
            </div>
            <AppLayout />
          </Box>
        </Stack>
      </form>
    </ProjectCreateNewProvider>
  )
}

export const Component = ProjectCreateForm
