import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-size: 11px;
  text-align: center;
  position: fixed;
  bottom: 3%;
  a {
    color: hsl(228, 45%, 44%);
  }
`;

const Footer: React.FC<{}> = () => {
  return (
    <Container>
      Challenge by myself{' '}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
      >
        Frontend Mentor
      </a>
      . Coded by <a href="#">Syafiq Shamsuddin</a>.
    </Container>
  );
};

export default Footer;
