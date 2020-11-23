import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  position: fixed;
  left: 0; right: 0;
  top: 5%; bottom: 0;
  margin: 0.5rem auto 0;
  // @media(min-width: 600px){ width: 95%; }
  @media(max-width: 600px){ bottom: 5%; margin: 0.25rem; }
  border-top: 1px solid rgba(0,0,0,0.1);
  
`;

export const SidesWrapper = styled.div`
  display: flex;
  height: 100%;
`;

export const RequestsSide = styled.div`
  padding: 0 1rem 1rem;
  border-right: 1px solid rgba(0,0,0,0.1);
  width: 40%;

  @media(max-width: 500px){
    padding: 1rem 0.25rem;
  }

  @media(max-width: 900px){
    width: 100%;
    border-right: none;
  }
  overflow-y: auto;
`;

export const OffersSide = styled.div`
  padding: 0 1rem 1rem;
  width: 60%;
  @media(max-width: 500px){
    padding: 1rem 0.25rem;
  }
  @media(max-width: 900px){
    width: 0%;
    visibility: hidden;
    padding: 0;
  }
  overflow-y: auto;
`;

export const OfferCardContainer = styled.div`
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid rgba(0,0,0,0.1); 
  margin-bottom: 1.5rem;
  transition: 250ms;
  &:hover{
    border: 1px solid rgba(0,0,0,0.18); 
  }
`;

export const OfferByInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const UserImg = styled.img`
  width: 70px; height: 70px;
  object-fit: cover;
  border-radius: 15px;
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
`;

export const ActionButton = styled.span`
  display: block;
  width: 100%;
  text-align: center;
  padding: 0.5rem 1rem;
  font-weight: 500;
  border-radius: 50px;
  margin: 0 1rem;
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

export const RequestCardContainer = styled.div`
  border: 1px solid rgba(0,0,0,0.1);
  padding: 1rem 0.5rem;
  border-radius: 5px;
  max-width: 100%;
  display: block;
  transition: 250ms;
  &:hover{ border-color: #2650ff; }
  margin-bottom: 1.5rem;
`;

export const RequestCardLink = styled(Link)`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const ProductInfo = styled.div`
  margin-left: 0.5rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ProductImg = styled.img`
  border-radius: 5px;
  max-width: 155px;
  width: 155px;
  height: 155px;
  display: block;
  object-fit: cover;
  @media(max-width: 370px){
    width: 110px;
    height: 110px;
  }
`;

export const ProductTitle = styled.span`
  display: block;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ProductPrice = styled.p`
  color: gray;
  // text-align: center;
  margin: 0.5rem 0;
  & span { color: black; font-weight: 500; margin-left: 0.25rem; }
`;

export const DeleteButton = styled.span`
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  background: rgb(255,0,0,0.1);
  transition: 250ms;
  &:hover{ background: rgb(255,0,0,0.15); }
  color: #000;
  text-align: center;
  margin-top: 1rem;
  display: flex; align-items: center; justify-content: center;
  color: #ff3939;
  width: 145px;
  @media(max-width: 350px){
    width: 120px;
    font-size: 14px;
    padding: 0.3rem 0.5rem;
  }
`;

export const OffersTotal = styled.div`
  background: rgb(38, 80, 255, 0.15);
  color: #2650ff;
  padding: 0.25rem 1rem;
  font-weight: 500;
  border-radius: 5px;
  text-align: center;
  display: block;
  margin-top: 1.5rem;
`;
