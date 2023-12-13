import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'
import { translation } from '@/configs/i18n/i18n'
import { Box, Flex, Stack, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import {
  ProjectInfosProvider,
  initialProjectInfosFormValues,
  useProjectInfosForm
} from '@/modules/projects/services/form'
import { TProjectInfos } from '@/modules/projects/types'
import Modal from '@/components/Modal'
import Button from '@/components/Button'
import { AppInput } from '@/components/AppInput'
import { AppUploadImage } from '@/components/AppUploadImage'
import Breadcrumb from '@/components/Breadcrumbs'
import { AppIcon } from '@/components/AppIcon'
import useFetchProject from '@/modules/projects/composables/useFetchProject'
import useEditProject from '@/modules/projects/composables/useEditProject'
import { userConverterProject } from '@/modules/projects/composables/useConverterProject'
import classes from '../Projects.module.scss'

export const ProjectUpdateForm = () => {
  const { id } = useParams()
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [
    openedConfirmDeleteProjectModal,
    {
      open: openConfirmDeleteProjectModal,
      close: closeConfirmDeleteProjectModal
    }
  ] = useDisclosure(false)
  const [
    openedSuccessDeleteProjectModal,
    {
      open: openSuccessDeleteProjectModal,
      close: closeSuccessDeleteProjectModal
    }
  ] = useDisclosure(false)
  const { getProjectInfosById } = useFetchProject()
  const { updateProjectById, deleteProjectById } = useEditProject()

  const { data } = getProjectInfosById(id as string)

  const { mutate: mutateProjectInfos } = updateProjectById()
  const { mutate: mutateProjectDelete, isSuccess: isSuccessDeleteProject } =
    deleteProjectById()

  const [projectData, setProjectData] = useState<TProjectInfos>()
  const [isDeletedProject, setIsDeleteProject] = useState<boolean>()

  const label = {
    title: t(translation.projects.title),
    client: t(translation.client.client),
    description: t(translation.common.description)
  }
  const form = useProjectInfosForm({
    initialValues: { ...initialProjectInfosFormValues },
    validate: {
      name: value => (!value ? t(translation.common.invalidValue) : null),
      client: value => (!value ? t(translation.common.invalidValue) : null),
      description: value => (!value ? t(translation.common.invalidValue) : null)
    }
  })

  const updateInput = (data: {
    field: keyof TProjectInfos
    value: string | number | Record<string, unknown>
  }) => {
    form.setValues({
      [data.field]: data.value
    })
  }

  const onUpdateProject = () => {
    const convertedProject = userConverterProject(
      projectData as TProjectInfos
    ) as TProjectInfos
    mutateProjectInfos(convertedProject)
  }

  const onConfirmDeleteProject = () => {
    closeConfirmDeleteProjectModal()
    mutateProjectDelete(projectData?._id as string)
  }

  const onChangeProjectAvatar = () => {
    console.log('onChangeProjectAvatar...')
  }

  const onChangeProjectImages = () => {
    console.log('onChangeProjectImages...')
  }

  useEffect(() => {
    setProjectData(form.values as unknown as TProjectInfos)
  }, [form.values])

  useEffect(() => {
    if (data) {
      form.setValues({ ...data } as unknown as TProjectInfos)
    }
  }, [data])

  useEffect(() => {
    if (isSuccessDeleteProject) {
      openSuccessDeleteProjectModal()
      setIsDeleteProject(true)
    }
  }, [isSuccessDeleteProject])

  useEffect(() => {
    if (!openedSuccessDeleteProjectModal && isDeletedProject) {
      navigate('/projects')
    }
  }, [openedSuccessDeleteProjectModal])

  return (
    <ProjectInfosProvider form={form}>
      <form onSubmit={form.onSubmit(() => onUpdateProject())}>
        <Stack>
          <Flex align="center" justify="space-between">
            <Breadcrumb />
            <Flex align="center" columnGap={10}>
              <Button type="submit" className={classes['btn__create-form']}>
                <Text className={classes['text__create-form']}>
                  Cập nhật dự án
                </Text>
              </Button>
              <div
                style={{ display: 'flex', alignItems: 'center' }}
                onClick={openConfirmDeleteProjectModal}
              >
                <AppIcon name="delete-light" width={16} height={18} />
              </div>
            </Flex>
          </Flex>
          <Box className={classes.container__form}>
            {JSON.stringify(form.values)}
            <AppUploadImage
              title={t(translation.common.coverPhoto)}
              type="square"
              onChange={onChangeProjectAvatar}
            />
            <AppInput
              isImperative={true}
              title={label.title}
              field="name"
              placeholder="Tên"
              updateInput={updateInput}
              {...form.getInputProps('name')}
            />
            <AppInput
              isImperative={true}
              title={label.client}
              field="client"
              placeholder="Khách hàng"
              updateInput={updateInput}
              {...form.getInputProps('client')}
            />
            <AppInput
              isImperative={true}
              typeInput="area"
              title={label.description}
              field="description"
              placeholder="Mô tả"
              updateInput={updateInput}
              {...form.getInputProps('description')}
            />
            <div style={{ marginTop: '20px' }}>
              <AppUploadImage
                title={t(translation.global.images)}
                onChange={onChangeProjectImages}
              />
            </div>
          </Box>
        </Stack>
      </form>
      <Modal
        opened={openedConfirmDeleteProjectModal}
        onClose={closeConfirmDeleteProjectModal}
        size={500}
        title="Xoá dự án"
        className={classes.modal__body}
      >
        <Flex justify="space-between" gap={20} style={{ height: '60px' }}>
          <Button
            className={classes.btn__cancel}
            onClick={closeConfirmDeleteProjectModal}
          >
            Huỷ bỏ
          </Button>
          <Button
            className={classes.btn__success}
            onClick={onConfirmDeleteProject}
          >
            Đồng ý
          </Button>
        </Flex>
      </Modal>
      <Modal
        opened={openedSuccessDeleteProjectModal}
        onClose={closeSuccessDeleteProjectModal}
        size={700}
      >
        <Flex align="center" justify="center" direction="column">
          <AppIcon name="done" size={120} />
          <Text style={{ fontSize: '36px ' }} fw={700}>
            Xoá Thành Công
          </Text>
        </Flex>
      </Modal>
    </ProjectInfosProvider>
  )
}

export const Component = ProjectUpdateForm
