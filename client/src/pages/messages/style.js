import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const ChatSideWrapper = styled.div`
position: relative;
overflow: hidden;
width: ${(props) => (props.isDetailsClosed ? '70%' : '45%')};
transition: 250ms;
@media(max-width: 900px){
  width: 0%;
  display: none;
}
`;

export const ChatContent = styled.div`
overflow-y: auto;
height: 86%;
padding: 3rem 1rem;
`;

export const ChattingWithHeader = styled.div`
padding: 0 1rem;
display: flex;
align-items: center;
justify-content: space-between;
font-size: 17px;
border-bottom: 1px solid rgba(0,0,0,0.1);
height: 70px;
`;

export const MsgInputWrapper = styled.div`
margin-top: 1rem;
border-top: 1px solid rgba(0,0,0,0.1);
display: flex;
position: absolute;
bottom: 0;
width: 100%;
background: #fff;
padding: 1rem;
`;

export const MsgInput = styled.textarea`
display: inline-block;
padding: 0.5rem;
resize: none;
// border: 2px solid #f00;
width: 100%;
&:focus{ outline: none; }
`;

export const SendButton = styled.button`
padding: 0.5rem 1rem;
display: inline-block;
background: #333; color: white;
border-radius: 5px;
margin-left: 0.5rem;
`;

export const OpenDetailsBtn = styled.span`
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

export const MsgAvatar = styled.div`
position: absolute;
left: 0;
top: 0;
& img { width: 45px; height: 45px; object-fit: cover; border-radius: 50px; }
`;

export const MsgTextWrapper = styled.div`
margin-left: 55px;
position: relative;
display: inline-block;
float: left;
`;

export const MsgText = styled.p`
background-color: #eaeaea;
border-radius: 50px;
padding: 12px 18px;
position: relative;
display: inline-block;
line-height: 25px;
`;

export const MsgDate = styled.span`
  display: block;
  font-size: 13px;
  color: #bababa;
  padding: 0 0.5rem;
`;

export const ClearFixFloat = styled.div`
&:after{
  display: block;
  clear: both;
  content: "";
}
`;

export const MsgBubble = styled.div`
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

export const ChattingWithUserProfileLink = styled(Link)`
  display: block;
  font-weight: bold;
`;

export const CardLink = styled(Link)`
  padding: 0.5rem;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  display: block;
  transition: 250ms;
  &:hover{ background: rgba(0,0,0,0.05); }
`;

export const RecentMsgUserInfo = styled.div`
  display: flex; align-items: center;

  & div { margin-left: 0.5rem; }
`;

export const UserImg = styled.img`
  width: 50px; height: 50px;
  border-radius: 15px;
  box-shadow: 0 0 2px rgba(0,0,0,0.15);
  object-fit: cover;
`;

export const UserName = styled.span`
  display: block;
  font-weight: 500;
`;

export const RecentMsgDate = styled.span`
  display: block;
  font-size: 13px;
  color: #b1b1b1;
`;

export const RecentMsg = styled.p`
  display: block;
  font-size: 14px;
  color: gray;
  margin-left: 3.5rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  ${(props) => props.isNew && css` font-weight: 500; color: #333; `}
`;

// export const ChatBadge = styled.span`
//   padding: 0.25rem 0.5rem;
//   border-radius: 30px;
//   font-size: 13px;
//   font-weight: 500;
// `;

// export const NewOfferBadge = styled(ChatBadge)`
//   background: #e91e631a;
//   color: #E91E63;
// `;

// export const PendingOfferBadge = styled(ChatBadge)`
//   background: #03a9f41c;
//   color: #03A9F4;
// `;

// export const AcceptedOfferBadge = styled(ChatBadge)`
//   background: #4caf502e;
//   color: #4CAF50;
// `;

export const FlexBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
