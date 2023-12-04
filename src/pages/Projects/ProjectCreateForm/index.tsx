import { AppInput } from '@/components/AppInput'
import { AppUploadImage } from '@/components/AppUploadImage'
import { Box, Stack } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { translation } from '@/configs/i18n/i18n'
import {
  ProjectCreateNewProvider,
  useProjectCreateNewForm
} from '@/modules/projects/services/form'
import { TProject } from '@/modules/projects/types'

export const ProjectCreateForm = () => {
  const { t } = useTranslation()
  const label = {
    title: t(translation.projects.title),
    client: t(translation.client.client),
    description: t(translation.common.description)
  }
  const form = useProjectCreateNewForm({
    initialValues: {
      dataForm: []
    }
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

  return (
    <Stack>
      <ProjectCreateNewProvider form={form}>
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
      </ProjectCreateNewProvider>
    </Stack>
  )
}

export const Component = ProjectCreateForm
