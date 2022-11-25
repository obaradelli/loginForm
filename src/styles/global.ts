import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 ${({ theme }) => css`
   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
   }
   :focus {
     outline: 0;
     box-shadow: 0 0 0 2px ${theme.colors['--focus-color']} !important;
     border: 1px solid ${theme.colors['--primary-color']} !important;
     img: ${theme.colors['--primary-color']} !important;
     svg: ${theme.colors['--primary-color']} !important;
   }
   body {
     background: ${theme.colors['--background']};
     color: ${theme.colors['--text-base']};
     -webkit-font-smoothing: antialiased;
   }
   body,
   input,
   textarea,
   button {
     font: 400 1rem Roboto, sans-serif;
   }
 `}
`
