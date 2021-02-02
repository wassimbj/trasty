/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useRef, useState } from 'react';
import timeAgo from '../../../utils/timeAgo';
import {
  ChatContent, ChatSideWrapper, ChattingWithHeader,
  ChatTitle, ClearFixFloat, MsgAvatar, MsgBubble,
  MsgDate, MsgText, MsgTextWrapper, OpenDetailsBtn
} from '../style';
import MessageTextarea from './MessageTextarea';
import getMessages from '../../../api/messages/getMessages';
import UserAuthContext from '../../../contexts/UserAuthContext';
import initSocketIo from '../../../utils/socketIo';

export default function ChatSide({ isDetailsClosed, onOpenDetails, roomId }) {
  
  // get logged in user
  const { isLoggedIn } = useContext(UserAuthContext);
  const chatBox = useRef(null);
  const [newMsg, setNewMsg] = useState(false);
  const [messages, setMessages] = useState({
    loading: true,
    data: [],
  });

  // init with the roomId to join the user.
  const socketIo = initSocketIo('msgs', {
    query: { roomId }
  });

  // socketIo.on('connect', () => console.log('Connected...'));

  // when user send a new message
  const handleNewMsgSent = () => socketIo.emit('new_msg_sent', { roomId });

  // when we get a new message
  socketIo.on('new_msg', (msg) => {
    console.log('NEW MESSAGE', msg);
    setNewMsg(true);
  });

  useEffect(() => {
    (async function () {
      chatBox.current.scrollTop = chatBox.current.scrollHeight;
      // console.dir(chatBox.current);
      // chatBox.current.scrollIntoView({ behavior: "smooth" })
      try {
        const respData = await getMessages(roomId);
        setMessages({
          loading: false,
          data: respData.data,
        });
      } catch (err) {
        setMessages({
          loading: false,
          data: [],
        });
      }
      if(newMsg){
        setNewMsg(false);
      }
    }());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newMsg]);

  return (
    <ChatSideWrapper isDetailsClosed={isDetailsClosed}>
      <ChattingWithHeader>
        <ChatTitle> Chat </ChatTitle>
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
        { messages.data.map((msg, i) => (
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
        )) }
      </ChatContent>
      <MessageTextarea
        roomId={roomId}
        onNewMsgSent={handleNewMsgSent}
      />
    </ChatSideWrapper>
  );
}
