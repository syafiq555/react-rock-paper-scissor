import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background-image: ${({
    theme: {
      gradients: { background },
    },
  }) => `radial-gradient(circle at top, ${background})`};
`;
