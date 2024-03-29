import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
   margin: 0 auto;
   padding: 0 0.5rem;
   max-width: 1020px;
`;

export default function SmContainer({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}
