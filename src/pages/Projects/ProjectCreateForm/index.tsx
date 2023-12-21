import { useEffect, useState } from 'react'
import { Box, Flex, LoadingOverlay, Radio, Stack, Text } from '@mantine/core'
import { notifications } from '@mantine/notifications'
import { useTranslation } from 'react-i18next'
import AppInput from '@/components/AppInput'
import { AppUploadImage } from '@/components/AppUploadImage'
import { translation } from '@/configs/i18n/i18n'
import {
  ProjectCreateNewProvider,
  initialProjectFormValues,
  useProjectCreateNewForm
} from '@/modules/projects/services/form'
import { TProject, TTempImageInfos } from '@/modules/projects/types'
import Breadcrumb from '@/components/Breadcrumbs'
import classes from '../Projects.module.scss'
import Button from '@/components/Button'
import AppLayoutImages from '@/components/AppLayoutImages'
import useHandlerProject from '@/modules/projects/composables/useHandlerProject'
import { convertProject } from '@/modules/projects/composables/useConvertProject'

export const ProjectCreateForm = () => {
  const { t } = useTranslation()
  const { createProject } = useHandlerProject()
  const { isSuccess, mutate } = createProject()

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
  const [isLoadingCreateProject, setIsLoadingCreateProject] =
    useState<boolean>(false)
  const [layout, setLayout] = useState<string>('1')

  const updateInput = (data: {
    field: keyof TProject
    value: string | number
  }) => {
    form.setValues({ [data.field]: data.value })
  }

  const updateProjectAvatar = (data: TTempImageInfos) => {
    form.setValues({ avatar: data.file[0] })
  }

  const updateProjectImages = (data: TTempImageInfos) => {
    form.setValues({ images: data })
  }

  const onUpdateProjectImagesPath = (data: string[], index: number) => {
    const tempFiles = form.getInputProps('images').value
    tempFiles?.file?.splice(index, 1)
    form.setValues({ images: { file: tempFiles, url: data } })
  }

  const onCreateProject = () => {
    setIsLoadingCreateProject(true)
    mutate(convertProject(projectData) as any)
  }

  useEffect(() => {
    setProjectData(form.values as unknown as TProject)
  }, [form.values])

  useEffect(() => {
    if (isSuccess) {
      form.reset()
      setIsLoadingCreateProject(false)
      notifications.show({
        color: 'lime',
        message: t(translation.common.createProjectSuccess),
        style: { backgroundColor: '#12B886' },
        autoClose: 3000
      })
    }
  }, [isSuccess])

  return (
    <ProjectCreateNewProvider form={form}>
      <form
        onSubmit={form.onSubmit(() => onCreateProject())}
        style={{ width: '100%', height: '100%' }}
      >
        {isLoadingCreateProject ? (
          <Box
            pos="relative"
            style={{ width: '100%', height: 'calc(100vh - 120px)' }}
          >
            <LoadingOverlay
              visible={isLoadingCreateProject}
              overlayProps={{ radius: 'sm', blur: 0.1 }}
            />
          </Box>
        ) : (
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
                hasPreview={true}
                onChange={updateProjectAvatar}
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
                <AppLayoutImages
                  state={Number(layout)}
                  images={form.getInputProps('images').value?.url}
                  updateImages={onUpdateProjectImagesPath}
                />
              </div>
              <div style={{ marginTop: '20px' }}>
                <AppUploadImage
                  type="rectangle"
                  allowMultiUpload={true}
                  title={t(translation.global.images)}
                  onChange={updateProjectImages}
                >
                  <Radio.Group
                    value={layout}
                    onChange={setLayout}
                    classNames={{ root: classes.radio__group }}
                  >
                    <Radio value="1" label="Giao diện 1" color="gray" />
                    <Radio value="2" label="Giao diện 2" color="gray" />
                    <Radio value="3" label="Giao diện 3" color="gray" />
                  </Radio.Group>
                </AppUploadImage>
              </div>
            </Box>
          </Stack>
        )}
      </form>
    </ProjectCreateNewProvider>
  )
}

export const Component = ProjectCreateForm
