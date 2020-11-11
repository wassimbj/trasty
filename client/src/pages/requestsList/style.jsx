import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const UserRequestCardWrapper = styled(Link)`
   padding: 0.75rem;
   border-radius: 5px;
   margin-bottom: 1.5rem;
   box-shadow: 0 0 5px rgba(0,0,0,0.15);
   display: block;
   transition: 300ms;
   &:hover { box-shadow: 0 0px 3px rgba(0,0,0,0.35); }
`;

export const RequesterInfo = styled.div`
   display: flex;
   align-items: center;

   & img { border-radius: 30px; max-width: 45px; }

   & > div { 
      margin-left: 0.5rem;
      & span { display: block; font-size: 15px; }
      & span:nth-child(2) { color: #999; font-size: 14px; }
   }
`;

export const ProductDetails = styled.div`
   display: flex;
   align-items: end;
   margin: 1.5rem 0 0.5rem;
   & > div { width: 100% }
   & img { 
      border-radius: 5px;
      max-width: 150px;
      margin-right: 0.75rem;
      border: 1px solid rgba(0,0,0,0.12);
      display: block;
      object-fit: cover;
   }
   & > div > p { font-size: 14px; }
   & > div > p span { color: #8f8f95; }

   & h2 { font-weight: bold; font-size: 17px; margin-bottom: 0.5rem;}

   @media(max-width: 500px){
      // flex-wrap: wrap;
      & img{ max-width: 100px; max-height: 100px; }
      // & > div > p { font-size: 13px; }
      // & h2 { font-size: 16px; }
   }
`;

export const ProductPrice = styled.div`
   font-size: 14px;
   & > p span:first-child { color: #8f8f95; margin-bottom: 0.35rem; margin-right: 0.25rem; display: inline-block;}
   padding: 0.5rem 1rem;
   background: rgb(38,80,255,0.065);
   width: 100%;
   border-radius: 5px;

   & .price span:last-child, 
   & .reward span:last-child { font-size: 16px; font-weight: 500; }
   & .buyLocation span:last-child { color: rgba(0,0,0,0.65) }
  //  & .buyLocation span:last-child img { width: 50px; display: inline-block; }
`;
