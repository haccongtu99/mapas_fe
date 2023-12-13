import Api from '@/configs/api/api'
import { TAuthLogin } from '../types'
import { originAxios } from '@/configs/api/axios'
import { AUTH_ENDPOINT } from '@/constants/endpoint'

export class AuthApi extends Api {
  async login(input: TAuthLogin): Promise<any> {
    const { data } = await originAxios.post(`${AUTH_ENDPOINT}/login`, input)
    return data
  }

  async logout(token: Record<string, unknown>): Promise<any> {
    const data = await this.post(`${AUTH_ENDPOINT}/logout`, token)
    return data
  }

  async refreshToken(token: Record<string, unknown>): Promise<any> {
    const data = await this.post(`${AUTH_ENDPOINT}/refresh-token`, token)
    return data
  }
}
