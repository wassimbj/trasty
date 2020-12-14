import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.footer`
   padding: 2rem 5rem;
   background: rgba(0,0,0,0.035);
   border-top: 1px solid rgba(0,0,0,0.1);
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
      color: #333;
   }
   margin-top: 0.5rem;
`;

export const LeftSideLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const LinksTitle = styled.span`
   font-weight: 500;
   color: rgb(25, 25, 25);
   display: block;
   margin-bottom: 0.5rem;
`;

export const LeftSideLink = styled(Link)`
   color: #717e8f;
   transition: 250ms;
   &:hover{
      color: #555;
      // border-bottom: 1px solid #555;
   }
  //  line-height: 1.8;

  //  ------------
  display: inline-block;
  margin-right: 0.5rem;
`;

export const LinksWrapper = styled.div`
  @media(min-width: 300px){
     margin-right: 2rem;
  }
  @media(max-width: 660px){
    margin-top: 1.5rem;
  }
`;
