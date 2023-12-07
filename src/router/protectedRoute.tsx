import storage from '@/storage'
import { Navigate } from 'react-router-dom'

export const ProtectedRoute = ({ children }: any) => {
  const accessToken = storage.getToken()
  if (!accessToken) {
    return <Navigate to="/login" />
  }
  return children
}
