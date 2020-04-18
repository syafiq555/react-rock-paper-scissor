import React from 'react';

import Game from '../Game';
import Footer from '../Footer';
import { Container } from './app.style';

const App: React.FC = () => {
  return (
    <Container>
      <Game />
      <Footer />
    </Container>
  );
};

export default App;
