import React from 'react';
import styled from 'styled-components';
import Footer from '../../components/footer';
import MainContainer from '../../components/mainContainer';
import RequestCard from './components/RequestCard';

const RequestsWrapper = styled.div`
  padding: 0.5rem;
  margin: 0 auto;
  margin-bottom: 10rem;
  display: grid;
  gap: 1rem;
  @media(min-width: 800px){
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default function MyRequests() {
  return (
    <>
     <MainContainer>
        <RequestsWrapper>
          <RequestCard />
        </RequestsWrapper>
     </MainContainer>
     <Footer />
    </>
  );
}
