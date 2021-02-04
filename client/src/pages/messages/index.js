import React, { useEffect, useState } from 'react';
import Icon from '@hackclub/icons';
import ChatSide from './components/ChatSide';
import {
  Container, SidesWrapper,
  ChatSideWrapper, NoMessageSelectedMsg,
} from './style';
import RecentMessagesSide from './components/RecentMessagesSide';
import DetailsSide from './components/DetailsSide';

export default function Messages({props}) {
  const ROOM_ID = props.match.params.room;
  const [isDetailsClosed, setIsDetailsClosed] = useState(false);

  return (
    <Container>
      <SidesWrapper>
        {/* Recent messages */}
        <RecentMessagesSide
          activeRoomId={ROOM_ID}
        />
        {/* Chat */}
        {
          !ROOM_ID ? (
            <ChatSideWrapper isDetailsClosed={true}>
              <NoMessageSelectedMsg>
                <Icon glyph="welcome" style={{ margin: '0 auto' }} size={55} color="#ddd" />
                <p style={{ color: '#333' }}>
                  Welcome to the chat.
                </p>
              </NoMessageSelectedMsg>
            </ChatSideWrapper>
          ) : (
            <ChatSide
              locationState={props.location.state}
              roomId={ROOM_ID}
              isDetailsClosed={isDetailsClosed}
              onOpenDetails={() => setIsDetailsClosed(false)}
            />
          )
        }
        {/* Offer & Product Details */}
        {
          !!ROOM_ID && (
            <DetailsSide
              roomId={ROOM_ID}
              isDetailsClosed={isDetailsClosed}
              onClose={() => setIsDetailsClosed(true)}
            />
          )
        }
      </SidesWrapper>
    </Container>
  );
}
