import axios from 'axios'
import { API_URL } from '../../constants/endpoint'
import storage from '@/storage'
import { AuthApi } from '@/modules/auth/services/api'

export const originAxios = axios.create({
  baseURL: API_URL
})

const customAxios = axios.create({
  baseURL: API_URL
})

customAxios.interceptors.request.use(
  config => {
    const accessToken = storage.getToken()
    if (!config.headers['Authorization']) {
      config.headers['Authorization'] = `Bearer ${accessToken}`
    }
    return config
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

customAxios.interceptors.response.use(
  response => {
    return response
  },
  async error => {
    const prevRequest = error?.config
    const authApi = new AuthApi()
    if (error?.response?.status === 403 && !prevRequest?.sent) {
      prevRequest.sent = true
      const refreshToken = storage.getRefreshToken()
      const data = await authApi.refreshToken({ refreshToken })
      prevRequest.headers['Authorization'] = `Bearer ${data.accessToken}`
      storage.setToken(data.accessToken)
      storage.setRefreshToken(data.newRefreshToken)
      return customAxios(prevRequest)
    }
    return Promise.reject(error)
  }
)

export default customAxios
