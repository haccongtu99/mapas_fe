import { RouterProvider } from 'react-router-dom'
import { ErrorFallback } from './components/ErrorBoundary/ErrorFallback'
import { router } from './router'

function App() {
  return <RouterProvider router={router} fallbackElement={<ErrorFallback />} />
}

export default App
