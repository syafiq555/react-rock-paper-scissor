import * as React from 'react';
import { render } from 'react-dom';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';

import App from './components/App';
import { GlobalStyled } from './index.module';
import { themes } from './themes';

render(
  <ThemeProvider theme={themes}>
    <Helmet>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600&display=swap');
      </style>
    </Helmet>
    <GlobalStyled />
    <App />
  </ThemeProvider>,
  document.querySelector('#root'),
);
