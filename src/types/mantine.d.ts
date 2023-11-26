import { DefaultMantineColor, MantineColorsTuple } from '@mantine/core'

// TypeScript will only autocomplete Mantine's default colors when accessing the theme.
// To add your custom colors to the MantineColor type, you can use TypeScript module declaration.
type ExtendedCustomColors =
  | 'primary'
  | 'silver'
  | 'lightGray'
  | DefaultMantineColor

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, MantineColorsTuple>
  }
}
