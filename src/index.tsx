import * as React from 'react';
import { render } from 'react-dom';
import { Helmet } from 'react-helmet';

import App from './components/App/App';
import { GlobalStyled } from './index.module';

render(
  <>
    <Helmet>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600&display=swap');
      </style>
    </Helmet>
    <GlobalStyled />
    <App />
  </>,
  document.querySelector('#root'),
);
