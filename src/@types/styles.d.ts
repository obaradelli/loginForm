import 'styled-components'
import { defaultTheme, begeTheme } from '../styles/themes/themes'

type ThemeType = typeof defaultTheme

type ThemeType = typeof begeTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}

declare module 'styled-components' {
  export interface begeTheme extends ThemeType {}
}
