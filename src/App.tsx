import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Home } from './page/home'
import { defaultTheme, begeTheme } from './styles/themes/themes'
import { GlobalStyle } from './styles/global'
import { FixButton } from './styles'

export function App() {
  const [theme, setTheme] = useState('')

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <FixButton>
        <Home />
        {/* <select className="accent" name="" id="">
          <option value="bege">bege</option>
          <option value="green">green</option>
          <option value="darkGreen">darkGreen</option>
          <option value="default">default</option>
        </select> */}
      </FixButton>
    </ThemeProvider>
  )
}
