import React, { useState } from 'react';
import styled from 'styled-components';
import Icon from '@hackclub/icons';
import RecentMsgCard from './components/RecentMsgCard';
import ChatSide from './components/ChatSide';

const Container = styled.div`
  position: fixed;
  left: 0; right: 0;
  top: 5%; bottom: 0;
  margin: 0.5rem auto 0;
  // max-width: 1200px;
  @media(max-width: 600px){ bottom: 8%; top: 6%; margin: 0rem; }
  border: 1px solid rgba(0,0,0,0.1);
`;

const SidesWrapper = styled.div`
  display: flex;
  height: 100%;
`;

const RecentMessagesSide = styled.div`
  // padding: 1rem;
  border-right: 1px solid rgba(0,0,0,0.1);
  width: 30%;

  @media(max-width: 900px){
    width: 100%;
    border-right: none;
  }
  overflow-y: auto;
`;

const RecentMsgsTitle = styled.span`
  font-weight: 500;
  font-size: 17px;
  text-align: center;
  display: flex;
  align-items: center;
  // justify-content: center;
  padding: 0 1rem;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  height: 70px;
`;

const OfferDetailsSide = styled.div`
  position: relative;
  overflow: hidden;
  width: ${(props) => (props.isDetailsClosed ? '0' : '25%')};
  visibility: ${(props) => (props.isDetailsClosed ? 'hidden' : 'visible')};
  transition: 250ms;
  white-space: nowrap;
  @media(max-width: 900px){
    width: 0%;
    display: none;
  }
  border-left: 1px solid rgba(0,0,0,0.1);
`;

const OfferSideTitle = styled.div`
  font-weight: 500;
  font-size: 17px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  height: 70px;
`;

const CloseDetailsBtn = styled.span`
  padding: 0.25rem;
  border-radius: 30px;
  cursor: pointer;
  background: rgba(0,0,0,0.065);
  &:hover{ background: rgba(0,0,0,0.1) }
`;

export default function Messages() {
  const [isDetailsClosed, setIsDetailsClosed] = useState(false);
  return (
    <Container>
      <SidesWrapper>
        {/* Recent messages */}
        <RecentMessagesSide>
          <RecentMsgsTitle> Recent Discussions & Offers </RecentMsgsTitle>
          <RecentMsgCard />
        </RecentMessagesSide>
        {/* Chat */}
        <ChatSide
          isDetailsClosed={isDetailsClosed}
          onOpenDetails={() => setIsDetailsClosed(false)}
        />
        {/* Offer & Product Details */}
        <OfferDetailsSide isDetailsClosed={isDetailsClosed}>
         <OfferSideTitle>
           Offer and Product details
          <CloseDetailsBtn onClick={() => setIsDetailsClosed(true)}><Icon glyph="view-close" size={26} /></CloseDetailsBtn>
         </OfferSideTitle>
        </OfferDetailsSide>
      </SidesWrapper>
    </Container>
  );
}
