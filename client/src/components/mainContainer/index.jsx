import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
   margin: 0 auto;
   padding: 0 8px;
      
   @media (min-width: 980px){
      // padding: 30px 20px 64px;
      max-width: 980px;
      position: relative;
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
