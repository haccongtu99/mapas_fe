import axios from 'axios'
import { API_URL } from '../../constants/endpoint'

export default axios.create({
  baseURL: API_URL
})

export const customAxios = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
})
