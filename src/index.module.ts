import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  html, body, div#root {
    min-height: 100vh; 
    font-family: 'Barlow Semi Condensed', sans-serif;
  }
`;
