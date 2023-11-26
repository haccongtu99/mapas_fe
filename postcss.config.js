export default {
  plugins: {
    'postcss-preset-mantine': {},
    'postcss-simple-vars': {
      variables: {
        'mantine-breakpoint-xs': '22.5em',
        'mantine-breakpoint-sm': '48em',
        'mantine-breakpoint-md': '51.875em',
        'mantine-breakpoint-lg': '75em',
        'mantine-breakpoint-xl': '88em'
      }
    }
  }
}
