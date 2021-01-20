import React from 'react';
import {
  ChatContent, ChatSideWrapper, ChattingWithHeader,
  ChatTitle, ClearFixFloat, MsgAvatar, MsgBubble,
  MsgDate, MsgInput, MsgInputWrapper, MsgText,
  MsgTextWrapper, OpenDetailsBtn, SendButton,
} from '../style';

export default function ChatSide({ isDetailsClosed, onOpenDetails, roomId }) {
  return (
    <ChatSideWrapper isDetailsClosed={isDetailsClosed}>
      <ChattingWithHeader>
        <ChatTitle> Chat </ChatTitle>
        {
          isDetailsClosed
            ? (
              <OpenDetailsBtn onClick={onOpenDetails}>
                See Details
              </OpenDetailsBtn>
            )
            : null
        }
      </ChattingWithHeader>
      <ChatContent>
        {/* { [...Array(20)].map((_, i) => (
          <MsgBubble isMe={i % 2 === 0}>
            <div>
              <MsgAvatar>
                { i % 2 === 0 ? null : <img src="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg" alt="" /> }
              </MsgAvatar>
              <MsgTextWrapper>
                <MsgText>Hello this is a msg, Hello this is a msg Hello this is a msg</MsgText>
                <MsgDate>2 min ago</MsgDate>
              </MsgTextWrapper>
            </div>
            <ClearFixFloat />
          </MsgBubble>
        )) } */}
      </ChatContent>
      <MsgInputWrapper>
        <MsgInput rows="1" placeholder="write your message..." />
        <SendButton> Send </SendButton>
      </MsgInputWrapper>
    </ChatSideWrapper>
  );
}
