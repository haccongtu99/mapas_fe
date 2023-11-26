import { FC, PropsWithChildren } from 'react'
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary'

import { ErrorFallback } from './ErrorFallback'

const ErrorBoundary: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ReactErrorBoundary FallbackComponent={ErrorFallback}>
      {children}
    </ReactErrorBoundary>
  )
}

export default ErrorBoundary
