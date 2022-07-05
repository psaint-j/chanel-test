import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: ${({ theme }) => theme.colors.primary};
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }


  .slideIn-enter {
    transform: translateX(100%);
  }
  .slideIn-enter-active {
    transform: translateX(0%);
    transition: transform 0.3s ease-in-out;
  }
  .slideIn-exit {
    transform: translate(0%, -100%);
  }
  .slideIn-exit-active {
    transform: translate(-100%, -100%);
    transition: transform 0.3s ease-in-out;
  }


  .slideOut-enter {
    transform: translateX(-100%);
  }
  .slideOut-enter-active {
    transform: translateX(0);
    transition: transform 0.4s ease-in-out;
  }      

  .slideOut-exit {
      transform: translate(-100%, -100%);
  }
  .slideOut-exit-active {
      transform: translate(0, -100%);
      transition: transform 0.4s ease-in-out;
  } 
`

export default GlobalStyle
