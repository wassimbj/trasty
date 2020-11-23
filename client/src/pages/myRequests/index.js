import React from 'react';
import styled from 'styled-components';
import Icon from '@hackclub/icons';
import OfferCard from './components/OfferCard';
import RequestCard from './components/RequestCard';
import {
  Container, OffersSide, RequestsSide, SidesWrapper,
} from './style';

const SideTitle = styled.span`
  display: block;
  font-size: 22px;
  font-weight: 600;
  // margin-bottom: 2rem;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  position: sticky; top: 0;
  background: #fff;
  & small { font-size: 17px; }
`;

const UserOffersContainer = styled.div`
  display: grid;
  gap: 1rem;
  @media(min-width: 1000px){
    grid-template-columns: 1fr 1fr;
  }
  margin-top: 2rem;
`;

const UserRequestsWrapper = styled.div`
  margin-top: 2rem;
`;

const EmptyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75%;
`;

const NoOffersText = styled.p`
  font-size: 19px;
  font-weight: 600;
  color: #333;
`;

const NoOffersIcon = styled.span`
  display: block;
  text-align: center;
  & svg { margin: 0 auto; color: #ccc; }
`;

export default function MyRequests() {
  return (
    <>
     <Container>
       <SidesWrapper>
         <RequestsSide>
           <SideTitle>
             Your Requests
             <small> (0) </small>
           </SideTitle>
           {/* <EmptyWrapper>
              <div>
                <NoOffersIcon><Icon glyph="explore" size={50} /></NoOffersIcon>
                <NoOffersText> No Requests yet... </NoOffersText>
              </div>
           </EmptyWrapper> */}
           <UserRequestsWrapper>
            { [...Array(4)].map(() => <RequestCard />) }
           </UserRequestsWrapper>
         </RequestsSide>
         <OffersSide>
           <SideTitle>
            Offers
            <small> (0) </small>
           </SideTitle>
           <EmptyWrapper>
              <div>
                <NoOffersIcon><Icon glyph="message-simple" size={50} /></NoOffersIcon>
                <NoOffersText>Please select a request to see the available offers</NoOffersText>
              </div>
           </EmptyWrapper>
           {/* <UserOffersContainer>
            <OfferCard />
            <OfferCard />
            <OfferCard />
           </UserOffersContainer> */}
         </OffersSide>
       </SidesWrapper>
     </Container>
    </>
  );
}
