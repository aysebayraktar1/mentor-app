import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
   body {
    margin: 0;
    padding: 0;
    background-color: #F7F8FA;
    font-family: 'SF Compact Display', sans-serif;
  }
  
   html,
   body,
   body > div:first-child,
   div#__next,
   div#__next > div {
        height: 100%;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  
  * {
    box-sizing: border-box;
  }
`

export default GlobalStyle
