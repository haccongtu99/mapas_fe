import Api from '@/configs/api/api'
import { PROJECT_ENDPOINT } from '@/constants/endpoint'
import { TProject } from '../types'

export class ProjectApi extends Api {
  async findAll(): Promise<TProject[]> {
    const { data } = await this.get(PROJECT_ENDPOINT)
    return data ?? []
  }

  async findById(id: string): Promise<TProject> {
    const { data } = await this.get(`${PROJECT_ENDPOINT}/${id}`)
    return data
  }

  async delete(id: string): Promise<TProject> {
    const { data } = await this.get(`${PROJECT_ENDPOINT}/${id}`)
    return data
  }
}
