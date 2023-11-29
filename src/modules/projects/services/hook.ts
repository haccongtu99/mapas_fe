import { MutationConfig, QueryConfig } from '@/configs/api'
import { ProjectApi } from './api'
import { useMutation, useQuery } from '@tanstack/react-query'
import { queryString } from '@/constants/queryString'

const projectApi = new ProjectApi()

type TQueryConfigType = typeof projectApi.findAll | typeof projectApi.findById
type TMutationConfigType = typeof projectApi.delete

type TProjectQueryConfig = {
  config?: QueryConfig<TQueryConfigType>
}

type TProjectMutateConfig = {
  config?: MutationConfig<TMutationConfigType>
}

class ProjectQuery {
  static useGetAllProjects = (config?: TProjectQueryConfig) => {
    return useQuery({
      queryKey: [queryString.PROJECT],
      queryFn: () => projectApi.findAll(),
      ...config
    })
  }

  static useGetProjectById = (id: string, config?: TProjectQueryConfig) => {
    return useQuery({
      queryKey: [queryString.PROJECT, id],
      queryFn: () => projectApi.findById(id),
      ...config
    })
  }

  static useDeleteProject = (config?: TProjectMutateConfig) => {
    return useMutation({
      mutationFn: projectApi.delete,
      mutationKey: [queryString.PROJECT],
      ...config
    })
  }
}

export const projectQueryService = new ProjectQuery()
