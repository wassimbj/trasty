import styled from 'styled-components';

export const OfferCardContainer = styled.div`
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid rgba(0,0,0,0.1);
  margin-bottom: 1.5rem;
  transition: 250ms;
  &:hover{
    border: 1px solid rgba(0,0,0,0.25);
    background: rgba(0,0,0,0.05);
  }
`;

export const OfferByInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const UserImg = styled.img`
  width: 60px; height: 60px;
  object-fit: cover;
  border-radius: 50%;
  border: 1px solid rgba(0,0,0,0.1);
`;

export const UserNameAndRating = styled.div`
  margin-left: 0.5rem;
  & a { display: block; margin-bottom: 0.25rem; }
`;

export const UserName = styled.span` font-size: 14px; `;

export const OfferDate = styled.div`
  color: gray; font-size: 13px;
  display: inline-block;
`;

export const RatingSummary = styled.div`
  margin-top: 0.5rem;
`;

export const SingleOfferDetail = styled.div`
  margin-bottom: 0.5rem;
  display: flex; align-items: center;
  white-space: nowrap;
`;

export const DetailTitle = styled.div`
  color: #b8b8b8;
  margin-right: 0.65rem;
`;

export const ActionButtonWrapper = styled.div`
  display: flex;
`;

export const ActionButton = styled.span`
  display: block;
  width: 100%;
  text-align: center;
  padding: 0.5rem 1rem;
  font-weight: 500;
  border-radius: 5px;
  margin: 0 0.5rem;
  cursor: pointer;
`;

export const AcceptOfferButton = styled(ActionButton)`
  background: #81b214; color: #fff;
  transition: 250ms;
  &:hover{ background: #74a800 }
`;

export const RefuseOfferButton = styled(ActionButton)`
  background: #ff2c2c; color: #fff;
  transition: 250ms;
  &:hover{ background: #ea0000 }
`;

export const EmptyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75%;
`;

export const NoOffersText = styled.p`
  font-size: 19px;
  font-weight: 600;
  color: #333;
`;

export const NoOffersIcon = styled.span`
  display: block;
  text-align: center;
  & svg { margin: 0 auto; color: #ccc; }
`;

export const Wrapper = styled.div`
padding: 1rem;
`;

export const ContentContainer = styled.div`
padding-top: 5rem;
max-width: 900px;
margin: 0 auto;
`;

export const Title = styled.span`
font-weight: bold;
font-size: 25px;
display: block;
`;

export const HeaderWrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding-bottom: 2rem;
border-bottom: 1px solid rgba(0,0,0,0.1);
`;

export const RequestsLink = styled.a`
display: block;
border: 1px solid rgba(0,0,0,0.15);
color: #555;
padding: 0.5rem 1rem;
border-radius: 30px;
font-size: 14px;
transition: 250ms;
&:hover{ color: #222; border-color: #333; }
`;

export const OffersWrapper = styled.div`
max-width: 600px;
margin: 3rem auto;
`;

export const OfferCardWrapper = styled.div`
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid rgba(0,0,0,0.15);
  position: relative;
`;

export const TravelerInfo = styled.div`
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
  & span{ display: inline-block; margin-right: 0.5rem }
  &:not(:last-child){ margin-bottom: 0.5rem }
  & .icon{ margin-right 0; }
  & .hint{ color: #5c5c5c; }
  & .mark{
    font-weight: 500;
    color: #222;
  }
`;

export const OfferReward = styled.div`
  margin-top: 0.5rem;
  & span{ display: inline-block; margin-right: 0.5rem }
  & .icon{ margin-right 0; }
  & .hint{ color: #5c5c5c; }
  & .mark{
    font-weight: 500;
    color: #000;
  }
`;

export const GoToChatBtn = styled.a`
  display: block;
  background: rgb(38, 80, 255, 0.25);
  color: #2650ff;
  max-width: 150px;
  margin: 1rem auto 0;
  border-radius: 3px;
  padding: 5px 5px;
  font-weight: 500;
  transition: 200ms;
  &:hover{background: rgb(38, 80, 255, 0.35);}
`;

export const ActionBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  // justify-content: center;
  margin-top: 1rem;
`;

export const ActionBtn = styled.span`
  display: flex;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  transition: 250ms;
  & svg { margin-right: 0.25rem; }
  font-weight: 500;
`;

export const DeleteBtn = styled(ActionBtn)`
  background: rgba(233, 30, 99, .18);
  color: #E91E63;
  &:hover{
    background: rgba(233, 30, 99, .25);
  }
`;

export const AcceptBtn = styled(ActionBtn)`
  margin-right: 1.5rem;
  background: rgba(76, 175, 80, .21);
  color: #4CAF50;
  &:hover{
    background: rgba(76, 175, 80, .35);
  }
`;
