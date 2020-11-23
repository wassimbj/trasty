import React from 'react';
import styled, { css } from 'styled-components';

const ChatSideWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: ${(props) => (props.isDetailsClosed ? '70%' : '45%')};
  transition: 250ms;
  @media(max-width: 900px){
    width: 0%;
    display: none;
  }
`;

const ChatContent = styled.div`
  overflow-y: auto;
  height: 86%;
  padding: 3rem 1rem;
`;

const ChattingWithHeader = styled.div`
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 17px;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  height: 70px;
`;

const MsgInputWrapper = styled.div`
  margin-top: 1rem;
  border-top: 1px solid rgba(0,0,0,0.1);
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #fff;
  padding: 1rem;
`;

const MsgInput = styled.textarea`
  display: inline-block;
  padding: 0.5rem;
  resize: none;
  // border: 2px solid #f00;
  width: 100%;
  &:focus{ outline: none; }
`;

const SendButton = styled.button`
  padding: 0.5rem 1rem;
  display: inline-block;
  background: #333; color: white;
  border-radius: 5px;
  margin-left: 0.5rem;
`;

const OpenDetailsBtn = styled.span`
  padding: 0.35rem 1rem;
  border-radius: 30px;
  cursor: pointer;
  background: rgb(38,80,255,0.12);
  color: #2650ff;
  font-size: 14px;
  font-weight: 500;
  transition: 250ms;
  &:hover{ background: rgb(38,80,255,0.15) }
`;

const MsgAvatar = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  & img { width: 45px; height: 45px; object-fit: cover; border-radius: 50px; }
`;

const MsgTextWrapper = styled.div`
  margin-left: 55px;
  position: relative;
  display: inline-block;
  float: left;
`;

const MsgText = styled.p`
  background-color: #eaeaea;
  border-radius: 50px;
  padding: 12px 18px;
  position: relative;
  display: inline-block;
  line-height: 25px;
`;

const MsgDate = styled.span`
  display: block;
  font-size: 13px;
  color: #bababa;
  padding: 0 0.5rem;
`;

const ClearFixFloat = styled.div`
  &:after{
    display: block;
    clear: both;
    content: "";
  }
`;

const MsgBubble = styled.div`
  display: block;
  position: relative;
  margin-bottom: 25px;

  ${(props) => props.isMe && css`
    ${MsgAvatar}{ right: 0; left: auto; }
    ${MsgTextWrapper}{
      margin-left: 0;
      margin-right: 10px;
      float: right;
    }
    ${MsgText}{
      background-color: #2650ff;
      color: #fff;
    }

    ${MsgDate}{
      text-align: right;
    }
  `}
`;

export default function ChatSide({ isDetailsClosed, onOpenDetails }) {
  return (
    <ChatSideWrapper isDetailsClosed={isDetailsClosed}>
      <ChattingWithHeader>
        <b> Ali batata </b>
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
        { [...Array(20)].map((_, i) => (
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
        )) }
      </ChatContent>
      <MsgInputWrapper>
        <MsgInput rows="1" placeholder="write your message..." />
        <SendButton> Send </SendButton>
      </MsgInputWrapper>
    </ChatSideWrapper>
  );
}
