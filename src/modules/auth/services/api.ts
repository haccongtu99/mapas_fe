import { TAuthLogin } from '../types'
import { AUTH_ENDPOINT } from '@/constants/endpoint'
import { originAxios } from '@/configs/api/axios'

export class AuthApi {
  async login(input: TAuthLogin): Promise<any> {
    const { data } = (await originAxios.post(
      `${AUTH_ENDPOINT}/login`,
      input
    )) as any
    return data
  }

  async logout(token: Record<string, unknown>, configs?: any): Promise<any> {
    const { data } = (await originAxios.post(
      `${AUTH_ENDPOINT}/logout`,
      token,
      configs
    )) as any
    return data
  }

  async refreshToken(
    token: Record<string, unknown>,
    configs?: any
  ): Promise<any> {
    const { data } = await originAxios.post(
      `${AUTH_ENDPOINT}/refresh-token`,
      token,
      configs
    )
    console.log(data, 'data..')
    return data
  }
}
