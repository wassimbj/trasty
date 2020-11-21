import React from 'react';
import styled from 'styled-components';
import FindTravelerCard from '../../components/findTravelerCard';
import Footer from '../../components/footer';
import MainContainer from '../../components/mainContainer';
import UserRequestCard from '../../components/userRequestCard';

const RequestCardsContainer = styled.div`
  max-width: 850px;
  margin: 0 auto 15rem;
`;

export default function RequestsList() {
  return (
    <>
      <MainContainer>
        <FindTravelerCard customStyle="margin: 3rem auto 5rem;" btnText="Find Requests" />
        <RequestCardsContainer>
          { [...Array(5)].map(() => <UserRequestCard />) }
        </RequestCardsContainer>
      </MainContainer>
      <Footer />
    </>
  );
}
