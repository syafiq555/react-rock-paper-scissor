import * as React from 'react';
import styled from 'styled-components';

import logo from '../../assets/images/logo.svg';

const LogoContainer = styled.div``;

const Logo = styled.img.attrs(() => ({
  src: logo,
}))`
  height: 3rem;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Outline = styled.div`
  border: 1px solid
    ${({ theme: { colors } }) => `${colors.header}`};
  border-radius: 7px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
`;

const Score = styled.div`
  background: rgb(247, 247, 247);
  color: ${({ theme: { colors } }) => `${colors.header}`};
  border-radius: 5px;
  padding: 0.2rem 0.9rem;
`;

const ScoreTitle = styled.small`
  font-size: 0.9rem;
  display: block;
`;

const ScoreText = styled.p`
  font-size: 1.5rem;
  text-align: center;
  font-weight: bolder;
`;

const ScoreBoard: React.FC<{}> = () => {
  return (
    <Container>
      <Outline>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <Score>
          <ScoreTitle>score</ScoreTitle>
          <ScoreText>12</ScoreText>
        </Score>
      </Outline>
    </Container>
  );
};

export default ScoreBoard;
