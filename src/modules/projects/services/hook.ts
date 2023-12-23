import { MutationConfig, QueryConfig } from '@/configs/api'
import { ProjectApi } from './api'
import { useMutation, useQuery } from '@tanstack/react-query'
import { queryString } from '@/constants/queryString'
import { TProject, TProjectInfos } from '../types'

const projectApi = new ProjectApi()

type TQueryConfigType = typeof projectApi.findAll | typeof projectApi.findById
type TMutationConfigType =
  | typeof projectApi.create
  | typeof projectApi.update
  | typeof projectApi.deleteProjectById

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
      mutationKey: [queryString.PROJECT],
      mutationFn: (id: string) => projectApi.deleteProjectById(id),
      ...config
    })
  }

  useCreateProject = (config?: TProjectMutateConfig) => {
    return useMutation({
      mutationKey: [queryString.PROJECT],
      mutationFn: (input: TProject) => projectApi.create(input),
      onSuccess: (data: any) => data,
      ...config
    })
  }

  useUpdateProject = (config?: TProjectMutateConfig) => {
    return useMutation({
      mutationKey: [queryString.PROJECT],
      mutationFn: (input: TProjectInfos) => projectApi.update(input),
      ...config
    })
  }
}

export const projectQueryService = new ProjectQuery()
