import React from 'react';
import styled from 'styled-components';
import FindTravelerCard from '../../components/findTravelerCard';
import Footer from '../../components/footer';
import MainContainer from '../../components/mainContainer';
import TravelerTripCard from '../../components/travelerTripCard';

const RequestCardsContainer = styled.div`
  // display: grid;
  // grid-template-rows: 1fr 1fr 1fr;
  // gap: 1em 1em;
  // @media(min-width: 850px){
  //   grid-template-columns: 1fr 1fr;
  // }
  // max-width: 950px;
  max-width: 850px;
  margin: 0 auto;
`;

export default function Trips() {
  return (
    <>
      <MainContainer>
        <FindTravelerCard customStyle="margin: 3rem auto 5rem;" btnText="Find Requests" />
        <RequestCardsContainer>
          { [...Array(5)].map(() => <TravelerTripCard displayUser />) }
        </RequestCardsContainer>
      </MainContainer>
      <Footer />
    </>
  );
}
