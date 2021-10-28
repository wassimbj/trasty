import React, { useEffect, useState } from 'react';
import Icon from '@hackclub/icons';
import ChatSide from './components/ChatSide';
import {
  Container, SidesWrapper,
  ChatSideWrapper, NoMessageSelectedMsg,
} from './style';
import RecentMessagesSide from './components/RecentMessagesSide';
import DetailsSide from './components/DetailsSide';
// import isRoomExist from '../../api/messages/isRoomExist'
import getRoomDetails from '../../api/messages/getRoomDetails'
import { Redirect } from 'react-router-dom';

export default function Messages({props}) {
  const ROOM_ID = props.match.params.room;
  const USER_ID = props.match.params.user; // user im chatting with
  const isSmallScreen = window.innerWidth <= 995;
  const [isDetailsClosed, setIsDetailsClosed] = useState(isSmallScreen);
  const [roomDetails, setRoomDetails] = useState({
    loading: true,
    data: null
  });
  // const [roomExist, setRoomExist] = useState({
  //   loading: true,
  //   status: false,
  // });

  useEffect(() => {
    if(!!ROOM_ID){
      (async function () {
        try {
          const resp = await getRoomDetails(ROOM_ID);
          console.log(resp)
          // console.log('ROOM_EXIST: ', resp.data);
          setRoomDetails({
            loading: false,
            status: resp
          });
        } catch (err) {
         setRoomDetails({loading: false, status: false});
        }
      }());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ROOM_ID]);

  // useEffect(() => {
  //   if(!!ROOM_ID){
  //     (async function () {
  //       try {
  //         const resp = await isRoomExist(ROOM_ID, USER_ID);
  //         // console.log('ROOM_EXIST: ', resp.data);
  //         setRoomExist({
  //           loading: false,
  //           status: resp.data
  //         });
  //       } catch (err) {
  //        setRoomExist({loading: false, status: false});
  //       }
  //     }());
  //   }
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [ROOM_ID]);

  // if(!!ROOM_ID && !roomExist.loading && !roomExist.status){
  //   return <Redirect to="/messages" />
  // }

  if(!!ROOM_ID && !roomDetails.loading && roomDetails.data === null){
    return <Redirect to="/messages" />
  }

  return (
    <Container>
      <SidesWrapper>
        {/* Recent messages */}
        <RecentMessagesSide
          activeRoomId={ROOM_ID}
          isVisible={isSmallScreen && !!ROOM_ID}
        />
        {/* Chat */}
        {
          !ROOM_ID ? (
            !isSmallScreen && (
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
            ) 
          ) : (
            <ChatSide
              isSmallScreen={isSmallScreen}
              locationState={props.location.state}
              roomId={ROOM_ID}
              userChattingWithId={USER_ID}
              isDetailsClosed={isDetailsClosed}
              onOpenDetails={() => setIsDetailsClosed(!isDetailsClosed)}
            />
          )
        }
        {/* Offer & Product Details */}
        {
          !!ROOM_ID && (
            <DetailsSide
              isSmallScreen={isSmallScreen}
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
