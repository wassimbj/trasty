import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Banner = styled.div`
//   background: rgb(38,80,255);
  padding: 2rem 0.2rem;
  border-radius: 0 0 15px 15px;
`;

export const HomeTitle = styled.h2`
   text-align: center;
   font-weight: bold;
   margin-bottom: 2.5rem;
   font-size: 1.5rem;
   color: #718096;
`;

export const Wrapper = styled.div`
   margin: 5rem auto;
   @media(min-width: 992px){
      max-width: 650px;
   }
`;

export const CardsContainer = styled.div`
   margin-left: -.5rem;
   margin-right: -.5rem;
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
`;

export const CardWrapper = styled.div`
   padding-left: .5rem;
   padding-right: .5rem;
   margin: 10px 0;
   display: block;
   @media(min-width: 500px){
      width: 50%;
   }
   width: 100%;
`;

export const Card = styled(Link)`
   background: ${(props) => props.bg};
   box-shadow: 0 2px 20px ${(props) => props.shadowcolor};
   padding: 15px 10px;
   border-radius: 5px;
   display: block;
   color: white;
   text-shadow: 0 0 3px rgba(0,0,0,0.20);
   transition: 250ms ease-in;
   & .goIcon { transition: 250ms ease-in; }
   &:hover{
      box-shadow: none;

      & .goIcon { transform: translateX(5px); }
   }
`;

export const P = styled.p`
   font-weight: bold;
   line-height: 1.7;
   text-align: center;
   color: #f3f5f7;
   @media(min-width: 550px){
      font-size: 18px;
   }
   font-size: 14px;
   & svg { margin: 0 auto; margin-bottom: 5px }
`;

export const Purpose = styled.span`
   color: rgba(255,255,255,0.75);
   display: block;
   text-align: center;
   margin-top: 1.25rem;
   @media(min-width: 550px){
      font-family: 13px;
      font-size: 16px;
   }
   font-size: 12px;
`;

export const JoinCard = styled.div`
   margin: 3rem auto;
   background: white;
   border: 1px solid rgba(0,0,0,0.15);
   border-radius: 10px;
   padding: 20px 15px;
   display: flex;
   align-items: center;
   flex-wrap: wrap;
   justify-content: space-between;
   max-width: 600px;
`;

export const JoinCardTitle = styled.h2`
   font-weight: bold;
   font-size: 20px;
   color: rgba(0,0,0,0.65);
`;

export const JoinCardP = styled.p`
   color: #8e8e8e;
`;

export const JoinLink = styled(Link)`
   background: rgb(40,199,111,0.24);
   color: #28c76f;
   font-weight: bold;
   padding: 10px 15px;
   border-radius: 30px;
   text-align: center;
   display: block;
   transition: 300ms;
   &:hover {
      background: #28c76f;
      color: white;
   }
   @media(max-width: 450px){
      margin-top: 1rem;
   }
`;
