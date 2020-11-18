import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const UserRequestCardLink = styled(Link)`
   padding: 0.75rem;
   border-radius: 5px;
   margin-bottom: 1.5rem;
   border: 1px solid rgba(0,0,0,0.12);
   display: block;
   transition: 300ms;
   &:hover {
    border: 1px solid #2650ff;
   }
`;

export const RequesterInfo = styled.div`
   display: flex;
   align-items: center;
    margin-bottom: 1rem;
   & img { border-radius: 30px; max-width: 45px; }

   & > div { 
      margin-left: 0.5rem;
      & span { display: block; font-size: 15px; }
      & span:nth-child(2) { color: #999; font-size: 13px; }
   }
`;

export const DetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media(max-width: 600px){
    flex-wrap: wrap;
  }
`;

export const ProductDetails = styled.div`
   display: flex;
   align-items: end;
   white-space: nowrap;
   overflow: hidden;
   & > .requestDetails {
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
    margin-left: 0.75rem;
  }
   & img { 
      border-radius: 5px;
      max-width: 150px;
      width: 150px;
      height: 150px;
      border: 1px solid rgba(0,0,0,0.065);
      display: block;
      object-fit: cover;
   }
   & > div > p {
    font-size: 14px;
    margin-bottom: 0.25rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }
   & > div > p span { color: #8f8f95; }

   & h2 {
    font-weight: 600;
    font-size: 17px;
    margin-bottom: 0.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }

   @media(max-width: 380px){
    & img{ width: 110px; height: 110px; }
   }
`;

export const ProductPrice = styled.div`
  align-self: center;
  color: #2650ff;
  font-size: 15px;
  font-weight: 500;
  border-radius: 5px;
  align-self: center;
  text-align: center;
  & > span {
    margin-bottom: 0.35rem;
    display: block;
  }
  @media(min-width: 600px){
    margin-right: 4rem;
  }
  @media(max-width: 560px){
    width: 100%;
    margin-top: 1rem;
    & > span { display: inline-block; font-size: 14px; }
  }
`;
