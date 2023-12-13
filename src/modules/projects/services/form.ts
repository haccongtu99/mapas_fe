import { createFormContext } from '@mantine/form'
import { TImageInfos, TProject, TProjectInfos } from '../types'

export const initialProjectFormValues: TProject = {
  name: '',
  client: '',
  description: ''
}

export const [
  ProjectCreateNewProvider,
  useProjectCreateNewFormContext,
  useProjectCreateNewForm
] = createFormContext<TProject>()

export const initialProjectInfosFormValues: TProjectInfos = {
  name: 'Name 1',
  client: 'Name 2',
  description: 'Mô tả 1',
  avatar: { publicId: '', url: '' } as TImageInfos
}

export const [
  ProjectInfosProvider,
  useProjectDetailFormContext,
  useProjectInfosForm
] = createFormContext<TProjectInfos>()
