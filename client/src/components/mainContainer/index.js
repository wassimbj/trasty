import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
   margin: 0 auto;
   padding: 0 1rem;
   @media (min-width: 980px){
      max-width: 1020px;
   }
   @media (min-width: 1320px){
      max-width: 1300px;
   }
`;

// eslint-disable-next-line react/prop-types
export default function MainContainer({ children, className }) {
  return (
    <Container className={className}>
      {children}
    </Container>
  );
}
