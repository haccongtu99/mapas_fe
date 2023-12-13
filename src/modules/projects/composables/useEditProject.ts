import { projectQueryService } from '../services/hook'

const useEditProject = () => {
  const updateProjectById = () => projectQueryService.useUpdateProject()
  const deleteProjectById = () => projectQueryService.useDeleteProject()

  return {
    updateProjectById,
    deleteProjectById
  }
}

export default useEditProject
