import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const ChatSideWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: ${(props) => (props.isDetailsClosed && !props.isSmallScreen ? '70%' : '45%')};
  transition: 250ms;
  ${(props) => (props.isSmallScreen && 'width: 100%' )};
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
  padding: 0.5rem 2rem;
  display: inline-block;
  background: #2650ff; color: white;
  font-weight: 500;
  border-radius: 50px;
  margin-left: 0.5rem;
  &:hover{ background: #0e36e1 }
`;

export const DisabledSendButton = styled.span`
  padding: 0.5rem 2rem;
  display: inline-block;
  background: #ccc; color: #555;
  font-weight: 500;
  border-radius: 50px;
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
  border-radius: 5px;
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
  display: flex;
  align-items: center;
  font-weight: 500;
`;

export const CloseChatIcon = styled(Link)`
  display: inline-block;
  background: #f3f5f7;
  border-radius: 50%;
  margin-right: 0.5rem;
` 

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
  @media(max-width: 600px){ bottom: 0%; top: 8%; margin: 0rem; }
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
    ${props => props.isVisible && css`
      width: 0%;
    `}
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

export const DiscussDetailsSide = styled.div`
  overflow-y: auto;
  position: relative;
  overflow: hidden;
  width: ${(props) => (props.isDetailsClosed && !props.isSmallScreen ? '0' : '25%')};
  visibility: ${(props) => (props.isDetailsClosed && !props.isSmallScreen ? 'hidden' : 'visible')};
  transition: 250ms;
  white-space: nowrap;
  background: #fff;
  ${props => props.isSmallScreen && `
    position: fixed;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 60%;
    box-shadow: 0 0 20px rgba(0,0,0,0.15);
  `}
  ${props => props.isSmallScreen && props.isDetailsClosed && `
    bottom: -100%;
  `}
  
  border-left: 1px solid rgba(0,0,0,0.1);
`;

export const DetailsSideTitle = styled.div`
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

export const OfferCardWrapper = styled.div`
  padding: 0.5rem;
  border-radius: 10px;
  // border: 1px solid rgba(0,0,0,0.15);
  position: relative;
`;

export const ProductDetails = styled.div`
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0,0,0,0.15);
  & .title {
    font-size: 13px;
    font-weight: 500;
    color: #999;
    display: block;
    margin-bottom: 0.5rem;
  }
`;

export const ProductTitle = styled.a`
  // display: flex;
  // align-items: center;
  display: inline-block;
  & svg {display: inline-block;}
  color: #333;
  font-weight: 500;
  font-size: 17px;
  &:hover{ color: #000 }
`;

export const OfferDetails = styled.div`
  padding-top: 1rem;
  & .title {
    font-size: 13px;
    font-weight: 500;
    color: #999;
    display: block;
    margin-bottom: 0.5rem;
  }
`;

export const DeliveryDetails = styled.div`
  // display: flex;
  // flex-wrap: wrap;
  & span{ display: inline-block; margin-right: 0.5rem }
  &:not(:last-child){ margin-bottom: 0.75rem }
  & .icon{ margin-right 0; }
  & .hint{ color: #5c5c5c; }
  & .mark{
    font-weight: 500;
    color: #444;
    &:hover{ color: #121212 }
  }
`;

export const OfferReward = styled.div`
  margin-top: 0.5rem;
  & span{ display: inline-block; margin-right: 0.5rem }
  & .icon{ margin-right 0; }
  & .hint{ color: #5c5c5c; }
  & .mark{
    font-weight: 500;
    color: #2650ff;
  }
`;
