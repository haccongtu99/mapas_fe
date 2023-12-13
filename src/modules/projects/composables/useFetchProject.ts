import { projectQueryService } from '../services/hook'

const useFetchProject = () => {
  const getAllProjects = () => projectQueryService.useGetAllProjects()
  const getProjectInfosById = (id: string) =>
    projectQueryService.useGetProjectById(id)

  return { getAllProjects, getProjectInfosById }
}

export default useFetchProject
