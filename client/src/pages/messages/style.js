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
  background: #2650ff; color: white;
  border-radius: 5px;
  margin-left: 0.5rem;
  &:hover{ background: #0e36e1 }
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

export const ChatTitle = styled.span`
  display: block;
  font-weight: 500;
`;

export const CardLink = styled(Link)`
  padding: 0.5rem 1rem;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  display: block;
  transition: 250ms;
  &:hover{ background: rgba(0,0,0,0.05); }

  ${(props) => props.isActive && css`
    background: rgba(0,0,0,0.065);
    &:hover{ background: rgba(0,0,0,0.065); }
  `}
`;

export const RecentMsgUserInfo = styled.div`
  display: flex; align-items: center;

  & div { margin-left: 0.5rem; }
`;

export const UserImg = styled.img`
  width: 50px; height: 50px;
  border-radius: 50%;
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

export const ChatBadge = styled.span`
  padding: 0.25rem 0.5rem;
  border-radius: 30px;
  font-size: 13px;
  font-weight: 500;
  display: inline-block;
  margin-top: 0.5rem;
`;

export const NewMsgBadge = styled.span`
  display: inline-block;
  background: #e91e631a;
  font-size: 13px;
  font-weight: 500;
  border-radius: 50%;
  color: #E91E63;
  width: 20px;
  padding: 1px 0;
  text-align: center;
  height: 20px;
`;

export const IsRequesterBadge = styled(ChatBadge)`
  background: #03a9f41c;
  color: #03A9F4;
`;

export const IsTravelerBadge = styled(ChatBadge)`
  background: #4caf502e;
  color: #4CAF50;
`;

export const FlexBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Container = styled.div`
  position: fixed;
  left: 0; right: 0;
  top: 5%; bottom: 0;
  margin: 0.5rem auto 0;
  // max-width: 1200px;
  @media(max-width: 600px){ bottom: 8%; top: 6%; margin: 0rem; }
  border: 1px solid rgba(0,0,0,0.1);
`;

export const SidesWrapper = styled.div`
  display: flex;
  height: 100%;
`;

export const RecentMessagesContainer = styled.div`
  // padding: 1rem;
  border-right: 1px solid rgba(0,0,0,0.1);
  width: 30%;

  @media(max-width: 900px){
    width: 100%;
    border-right: none;
  }
  overflow-y: auto;
`;

export const RecentMsgsTitle = styled.span`
  font-weight: 500;
  font-size: 17px;
  text-align: center;
  display: flex;
  align-items: center;
  // justify-content: center;
  padding: 0 1rem;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  height: 70px;
`;

export const OfferDetailsSide = styled.div`
  position: relative;
  overflow: hidden;
  width: ${(props) => (props.isDetailsClosed ? '0' : '25%')};
  visibility: ${(props) => (props.isDetailsClosed ? 'hidden' : 'visible')};
  transition: 250ms;
  white-space: nowrap;
  @media(max-width: 900px){
    width: 0%;
    display: none;
  }
  border-left: 1px solid rgba(0,0,0,0.1);
`;

export const OfferSideTitle = styled.div`
  font-weight: 500;
  font-size: 17px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  height: 70px;
`;

export const CloseDetailsBtn = styled.span`
  padding: 0.25rem;
  border-radius: 30px;
  cursor: pointer;
  // background: rgba(0,0,0,0.065);
  &:hover{ background: rgba(0,0,0,0.065) }
`;

export const NoMessageSelectedMsg = styled.div`
  text-align: center;
  margin-top: 8rem;
  height: 100%;
  font-weight: 500;
`;

export const NoMessagesMsg = styled.div`
  text-align: center;
  padding: 3rem 0.5rem;

  & .title{
    font-weight: 500;
    font-size: 18px;
  }

  & .subtitle{
    color: #555;
    margin-top: 0.5rem;
  }
`;
