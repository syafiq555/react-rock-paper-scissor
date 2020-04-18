import * as React from 'react';
import { render } from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './components/App/App';

const GlobalStyled = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  html, body, div#root {
    min-height: 100vh;
  }
`;

render(
  <>
    <GlobalStyled />
    <App />
  </>,
  document.querySelector('#root'),
);
