import styled from 'styled-components';

export const CreateRequestWrapper = styled.div`
   display: flex;
   flex-wrap: wrap;
   margin-top: 5rem;
   margin-bottom: 10rem;
`;

export const ProductDetailsContainer = styled.div`
   padding-left: .5rem;
   padding-right: .5rem;
   width: 100%;
   & .title {
      display: block;
      font-weight: bold;
      font-size: 23px;
      margin-bottom: 1.5rem;
   }

   & .optinalHeading{ color: #8f8f95; margin-bottom: 1.5rem; }


   @media (min-width: 992px){
   width: 65%;
   }

   & > div {
   border: 1px solid rgba(0,0,0,0.1);
   border-radius: 5px;
   padding: 1rem;
   }
`;

export const ProductSummaryContainer = styled.div`
   padding-left: .5rem;
   padding-right: .5rem;
   width: 100%;s
   & .title { font-weight: bold; font-size: 23px; }
   @media (min-width: 992px){
   width: 35%;
   }

   @media(max-width: 989px){
   margin-top: 1rem;
   }

   & > div {
   border: 1px solid rgba(0,0,0,0.1);
   border-radius: 5px;
   padding: 1rem;
   }

   & .productTitle {
      font-weight: bold;
      font-size: 23px;
      display: block;
      padding: 0.5rem 0 1rem;
      border-bottom: 1px solid rgba(0,0,0,0.1);
      margin-bottom: 1.5rem;
   }

   & div > p{
      margin-bottom: 0.5rem; 
      display: block;
      color: #333333;
      & span { color: #8f8f95; }
   }

   & .productPrice {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 0 0.5rem;
      border-top: 1px solid rgba(0,0,0,0.1);
      margin-top: 1.5rem;
      flex-wrap;
      & > span { display: block }
      & span:last-child{ font-size: 22px; font-weight: bold; }
   }
`;

export const Input = styled.input`
   padding: 0.65rem 1rem;
   border-radius: 5px;
   background: #fff;
   &::placeholder{color: #999;}
   display: block;
   width: 100%;
   transition: 250ms ease-in-out;
   border: 1px solid rgba(0,0,0,0.15);
   &:hover{ border: 1px solid rgba(0,0,0,0.25); }
   &:focus{ border: 1px solid rgba(0,0,0,0.5); outline: none }
`;

export const TextArea = styled.textarea`
  padding: 0.65rem 1rem;
  border-radius: 5px;
  background: #fff;
  &::placeholder{color: #999;}
  display: block;
  width: 100%;
  transition: 250ms ease-in-out;
  border: 1px solid rgba(0,0,0,0.15);
  &:hover{ border: 1px solid rgba(0,0,0,0.25); }
  &:focus{ border: 1px solid rgba(0,0,0,0.5); outline: none }
`;

export const InputBlock = styled.div`
   margin-bottom: 2.5rem;

   & label{
    color: #333333;
    font-weight: 500;
    font-size: 15px;
    margin-bottom: 0.5rem;
    display: block;
   }
`;

export const WaitingSelect = styled.select`
  padding: 1rem;
  appearance: none;
  // width: 230px;
  display: block;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  background: #fff;
  border: 1px solid rgba(0,0,0,0.15);
  transition: 250ms;
  &:hover{ border: 1px solid rgba(0,0,0,0.25); }
  &:focus{
    border: 1px solid rgba(0,0,0,0.5);
    outline: none;
  }
`;

export const WebsiteLink = styled.div`
   display: flex;
   align-items: center;
   margin-top: 1rem;
   & span { color: #2650ff; }
   & span:first-child {
      margin-right: 0.25rem; background: rgb(231 236 255);
      border-radius: 30px;
      padding: 0.25rem;
   }
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & label{
    color: #333333;
    font-weight: 500;
    font-size: 15px;
    margin-bottom: 0.5rem;
    display: block;
  }

  & input{
    padding: 0.65rem 1rem;
    border-radius: 5px;
    background: #f1f1f1;
    &:focus{ outline: none }
    &::placeholder{color: #999;}
    display: block;
    transition: 250ms ease-in-out;
    width: 70px;
    &:focus{ background: #ededee; }
  }
`;

export const NextBtn = styled.button`
  display: inline-block;
  background: linear-gradient(rgb(38,80,255),rgb(0,49,255)) rgb(38,80,255);
  color: white;
  outline: none;
  text-align: center;
  padding: 0.75rem 0.75rem;
  border-radius: 5px;
  box-shadow: 0 3px 20px rgba(0,0,0,0.15);
  transition: 500ms;
  width: 100%;
  margin-top: 1rem;
`;

export const PriceSummaryTitle = styled.span`
   font-weight: bold;
   font-size: 20px;
   display: block;
   margin: 1.5rem 0;
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

export const PriceSummaryInfo = styled.div`
   color: #8f8f95;
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-bottom: 1rem;
   padding: 0 0.75rem;
`;

export const EstimatedTotal = styled.div`
   display: flex;
   align-items: center;
   border-top: 1px solid rgba(0,0,0,0.1);
   justify-content: space-between;
   margin-top: 1.5rem;
   padding: 1.5rem 0 0.75rem;
   & p { display: flex; align-items: center; }
   & strong { font-size: 22px; }
`;

export const InfoIcon = styled.span`
   color: #555;
   background: rgba(0,0,0,0.15);
   padding: 0.25rem;
   border-radius: 30px;
   margin-left: 0.75rem;
   display: inline-block;
`;

export const Notice = styled.div`
   background: rgb(38,80,255,0.15);
   // color: rgb(38,80,255,0.75);
   color: rgb(0,0,0,0.65);
   padding: 1rem;
   border-radius: 5px;
   margin: 1rem 0.5rem;
`;
