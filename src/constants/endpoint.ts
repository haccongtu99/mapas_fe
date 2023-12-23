export const DOMAIN_SERVER = 'http://18.141.230.66:3051'

export const API_URL = import.meta.env.PROD
  ? DOMAIN_SERVER
  : (import.meta.env.VITE_REACT_APP_API_URL as string)

export const AUTH_ENDPOINT = `${API_URL}/v1/users`
export const PROJECT_ENDPOINT = `${API_URL}/v1/admin/projects`
