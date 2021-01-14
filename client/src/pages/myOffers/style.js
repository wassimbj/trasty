import styled from 'styled-components';

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
  & span{ display: inline-block; margin-right: 0.5rem }
  &:not(:last-child){ margin-bottom: 0.5rem }
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

export const Status = styled.div`
  margin-top: 1rem;
  text-align: center;
  & span{ display: inline-block; margin-right: 0.5rem }
  & .icon{ margin-right 0; }
  & .hint{
    color: #607D8B;
    // font-weight: 500;
  }
  & .statushint{
    padding: 2px 10px;
    border-radius: 30px;
    font-weight: 500;
  }
  & .accepted{
    background: rgb(76, 175, 80, .21);
    color: #4CAF50;
  }
  & .pending{
    background: rgb(255, 152, 0, .25);
    color: #FF5722;
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

export const DeleteBtn = styled.span`
  display: inline-block;
  padding: 5px;
  background: #f55555;
  border-radius: 50%;
  position: absolute;
  top: 3%;
  right: 3%;
  cursor: pointer;
  transition: 250ms;
  background: rgb(233, 30, 99, .18);
  color: #E91E63;
  &:hover{
    background: rgb(233, 30, 99, .25);
  }
`;

export const NoOffersMsg = styled.div`
  font-weight: 500;
  text-align: center;
  padding: 3rem 0;
`;
