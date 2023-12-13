import axios from 'axios'
import { API_URL, AUTH_ENDPOINT } from '../../constants/endpoint'
import storage from '@/storage'

export const originAxios = axios.create({
  baseURL: API_URL
})

const customAxios = axios.create({
  baseURL: API_URL
  // headers: { 'Content-Type': 'application/json' },
  // withCredentials: true
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
    if (error?.response?.status === 401 && !prevRequest?.sent) {
      prevRequest.sent = true
      const refreshToken = storage.getRefreshToken()
      const { data } = await customAxios.post(
        `${AUTH_ENDPOINT}/refresh-token`,
        { refreshToken }
      )
      prevRequest.headers['Authorization'] = `Bearer ${data.accessToken}`
      storage.clearToken()
      storage.clearRefreshToken()
      storage.setToken(data.accessToken)
      storage.setRefreshToken(data.newRefreshToken)
      return customAxios(prevRequest)
    }
    return Promise.reject(error)
  }
)

export default customAxios
