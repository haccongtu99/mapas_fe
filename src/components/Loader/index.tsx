import { MapasLottie } from '@/assets'
import { MantineLoaderComponent } from '@mantine/core'
import { forwardRef } from 'react'

export const MapasLoader: MantineLoaderComponent = forwardRef((_, ref) => (
  <img src={MapasLottie} ref={ref} width={120} height={120} />
))
