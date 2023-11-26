import { forwardRef } from 'react'
import { MantineLoaderComponent } from '@mantine/core'
import mapasLottie from '@/assets/mapas-lottie.gif'

export const MapasLoader: MantineLoaderComponent = forwardRef((_, ref) => (
  <img src={mapasLottie} ref={ref} width={120} height={120} />
))
