import { MutationConfig, QueryConfig } from '@/configs/api'
import { ProjectApi } from './api'
import { useMutation, useQuery } from '@tanstack/react-query'
import { queryString } from '@/constants/queryString'
import { TProject } from '../types'

const projectApi = new ProjectApi()

type TQueryConfigType = typeof projectApi.findAll | typeof projectApi.findById
type TMutationConfigType =
  | typeof projectApi.create
  | typeof projectApi.update
  | typeof projectApi.delete

type TProjectQueryConfig = {
  config?: QueryConfig<TQueryConfigType>
}

type TProjectMutateConfig = {
  config?: MutationConfig<TMutationConfigType>
}

export class ProjectQuery {
  useGetAllProjects = (config?: TProjectQueryConfig) => {
    return useQuery({
      queryKey: [queryString.PROJECT],
      queryFn: () => projectApi.findAll(),
      ...config
    })
  }

  useGetProjectById = (id: string, config?: TProjectQueryConfig) => {
    return useQuery({
      queryKey: [queryString.PROJECT, id],
      queryFn: () => projectApi.findById(id),
      ...config
    })
  }

  useDeleteProject = (config?: TProjectMutateConfig) => {
    return useMutation({
      mutationFn: projectApi.delete,
      mutationKey: [queryString.PROJECT],
      ...config
    })
  }

  useCreateProject = (config?: TProjectMutateConfig) => {
    return useMutation({
      mutationKey: [queryString.PROJECT],
      mutationFn: (input: TProject) => projectApi.create(input)
    })
  }

  useUpdateProject = (config?: TProjectMutateConfig) => {
    return useMutation({
      mutationKey: [queryString.PROJECT],
      mutationFn: (input: TProject) => projectApi.update(input)
    })
  }
}

export const projectQueryService = new ProjectQuery()
