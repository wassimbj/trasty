import React from 'react';
import Icon from '@hackclub/icons';
import OfferCard from './components/OfferCard';
import RequestCard from './components/RequestCard';
import {
  Container, EmptyWrapper, NoOffersIcon, NoOffersText,
  OffersSide, RequestsSide, SidesWrapper, SideTitle, UserOffersContainer,
} from './style';

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
           <EmptyWrapper>
              <div>
                <NoOffersIcon><Icon glyph="explore" size={50} /></NoOffersIcon>
                <NoOffersText> You don't have any request </NoOffersText>
              </div>
           </EmptyWrapper>
           {/* <UserRequestsWrapper>
            { [...Array(4)].map(() => <RequestCard />) }
           </UserRequestsWrapper> */}
         </RequestsSide>
         <OffersSide>
           <SideTitle>
            Offers
            <small> (0) </small>
           </SideTitle>
           {/* <EmptyWrapper>
              <div>
                <NoOffersIcon><Icon glyph="message-simple" size={50} /></NoOffersIcon>
                <NoOffersText>Please select a request to see the available offers</NoOffersText>
              </div>
           </EmptyWrapper> */}
           <UserOffersContainer>
            <OfferCard />
            <OfferCard />
            <OfferCard />
           </UserOffersContainer>
         </OffersSide>
       </SidesWrapper>
     </Container>
    </>
  );
}
