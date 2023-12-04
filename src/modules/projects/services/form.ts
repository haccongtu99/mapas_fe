import { createFormContext } from '@mantine/form'

export const initialCustomerFormValues = {
  dataForm: []
}

interface TProductCreateNewForm {
  dataForm: Record<string, any>
}

export const [
  ProjectCreateNewProvider,
  useProjectCreateNewFormContext,
  useProjectCreateNewForm
] = createFormContext<TProductCreateNewForm>()
