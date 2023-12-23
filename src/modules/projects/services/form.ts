import { createFormContext } from '@mantine/form'
import { TImageInfos, TProject, TProjectInfos } from '../types'
import { LAYOUT_CONFIGS } from '@/constants'

export const initialProjectFormValues: TProject = {
  name: '',
  client: '',
  description: '',
  layout: LAYOUT_CONFIGS.DEFAULT
}

export const [
  ProjectCreateNewProvider,
  useProjectCreateNewFormContext,
  useProjectCreateNewForm
] = createFormContext<TProject>()

export const initialProjectInfosFormValues: TProjectInfos = {
  name: '',
  client: '',
  description: '',
  avatar: { publicId: '', url: '' } as TImageInfos
}

export const [
  ProjectInfosProvider,
  useProjectDetailFormContext,
  useProjectInfosForm
] = createFormContext<TProjectInfos>()
