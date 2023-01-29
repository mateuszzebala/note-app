import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Rubik', Sans-Serif;
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