import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Home } from './page/home'
import {
  defaultTheme,
  begeTheme,
  darkGreenTheme,
  greenTheme,
} from './styles/themes/themes'
import { GlobalStyle } from './styles/global'
import { FixButton } from './styles'

export type TypeTheme = 'bege' | 'green' | 'darkGreen' | 'default'

export function App() {
  const [theme, setTheme] = useState<TypeTheme>('default')

  const getTheme = () => {
    switch (theme) {
      case 'default':
        return defaultTheme
      case 'bege':
        return begeTheme
      case 'darkGreen':
        return darkGreenTheme
      case 'green':
        return greenTheme
      default:
        return defaultTheme
    }
  }

  return (
    <ThemeProvider theme={getTheme()}>
      <GlobalStyle />
      <FixButton>
        <Home setTheme={setTheme} theme={theme} />
      </FixButton>
    </ThemeProvider>
  )
}
