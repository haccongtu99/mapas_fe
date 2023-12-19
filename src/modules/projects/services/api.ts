import Api from '@/configs/api/api'
import { PROJECT_ENDPOINT } from '@/constants/endpoint'
import { TProject, TProjectInfos } from '../types'

export class ProjectApi extends Api {
  async findAll(): Promise<TProject[]> {
    const { data } = await this.get(PROJECT_ENDPOINT)
    return data ?? []
  }

  async findById(id: string): Promise<TProject> {
    const { data } = await this.get(`${PROJECT_ENDPOINT}/${id}`)
    return data
  }

  async deleteProjectById(id: string): Promise<any> {
    const { data } = await this.delete(`${PROJECT_ENDPOINT}/${id}`)
    return data
  }

  async create(input: TProject): Promise<TProject> {
    const configs = {
      headers: { 'Content-Type': 'multipart/form-data' }
    }
    const { data } = await this.post(
      `${PROJECT_ENDPOINT}/create`,
      input,
      configs
    )
    return data
  }

  async update(input: TProjectInfos): Promise<TProjectInfos> {
    const { data } = await this.patch(
      `${PROJECT_ENDPOINT}/update`,
      input as unknown as Record<string, unknown>
    )
    return data
  }
}
