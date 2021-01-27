import { createGlobalStyle } from 'styled-components';

 
const GlobalStyle = createGlobalStyle`
  :root {
      --xiketic: #03071eff;
      --dark-sienna: #370617ff;
      --rosewood: #6a040fff;
      --dark-red: #9d0208ff;
      --rosso-corsa: #d00000ff;
      --vermilion: #dc2f02ff;
      --persimmon: #e85d04ff;
      --carrot-orange: #f48c06ff;
      --orange-web: #faa307ff;
      --selective-yellow: #ffba08ff;
  }

  body {
    position: absolute;
    left: 0;
    top: 0;
    width: 50%;
    height: 100vh;
    background-color: var(--xiketic);
    color: white;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    font-size: 1.3rem;
  }
`;
 
export default GlobalStyle;