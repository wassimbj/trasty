import React from 'react';
import styled from 'styled-components';
import FindTravelerCard from '../../components/findTravelerCard';
import Footer from '../../components/footer';
import MainContainer from '../../components/mainContainer';
import UserRequestCard from './components/UserRequestCard';

// const RequestsAndTripsContainer = styled.div`
//   display: grid;
//   grid-template-rows: 1fr 1fr;
//   gap: 1em 1em;
//   @media(min-width: 960px){
//     grid-template-columns: 1.4fr 0.6fr;
//   }
// `;

// const TripsContainer = styled.div`
//   border: 1px solid rgba(0,0,0,0.1);
//   padding: 0 0.5rem;
//   border-radius: 5px;

//   & .title {
//     padding: 0.75rem;
//   }
// `;

const RequestCardsContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 1em 1em;
  @media(min-width: 768px){
    grid-template-columns: 1fr 1fr;
  }
  @media(min-width: 1020px){
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default function RequestsList() {
  return (
    <>
      <MainContainer>
        <FindTravelerCard customStyle="margin: 3rem auto 5rem;" btnText="Find Requests" />
        {/* <RequestsAndTripsContainer> */}
        <RequestCardsContainer>
          { [...Array(5)].map(() => <UserRequestCard />) }
        </RequestCardsContainer>
        {/* <TripsContainer>
          <p className="title"> Trips </p>
          <hr />
        </TripsContainer>
      </RequestsAndTripsContainer> */}
      </MainContainer>
      <Footer />
    </>
  );
}
