import React from 'react';
import styled from 'styled-components';
import FindTravelerCard from '../../components/findTravelerCard';
import Footer from '../../components/footer';
import MainContainer from '../../components/mainContainer';
import UserRequestCard from '../../components/userRequestCard';

const RequestCardsContainer = styled.div`
  // display: grid;
  // grid-template-rows: 1fr 1fr 1fr;
  // gap: 1em 1em;
  // max-width: 980px;
  max-width: 850px;
  margin: 0 auto;
  // @media(min-width: 768px){
  //   grid-template-columns: 1fr 1fr;
  // }
  // @media(min-width: 1020px){
  //   grid-template-columns: 1fr 1fr 1fr;
  // }
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
