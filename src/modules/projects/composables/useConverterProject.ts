import { TProjectInfos, TProjectUpdate } from '../types'

export const userConverterProject = (
  project: TProjectInfos
): TProjectUpdate => {
  const id = project._id as string
  const convertedProject = {
    id,
    client: project.client,
    images: project.images ?? undefined,
    name: project.name,
    description: project.description
  } as TProjectUpdate

  return {
    ...convertedProject,
    id
  }
}
