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
   }
`;

export const RequesterInfoWrapper = styled.div`
   text-align: center;
   border-bottom: 1px solid rgba(0,0,0,0.1);
   padding: 1rem 0;
   & img {
      width: 85px;
      height: 85px;
      border-radius: 30px;
      margin: 0 auto;
   }
   & small { display: block; color: gray; }
`;

export const SendMsgButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem;
  width: 100%;
  max-width: 125px;
  border-radius: 50px;
  display: inline-block;
  text-align: center;
  color: rgb(38, 80, 255);
  background: transparent;
  border: 1px solid rgb(38, 80, 255);
  outline: none;
  transition: all 250ms ease-in-out 0s;
  font-size: 13px;

  &:hover{
    background: rgb(38, 80, 255);
    color: white;
  }
`;

export const DeliveryDetailsWrapper = styled.div`
   border-top: 1px solid rgba(0,0,0,0.1);
   padding: 1rem 0;
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
   & p {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.5rem;   
      & span:first-child { color: gray; }
      & a {
         color: #5b7bff; 
         &:hover { color: #2650ff }
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
   padding: 1rem 0 0.5rem;
   border-top: 1px solid rgba(0,0,0,0.1);

   & span { color: #a7a7a7; display: block; margin-bottom: 0.5rem; font-size: 14px; }
`;

export const RequestAmountsDetailsWrapper = styled.div`
   margin: 0.7rem 0;
   padding-top: 1rem;
`;

export const TravelerReward = styled.div`
   & b { font-size: 19px; font-weight: bold; }
`;

export const ProductPrice = styled.p`
   color: gray;
   margin: 0.5rem 0;
`;

export const OffersNumber = styled.div`
   color: #2650ff
`;

export const OffersWrapper = styled.div`
  order: 2;
  & > span {
    padding: 1.5rem 0;
    display: block;
    text-align: center;
  }
  width: 100%;
  @media(min-width: 992px){
    width: 63.5%;
    margin-top: -9.5rem;
    margin-left: 0.5rem;
  }
`;

export const UserOfferCardWrapper = styled.div`
  border: 1px solid rgba(0,0,0,0.13);
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 2rem;
`;

export const OfferCardhead = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  & .userInfo {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 1rem;
    & img {
      margin-right: 0.5rem;
      width: 45px;
      height: 45px; 
      border-radius: 50px;
      box-shadow: 0 0 3px rgba(0,0,0,0.5);
    }
    & .userName > b, & .userName > small { display: block; }
    & .userName small { color: gray; }
  }
`;

export const OfferDeliveryInfo = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  & b { margin: 0 0.5rem; }
  padding: 1rem 0;

  & svg {
    // color: #2650ff;
    // background: #2650ff36;
    color: gray;
    border-radius: 50px;
    padding: 0.15rem;
    margin-right: 0.25rem;
  }

  & .static{ color: gray; }
`;

export const OfferReward = styled.p`
  padding-top: 1rem;
  font-size: 14px;
  border-top: 1px solid rgba(0,0,0,0.1);
`;

export const NoOffersMsg = styled.p`
  background: white;
  padding: 1rem;
  color: gray;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 5px;
  margin: 1rem 0;
  text-align: center;
`;
