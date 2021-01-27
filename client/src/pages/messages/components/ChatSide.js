import React, { useContext, useEffect, useState } from 'react';
import {useFormik} from 'formik';
import {
  ChatContent, ChatSideWrapper, ChattingWithHeader,
  ChatTitle, ClearFixFloat, MsgAvatar, MsgBubble,
  MsgDate, MsgInput, MsgInputWrapper, MsgText,
  MsgTextWrapper, OpenDetailsBtn, SendButton,
} from '../style';
import MessageTextarea from './MessageTextarea';
import getMessages from '../../../api/messages/getMessages';
import UserAuthContext from '../../../contexts/UserAuthContext';

export default function ChatSide({ isDetailsClosed, onOpenDetails, roomId }) {

  const [messages, setMessages] = useState({
    loading: true,
    data: [],
  });

  // get logged in user
  const { isLoggedIn } = useContext(UserAuthContext);

  useEffect(() => {
    (async function () {
      try {
        const respData = await getMessages(roomId);
        console.log('Data: ', respData);
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
    }());
  }, []);

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
      <ChatContent>
        { messages.data.map((msg, i) => (
          <MsgBubble isMe={isLoggedIn.userid === msg.msg_from}>
            <div>
              <MsgAvatar>
                { isLoggedIn.userid === msg.msg_from ? null : <img src={msg.image} alt="" /> }
              </MsgAvatar>
              <MsgTextWrapper>
                <MsgText>{msg.msg}</MsgText>
                <MsgDate>2 min ago</MsgDate>
              </MsgTextWrapper>
            </div>
            <ClearFixFloat />
          </MsgBubble>
        )) }
      </ChatContent>
      <MessageTextarea roomId={roomId} />
    </ChatSideWrapper>
  );
}
