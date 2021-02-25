/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useRef, useState } from 'react';
import Icon from '@hackclub/icons';
import timeAgo from '../../../utils/timeAgo';
import {
  ChatContent, ChatSideWrapper, ChattingWithHeader,
  ChatTitle, ClearFixFloat, CloseChatIcon, MsgAvatar, MsgBubble,
  MsgDate, MsgText, MsgTextWrapper, OpenDetailsBtn
} from '../style';
import MessageTextarea from './MessageTextarea';
import getMessages from '../../../api/messages/getMessages';
import UserAuthContext from '../../../contexts/UserAuthContext';
import initSocketIo from '../../../utils/socketIo';
import sendNotif from '../../../events/sendNotif';
import SomethingWrongMsg from '../../../components/somethingWrongMsg';
import EmptyMessagesMsg from './EmptyMessagesMsg';
import Spinner from '../../../components/spinner';

export default function ChatSide({
  isDetailsClosed,
  onOpenDetails,
  roomId,
  userChattingWithId,
  locationState,
  isSmallScreen
}) {
  
  // get logged in user
  const { isLoggedIn } = useContext(UserAuthContext);
  const chatBox = useRef(null);
  const [newMsg, setNewMsg] = useState(false);
  const [messages, setMessages] = useState({
    loading: true,
    data: [],
  });
  const [error, setError] = useState(false);

  // init with the roomId to join the user.
  const socketIo = initSocketIo('msgs', {
    query: { roomId }
  });
    
  // when we get a new message
  socketIo.on('new_msg', (msg) => {
    setNewMsg(true);
  });

  // when user send a new message
  const handleNewMsgSent = () => {
    socketIo.emit('new_msg_sent', { roomId })
    sendNotif(parseInt(userChattingWithId), 'msg');
  };

  // when user accept an offer he will be redirect to the chat room
  // so, we send a notification when that happen.
  useEffect(() => {
    if(!!locationState){
      if(locationState.sendNotif){
        sendNotif(locationState.data.notifTo, locationState.data.notifType)
      }
    }
  }, []);

  useEffect(() => {
    // scroll to bottom
    chatBox.current.scrollTop = chatBox.current.scrollHeight;
    (async function () {
      try {
        const respData = await getMessages(roomId);
        setMessages({
          loading: false,
          data: respData.data,
        });
      } catch (err) {
        setError(true)
      }
      if(newMsg){
        setNewMsg(false);
      }
    }());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newMsg, roomId]);

  return (
    <ChatSideWrapper isDetailsClosed={isDetailsClosed} isSmallScreen={isSmallScreen}>
      <ChattingWithHeader>
        <ChatTitle>
          {isSmallScreen && <CloseChatIcon to="/messages"><Icon glyph="view-back" /></CloseChatIcon> }
          Chat
        </ChatTitle>
        {
          isDetailsClosed
            && (
              <OpenDetailsBtn onClick={onOpenDetails}>
                See Details
              </OpenDetailsBtn>
            )
        }
      </ChattingWithHeader>
      <ChatContent ref={chatBox}>
        {
          error
            ? <SomethingWrongMsg />
            : (
              messages.loading ? (
                <Spinner customStyle="margin: 3rem 0" />
              ) : (
                messages.data.length === 0 ? (
                  <EmptyMessagesMsg />
                ) : (
                  messages.data.map((msg, i) => (
                    <MsgBubble isMe={isLoggedIn.userid === msg.msg_from}>
                      <div>
                        <MsgAvatar>
                          { isLoggedIn.userid === msg.msg_from ? null : <img src={msg.image} alt="" /> }
                        </MsgAvatar>
                        <MsgTextWrapper>
                          <MsgText>{msg.msg}</MsgText>
                          <MsgDate>{timeAgo(msg.created_at)}</MsgDate>
                        </MsgTextWrapper>
                      </div>
                      <ClearFixFloat />
                    </MsgBubble>
                  ))
                )
              )
            )
        }
      </ChatContent>
      <MessageTextarea
        roomId={roomId}
        userChattingWithId={userChattingWithId}
        onNewMsgSent={handleNewMsgSent}
      />
    </ChatSideWrapper>
  );
}
