import styled from 'styled-components';

export const OfferCardContainer = styled.div`
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid rgba(0,0,0,0.1); 
  margin-bottom: 1.5rem;
  transition: 250ms;
  &:hover{
    border: 1px solid rgba(0,0,0,0.35); 
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

export const UserName = styled.span` font-weight: 500; `;

export const OfferDate = styled.div`
  color: gray; font-size: 13px;
  display: inline-block;
`;

export const RatingSummary = styled.div`
  display: flex; align-items: center;
  & .def { color: #b8b8b8; font-size: 13px; margin-right: 0.35rem; }
`;

export const OfferDetails = styled.div`
  padding: 1rem 0;
  padding-left: 1rem;
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
  justify-content: space-between;
`;

export const ActionButton = styled.span`
  display: block;
  // width: 100%;
  text-align: center;
  padding: 0.5rem 1rem;
  font-weight: 500;
  border-radius: 50px;
  cursor: pointer;
`;

export const AcceptOfferButton = styled(ActionButton)`
  background: #81b214; color: #fff;
  &:hover{ box-shadow: 0 0 0px 3px rgb(129, 178, 20, 0.38); }
  transition: 250ms;
  
  &:hover{ background: #74a800 }
`;

export const RefuseOfferButton = styled(ActionButton)`
  background: #ff2c2c; color: #fff;
  transition: 250ms;
  &:hover{ box-shadow: 0 0 0px 3px rgb(255, 44, 44, 0.38); }

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
