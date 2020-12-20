import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
   margin: 0 auto;
   padding: 0 1rem;
   @media(min-width: 1200px){
      max-width: 1125px;
   }
   max-width: 990px;

   @media(max-width: 400px){
     padding: 0 0.25rem;
   }
`;

export default function MdContainer({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}
