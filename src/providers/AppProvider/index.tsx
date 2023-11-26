import ErrorBoundary from '@/components/ErrorBoundary'
import ScreenLoading from '@/components/ScreenLoading'
import { theme } from '@/styles/theme'
import { MantineProvider } from '@mantine/core'
import { FC, PropsWithChildren, Suspense } from 'react'
import '@/index.scss'
import '@mantine/core/styles.css'

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <MantineProvider theme={theme}>
      <ErrorBoundary>
        <Suspense fallback={<ScreenLoading />}>{children}</Suspense>
      </ErrorBoundary>
    </MantineProvider>
  )
}
