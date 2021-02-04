import React, { useEffect, useState } from 'react';
import Icon from '@hackclub/icons';
import ChatSide from './components/ChatSide';
import {
  Container, SidesWrapper,
  ChatSideWrapper, NoMessageSelectedMsg,
} from './style';
import RecentMessagesSide from './components/RecentMessagesSide';
import DetailsSide from './components/DetailsSide';
import isRoomExist from '../../api/messages/isRoomExist'
import { Redirect } from 'react-router-dom';

export default function Messages({props}) {
  const ROOM_ID = props.match.params.room;
  const [isDetailsClosed, setIsDetailsClosed] = useState(false);
  const [roomExist, setRoomExist] = useState({
    loading: true,
    status: false,
  });
  useEffect(() => {
    if(!!ROOM_ID){
      (async function () {
        try {
          const resp = await isRoomExist(ROOM_ID);
          console.log('ROOM_EXIST: ', resp.data);
          setRoomExist({
            loading: false,
            status: resp.data
          });
        } catch (err) {
         setRoomExist({loading: false, status: false});
        }
      }());
    }
  }, [ROOM_ID]);

  if(!!ROOM_ID && !roomExist.loading && !roomExist.status){
    return <Redirect to="/messages" />
  }

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
                  Hey, the chat is made for you to ask and discuss more
                  <br/>
                  with the traveler or requester...
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
