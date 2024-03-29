import styled from 'styled-components';

export const RequestDetailsContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
  //  @media(min-width: 992px){ margin-top: 5rem; }
   margin-bottom: 10rem;
   @media(max-width: 992px){ max-width: 550px; margin: 0 auto 10rem; }
`;

export const MyRequestMsg = styled.div`
  background: rgba(38, 80, 255, 0.12);
  color: #2650ff;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  margin: 0 0.5rem 1rem;
  & > span{ vertical-align: middle; }

  & svg{ margin-right: 0.5rem; display: inline; }
  // & a {
  //   border-bottom: 1px solid #999;
  //   color: #333;
  //   &:hover{ color: #000 }
  // }
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
`;

export const RequestSummaryCard = styled.div`
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 5px;
  background: #fff;
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
`;

export const ShareCard = styled.div`
  margin-top: 1rem;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 5px;
  background: #fff;
  padding: 1rem 0 0;
  @media(max-width: 992px){
    margin-top: 0;
    border-radius: none !important;
    border-top: none;
    border-right: none;
    border-left: none;
    padding-left: 0;
    padding-right: 0;
  }

  & .shareHint{
    display: block;
    margin-bottom: 0.75rem;
    text-align: center;
  }
`;
export const ShareBtnsWrapper = styled.div`
  display: flex;
  border-top: 1px solid rgba(96, 125, 139, 0.28);
`;

export const ShareBtnLink = styled.a`
  padding: 0.75rem 0.5rem;
  width: 100%;
  color: #607D8B;
  text-align: center;
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 200ms;
  & svg { margin-right: 0.5rem; }
  &:hover{ background: rgba(0,0,0,0.05); }
  &:not(:last-child){
    border-right: 1px solid rgba(96, 125, 139, 0.28);
  }
`;

export const ShareBtn = styled.button`
  position: relative;
  padding: 0.75rem 0.5rem;
  width: 100%;
  color: #607D8B;
  text-align: center;
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 200ms;
  & svg { margin-right: 0.5rem; }
  &:hover{ background: rgba(0,0,0,0.05); }
  &:not(:last-child){
    border-right: 1px solid rgba(96, 125, 139, 0.28);
  }
  &:focus{ outline: none; }
`;

export const TextCopyElem = styled.textarea`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  &:focus{ outline: none; }
`;

export const SuccessCopyHint = styled.span`
  position: absolute;
  top: -10px;
  font-size: 12px;
  animation: upToHide 200ms;

  @keyframes upToHide{
    from{ top: -5px; opacity: 0; }
    to{ top: -10px; opacity: 1; }
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
   & .datePosted { display: block; color: gray; }
   & .userName {
     font-weight: 500;
     color: #333;
     &:hover{ color: #000; }
  }
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
   padding: 1rem 0 0;
   display: flex;
   align-items: center;
   justify-content: space-between;
   flex-wrap: wrap;
   & p {
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: center;
      max-width: 150px;
      & span { display: block; text-align: center; }
      & span:first-child { color: #a7a7a7; font-size: 14px;}
      & a {
         color: #5b7bff; 
         &:hover { color: #2650ff }
         white-space: nowrap;
      }

      @media(max-width: 415px){
        margin: 0.35rem;
      }
   }
`;

export const ProductImg = styled.img`
   max-width: 100%;
   padding: 2rem 0;
   margin: 0 auto;
   max-height: 700px;
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

export const AlreadyOfferedMsg = styled.div`
  padding: 0.5rem;
  text-align: center;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  margin-top: 1rem;
  color: #2c2c2c;
  font-weight: 500;
  background: #f6f6f6;
`;

export const DeleteOfferBtn = styled.span`
   display: inline-block;
   text-align: center;
   margin-top: 0.5rem;
   color: #555;
   &:hover{ color: #000 }
   font-weight: 400;
   cursor: pointer;
   border-bottom: 1px dotted #999;
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
//  &:last-child { color: #000 }
`;

export const OffersNumber = styled.div`
   color: #2650ff
`;

export const NoRequestFoundMsg = styled.div`
  margin-top: 3rem;
  padding: 1rem;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
`;
