import React from 'react';
import Icon from '@hackclub/icons';
import OfferCard from './components/OfferCard';
import RequestCard from './components/RequestCard';
import {
  Container, EmptyWrapper, NoOffersIcon, NoOffersText,
  OffersSide, RequestsSide, SidesWrapper, SideTitle, UserOffersContainer, UserRequestsWrapper,
} from './style';

export default function MyRequests({ urlProps }) {
  const selectedRequestId = urlProps.match.params.request_id;
  // console.log('HAAA: ', urlProps);
  /*
   /offers/request/:request_id -> get request offers
   /my/requests, (limit, offset) -> get my request
  */
  return (
    <>
     <Container>
       <SidesWrapper>
         <RequestsSide>
           <SideTitle>Your Requests</SideTitle>
           {/* <EmptyWrapper>
              <div>
                <NoOffersIcon><Icon glyph="explore" size={50} /></NoOffersIcon>
                <NoOffersText> You don't have any request </NoOffersText>
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
           {
             !selectedRequestId ? (
              <EmptyWrapper>
                  <div>
                    <NoOffersIcon><Icon glyph="support" size={50} /></NoOffersIcon>
                    <NoOffersText>Please select a request to see the available offers</NoOffersText>
                  </div>
              </EmptyWrapper>
             ) : (
              <UserOffersContainer>
                <OfferCard />
                <OfferCard />
                <OfferCard />
              </UserOffersContainer>
             )
           }
         </OffersSide>
       </SidesWrapper>
     </Container>
    </>
  );
}
