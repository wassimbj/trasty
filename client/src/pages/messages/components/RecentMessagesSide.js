/* eslint-disable no-nested-ternary */
import React, { useContext, useEffect, useState } from 'react';
import { RecentMsgsTitle, RecentMessagesContainer, NoMessagesMsg } from '../style';
import Spinner from '../../../components/spinner';
import RecentMsgCard from './RecentMsgCard';
import getChatRooms from '../../../api/messages/getChatRooms';
import UserAuthContext from '../../../contexts/UserAuthContext';

export default function RecentMessagesSide({ activeRoomId }) {
  const [chatRooms, setChatRooms] = useState({
    loading: true,
    data: [],
  });

  // get logged in user
  const { isLoggedIn } = useContext(UserAuthContext);

  useEffect(() => {
    (async function () {
      try {
        const respData = await getChatRooms();
        setChatRooms({
          loading: false,
          data: respData.data,
        });
      } catch (err) {
        setChatRooms({
          loading: false,
          data: [],
        });
      }
    }());
  }, []);

  const displayRightData = (chatRoom) => {
    // if im the traveler, display the requester data
    if (chatRoom.traveler_id === isLoggedIn.userid) {
      return {
        img: chatRoom.requester_img,
        name: chatRoom.requester_name,
        isTraveler: false,
      };
    }
    // else then im the requester, display the traveler info to talk with.
    return {
      img: chatRoom.traveler_img,
      name: chatRoom.traveler_name,
      isTraveler: true,
    };
  };

  return (
    <RecentMessagesContainer>
      <RecentMsgsTitle> Discussions </RecentMsgsTitle>
      {
        chatRooms.loading ? (
          <Spinner center customStyle="padding: 5rem 0.5rem;" />
        ) : (
          chatRooms.data.length === 0 ? (
            <NoMessagesMsg>
              <p className="title"> You have no messages </p>
              <p className="subtitle">
                When you accept a help offer,
                <br />
                discussion room will show up here.
              </p>
            </NoMessagesMsg>
          ) : (
            chatRooms.data.map((room) => (
              <RecentMsgCard
                isActive={activeRoomId === room.slug}
                userImg={displayRightData(room).img}
                userName={displayRightData(room).name}
                roomId={room.slug}
                isTraveler={displayRightData(room).isTraveler}
              />
            ))
          )
        )
      }
    </RecentMessagesContainer>
  );
}
