import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MainContainer from '../../../components/mainContainer';

const ShopsContainer = styled.div`
   margin-top: 5rem;
   padding: 3rem 0;
   background: #f3f5f7;
   & p {
    display: block;
    text-align: center;
    color: rgba(0,0,0,0.65);
   }
`;

const ShopsTitle = styled.span`
   font-size: 32px;
   color: #121212;
   margin-bottom: 0.75rem;
   text-align: center;
   display: block;
`;

const ShopsLogos = styled.div`
   margin: 2.5rem 0;
   display: flex;
   align-items: center;
   text-align: center;
   overflow-x: auto;
   @media(min-width: 960px){
    justify-content: center;
   }
   & img{ margin: 0 1rem; display: block; text-align: center;}
`;

const ShopsLink = styled(Link)`
   border: 2px solid #2650ff;
   border-radius: 30px;
   padding: 0.75rem 0rem;
   color: #2650ff;
   transition: 250ms;
   width: 160px;
   display: block;
   text-align: center;
   margin: 0 auto;
   &:hover{
     background: #2650ff;
     color: white;
   }
`;

export default function Shops() {
  return (
    <ShopsContainer>
      <MainContainer>
        <ShopsTitle> Ship goods from any store in the world or locally </ShopsTitle>
        <p>
          Enjoy shopping at huge national retailers or small exclusive shops worldwide or locally
          and forget about the limitations.
        </p>

        <ShopsLogos>
          <img src="/images/logos/amazonlogo.png" width="90px" alt="Amazon" />
          <img src="/images/logos/nikelogo.png" width="75px" alt="Nike" />
          <img src="/images/logos/ebaylogo.png" width="90px" alt="ebay" />
          <img src="/images/logos/walmartlogo.png" width="100px" alt="walmart" />
          <img src="/images/logos/newbalancelogo.png" width="70px" alt="New Balance" />
          <img src="/images/logos/applelogo.png" width="70px" alt="Apple" />
          <img src="/images/logos/tayaralogo.png" width="110px" alt="AliExpress" />
          <img src="/images/logos/aliexpresslogo.png" width="110px" alt="AliExpress" />
          <img src="/images/logos/guccilogo.png" width="50px" alt="Gucci" />
          <img src="/images/logos/bestbuylogo.png" width="80px" alt="BestBuy" />
        </ShopsLogos>

        <ShopsLink to="/shops">
          Explore All Shops
        </ShopsLink>
      </MainContainer>
    </ShopsContainer>
  );
}
