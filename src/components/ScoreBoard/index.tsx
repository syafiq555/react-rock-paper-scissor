import * as React from 'react';
import styled from 'styled-components';

import logo from '../../assets/images/logo.svg';

const Logo = styled.img.attrs(() => ({
  src: logo,
}))``;

const Container = styled.div`
  border: 1px solid black;
`;

const ScoreBoard: React.FC<{}> = () => {
  return (
    <Container>
      <Logo />
    </Container>
  );
};

export default ScoreBoard;
