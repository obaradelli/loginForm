import 'styled-components'
import {
  defaultTheme,
  begeTheme,
  darkGreenTheme,
} from '../styles/themes/themes'

type ThemeType = typeof defaultTheme

type ThemeType = typeof begeTheme

type ThemeType = typeof darkGreenTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}

declare module 'styled-components' {
  export interface begeTheme extends ThemeType {}
}

declare module 'styled-components' {
  export interface darkGreenTheme extends ThemeType {}
}
