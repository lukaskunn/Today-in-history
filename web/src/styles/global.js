import { createGlobalStyle } from 'styled-components';

 
const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 99vw;
    height: 98vh;
    background-color: #090909;
    color: white;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    font-size: 1.3rem;
  }
`;
 
export default GlobalStyle;