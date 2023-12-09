import { createFormContext } from '@mantine/form'
import { TProject } from '../types'

export const initialProjectFormValues: TProject = {
  name: 'Name 1',
  client: 'Name 2',
  description: 'Mô tả 1'
}

export const [
  ProjectCreateNewProvider,
  useProjectCreateNewFormContext,
  useProjectCreateNewForm
] = createFormContext<TProject>()

export const initialProjectInfosFormValues: TProject = {
  name: 'Name 1',
  client: 'Name 2',
  description: 'Mô tả 1'
}

export const [
  ProjectInfosProvider,
  useProjectDetailFormContext,
  useProjectInfosForm
] = createFormContext<TProject>()
