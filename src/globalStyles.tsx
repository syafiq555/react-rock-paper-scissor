import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  html, body, div#root {
    min-height: 100vh; 
    color: ${({ theme: { colors } }) => `${colors.light}`};
    max-height: ${({ theme: { size } }) =>
      `${size.desktop}`};
    font-family: 'Barlow Semi Condensed', sans-serif;
    font-size: 16px;
    background-image: ${({ theme: { gradients } }) =>
      `radial-gradient(circle at top, ${gradients.background})`};
  }

  div#root {
    margin: 2rem;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;
