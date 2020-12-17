import styled from 'styled-components';

export const RequestDetailsContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   @media(min-width: 992px){
      margin-top: 5rem;
   }
   margin-bottom: 10rem;
`;

export const ProductDetailsContainer = styled.div`
   padding-left: .5rem;
   padding-right: .5rem;
   width: 100%;
   order: 0;
   @media (min-width: 992px){
      width: 65%;
   }

   & > .wrapper {
      border: 1px solid rgba(0,0,0,0.1);
      border-radius: 5px;
      padding: 1rem;
      @media(max-width: 992px){
         border: none !important;
         border-radius: 5px 5px 0 0 !important;
         padding-left: 0;
         padding-right: 0;
      }
   }

`;

export const RequestSummaryContainer = styled.div`
   padding-left: .5rem;
   padding-right: .5rem;
   width: 100%;
   order: 1;
   @media (min-width: 992px){
      width: 35%;
   }

   & > .wrapper {
      border: 1px solid rgba(0,0,0,0.1);
      border-radius: 5px;
      padding: 1rem;
      @media(max-width: 992px){
        border-radius: none !important;
        border-right: none;
        border-left: none;
        padding-left: 0;
        padding-right: 0;
      }
      
      // @media(min-width: 992px){
      //   position: sticky;
      //   top: 55px;
      // }
   }
`;

export const RequesterInfoWrapper = styled.div`
   text-align: center;
   border-bottom: 1px solid rgba(0,0,0,0.1);
   padding: 0 0 1rem 0;
   & img {
      width: 85px;
      height: 85px;
      border-radius: 50px;
      margin: 0 auto;
      box-shadow: 0 0 2px 1px rgba(0,0,0,0.25);
   }
   & small { display: block; color: gray; }
`;

// export const SendMsgButton = styled.button`
//   margin-top: 1rem;
//   padding: 0.5rem;
//   width: 100%;
//   max-width: 125px;
//   border-radius: 50px;
//   display: inline-block;
//   text-align: center;
//   color: rgb(38, 80, 255);
//   background: transparent;
//   border: 1px solid rgb(38, 80, 255);
//   outline: none;
//   transition: all 250ms ease-in-out 0s;
//   font-size: 13px;

//   &:hover{
//     background: rgb(38, 80, 255);
//     color: white;
//   }
// `;

export const DeliveryDetailsWrapper = styled.div`
   border-top: 1px solid rgba(0,0,0,0.1);
   padding: 1rem 0 0;
   & p {
      display: flex;
      align-items: center;
      margin-bottom: 0.5rem;   
      & span { color: gray; margin: 0 0.35rem; display: inline-block; }
   }
`;

export const AdditionalProductDetailsWrapper = styled.div`
   border-top: 1px solid rgba(0,0,0,0.1);
   padding: 1.5rem 0 0;
   display: flex;
   align-items: center;
   justify-content: space-between;
   flex-wrap: wrap;
   & p {
      margin-bottom: 0.5rem;
      text-align: center;
      & span { display: block; text-align: center; }
      & span:first-child { color: #a7a7a7; font-size: 14px;}
      & a {
         color: #5b7bff; 
         &:hover { color: #2650ff }
      }

      @media(max-width: 415px){
        margin: 0.75rem 1rem;
      }
   }
`;

export const ProductImg = styled.img`
   max-width: 100%;
   padding: 2rem 0;
   margin: 0 auto;
`;

export const ProductTitle = styled.h2`
   font-size: 20px;
   border-top: 1px solid rgba(0,0,0,0.1);
   padding: 1rem 0;
`;

export const ProductDescription = styled.p`
   padding: 1rem 0;
   border-top: 1px solid rgba(0,0,0,0.1);

   & span { color: #a7a7a7; display: block; margin-bottom: 0.5rem; font-size: 14px; }
`;

export const RequestAmountsDetailsWrapper = styled.div`
   margin: 0.75rem 0;
`;

export const TravelerReward = styled.div`
   & b { font-size: 19px; font-weight: bold; }
`;

export const ProductPrice = styled.p`
   color: gray;
   margin: 0.5rem 0;
`;

export const RequestAmounts = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 17px;
  color: #757575;
  // font-weight: 500;
  &:not(:last-child) { margin-bottom: 0.75rem; }

  & p svg { display: inline-block; }
`;

export const TotalAmount = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 17px;
  color: #2650ff;
  margin-top: 0.75rem;
  font-weight: 500;

  & p svg { display: inline-block; }

  &:last-child { color: #000 }
`;

export const OffersNumber = styled.div`
   color: #2650ff
`;
