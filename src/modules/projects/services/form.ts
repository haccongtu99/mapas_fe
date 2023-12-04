import { createFormContext } from '@mantine/form'
import { TProject } from '../types'

export const initialProjectFormValues: TProject = {
  name: '',
  client: '',
  images: []
}

export const [
  ProjectCreateNewProvider,
  useProjectCreateNewFormContext,
  useProjectCreateNewForm
] = createFormContext<TProject>()

export const initialProjectDetailsFormValues: TProject = {
  name: '',
  client: '',
  images: []
}

export const [
  ProjectDetailsProvider,
  userProjectDetailFormContext,
  useProjectDetailForm
] = createFormContext<TProject>()
