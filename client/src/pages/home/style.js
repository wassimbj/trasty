import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Banner = styled.div`
  border-radius: 0 0 15px 15px;
  margin: 0 auto;
  @media (min-width: 1200px) {
    // width: 1050px;
    padding-top: 0.5rem;
  }
`;

export const BannerContainer = styled.div`
  margin: 0 auto;
  padding: 0 1rem;
  @media (min-width: 980px){
    max-width: 1020px;
  }
  @media (min-width: 1320px){
    max-width: 1300px;
  }
`;

export const BannerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 995px) {
    flex-direction: column-reverse;
  }
`;

export const BannerItem = styled.div`
  @media (min-width: 1000px) {
    width: 50%;
  }

  & h1 {
    font-size: 50px;
    font-weight: bold;
    @media (max-width: 500px) {
      font-size: 35px;
    }
  }

  & p {
    color: #999999;
    font-size: 17px;
    margin-top: 1.25rem;
    display: block;
  }

  & img {
    margin: 0 auto;
  }
`;

export const BannerPostLink = styled(Link)`
  background: #2650ff;
  color: white;
  border: 1px solid #0f3eff;
  border-radius: 30px;
  padding: 0.75rem 1.5rem;
  display: inline-block;
  margin-top: 2rem;
  text-align: center;
  transition: 500ms;
  &:hover {
    background: #0f3eff;
  }
  @media(min-width: 401px){
    margin-right: 2rem;
  }

  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const BannerTravelLink = styled(Link)`
  border: 1px solid #2650ff;
  color: #2650ff;
  border-radius: 30px;
  padding: 0.75rem 1.75rem;
  display: inline-block;
  margin-top: 2rem;
  text-align: center;
  transition: 500ms;
  &:hover {
    background: #0f3eff1f;
  }
  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const CardsContainer = styled.div`
  margin-left: -0.5rem;
  margin-right: -0.5rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const CardWrapper = styled.div`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  margin: 10px 0;
  display: block;
  @media (min-width: 500px) {
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
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  transition: 250ms ease-in;
  & .goIcon {
    transition: 250ms ease-in;
  }
  &:hover {
    box-shadow: none;

    & .goIcon {
      transform: translateX(5px);
    }
  }
`;

export const P = styled.p`
  font-weight: bold;
  line-height: 1.7;
  text-align: center;
  color: #f3f5f7;
  @media (min-width: 550px) {
    font-size: 18px;
  }
  font-size: 14px;
  & svg {
    margin: 0 auto;
    margin-bottom: 5px;
  }
`;

export const Purpose = styled.span`
  color: rgba(255, 255, 255, 0.75);
  display: block;
  text-align: center;
  margin-top: 1.25rem;
  @media (min-width: 550px) {
    font-family: 13px;
    font-size: 16px;
  }
  font-size: 12px;
`;

export const JoinCard = styled.div`
  margin: 3rem auto;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.15);
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
  color: rgba(0, 0, 0, 0.65);
`;

export const JoinCardP = styled.p`
  color: #8e8e8e;
`;

export const JoinLink = styled(Link)`
  background: rgb(40, 199, 111, 0.24);
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
  @media (max-width: 450px) {
    margin-top: 1rem;
  }
`;

export const WhatYouCanDoContainer = styled.div`
  margin-top: 5rem;
  padding: 3rem 0;
  background: #f3f5f7;
`;

export const WhatYouCanDoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  & .col {
    width: 33%;
    @media (max-width: 768px) {
      width: 100%;
    }
    margin: 2rem 0;
    & .col-head {
      display: flex;
      align-items: center;
    }
    & .col-head span {
      color: #2650ff;
      font-size: 23px;
    }
    & p {
      color: rgba(0, 0, 0, 0.65);
      font-size: 17px;
    }
  }
`;

export const WhatYouCanDoCard = styled.div`
  width: 50%;
  margin: 2rem 0;
  padding: 0 1.5rem;
  & .col-head {
     display: flex;
     align-items: center;

     & img { max-width: 75px; }
   }
   @media (max-width: 768px) {
      width: 100%;
      padding: 0 0.75rem;
   }
  & .col-head span {
    color: #2650ff;
    font-size: 23px;
    margin-left: 0.5rem;
    @media(max-width: 400px){ font-size: 20px; }
  }
  & p {
     margin-top: 0.75rem;
    color: rgba(0, 0, 0, 0.65);
    font-size: 16px;
  }
`;

export const WhatYouCanDoTitle = styled.span`
  font-size: 35px;
  color: #000000;
  text-align: center;
  margin-bottom: 1.5rem;
  display: block;
  font-weight: bold;
`;
