import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Rubik', Sans-Serif;
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
  *, *::after, *::before{
    box-sizing: border-box;
    font-family: 'Rubik', Sans-Serif;
  }
  a{
    text-decoration: none;
  }
`;
 
export default GlobalStyle;