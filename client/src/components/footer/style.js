import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.footer`
   // margin-top: 5rem;
   padding: 2rem 5rem;
   background: #000000;
   @media(max-width: 500px){
     padding: 2rem 2rem;
   }

   & .flexit{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
   }
`;

export const SocialLink = styled.a`
   display: inline-block;
   margin-right: 0.75rem;
   color: #555555;
   transition: 250ms;
   &:hover{
      color: #666666;
   }
`;

export const LeftSideLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const LinksTitle = styled.span`
   font-weight: bold;
   color: #717e8f;
   display: block;
   margin-bottom: 0.5rem;
`;

export const LeftSideLink = styled(Link)`
   color: #717e8f;
   transition: 250ms;
   &:hover{
      color: #999999;
   }
   line-height: 1.8;
`;

export const LinksWrapper = styled.div`
  @media(min-width: 300px){
     margin-right: 2rem;
  }
  @media(max-width: 450px){
    margin-top: 1.5rem;
  }
`;
