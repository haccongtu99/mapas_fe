import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const NotFoundPage = () => {
  const location = useLocation()
  useEffect(() => {
    console.log(location, 'location...')
    console.log('mounted not found...')
  }, [])
  return <div>NotFoundPage</div>
}

export const Component = NotFoundPage
