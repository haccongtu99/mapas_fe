import { TProjectInfos, TProjectUpdate, TTempImageInfos } from '../types'

export const convertProject = (
  project: TProjectInfos | any,
  mode: 'create' | 'update' = 'create'
): TProjectUpdate | FormData => {
  const id = project._id ?? ''
  const formData = new FormData()
  if (mode === 'create') {
    const imagesFile = (project?.images as TTempImageInfos).file
    Object.keys(project).forEach((key: string) => {
      if (key === 'images') {
        for (let i = 0; i < imagesFile.length; i++) {
          formData.append(key, imagesFile[i] as File)
        }
      } else if (key === 'layout') {
        for (let i = 0; i < project?.layout.length; i++) {
          for (let j = 0; j < project?.layout[i].length; j++) {
            formData.append(`layout[${i}][${j}]`, project?.layout[i][j])
          }
        }
      } else {
        formData.append(key, project[key])
      }
    })
    return formData
  }
  const convertedProject = {
    id,
    client: project.client,
    // images: project.images ?? undefined,
    name: project.name,
    description: project.description
  } as TProjectUpdate

  return {
    ...convertedProject,
    id
  }
}
