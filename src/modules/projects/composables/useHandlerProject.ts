import { projectQueryService } from '../services/hook'

const useHandlerProject = () => {
  const createProject = () => projectQueryService.useCreateProject()
  const updateProjectById = () => projectQueryService.useUpdateProject()
  const deleteProjectById = () => projectQueryService.useDeleteProject()

  return {
    createProject,
    updateProjectById,
    deleteProjectById
  }
}

export default useHandlerProject
