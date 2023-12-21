import ErrorBoundary from '@/components/ErrorBoundary'
import ScreenLoading from '@/components/ScreenLoading'
import '@/index.scss'
import { theme } from '@/styles/theme'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import { Notifications } from '@mantine/notifications'
import { FC, PropsWithChildren, Suspense } from 'react'
import '@mantine/notifications/styles.css'

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <MantineProvider theme={theme}>
      <Notifications />
      <ErrorBoundary>
        <Suspense fallback={<ScreenLoading />}>{children}</Suspense>
      </ErrorBoundary>
    </MantineProvider>
  )
}
