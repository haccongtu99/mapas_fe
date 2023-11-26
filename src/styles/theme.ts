import { MapasLoader } from '@/components/Loader'
import { Loader, MantineThemeOverride, rem } from '@mantine/core'

export const theme: MantineThemeOverride = {
  components: {
    Loader: Loader.extend({
      defaultProps: {
        loaders: { ...Loader.defaultLoaders, bars: MapasLoader },
        type: 'bars'
      }
    })
  },
  fontFamily: 'Roboto, sans-serif',
  colors: {
    primary: [
      '#D8997E',
      '#D8997E',
      '#D8997E',
      '#D8997E',
      '#D8997E',
      '#D8997E',
      '#D8997E',
      '#D8997E',
      '#D8997E',
      '#D8997E'
    ],
    silver: [
      '#F5F5F5',
      '#F5F5F5',
      '#F5F5F5',
      '#F5F5F5',
      '#F5F5F5',
      '#F5F5F5',
      '#F5F5F5',
      '#F5F5F5',
      '#F5F5F5',
      '#F5F5F5'
    ],
    gray: [
      '#fff',
      '#FBFBFB',
      '#F5F5F5',
      '#E5E5E5',
      '#c2c2c2',
      '#858585',
      '#4B4B4B',
      '#242424',
      '#000',
      '#000'
    ]
  },
  defaultGradient: {
    deg: 180,
    from: '#FFE2CC 0%',
    to: '#FFF0D3 100%'
  },
  fontSizes: {
    xs: rem(10),
    sm: rem(12),
    md: rem(14),
    lg: rem(16),
    xl: rem(20),
    xxl: rem(24),
    xxxl: rem(28)
  },
  lineHeights: {
    xs: '1.2',
    sm: '1.4',
    md: '1.55',
    lg: '1.6',
    xl: '1.65'
  },

  headings: {
    sizes: {
      h1: { fontSize: rem(32), fontWeight: 'bold' },
      h2: { fontSize: rem(28), fontWeight: 'bold' },
      h3: { fontSize: rem(24), fontWeight: 'bold' },
      h4: { fontSize: rem(20), fontWeight: 'bold' },
      h5: { fontSize: rem(18), fontWeight: 'bold' },
      h6: { fontSize: rem(16), fontWeight: 'bold' }
    }
  },
  breakpoints: {
    xs: '22.5em',
    sm: '26.875em',
    md: '51.875em',
    lg: '64em',
    xl: '90em',
    xxl: '120em'
  }
}
