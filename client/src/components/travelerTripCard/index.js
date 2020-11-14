import React from 'react';
import styled from 'styled-components';
import Icon from '@hackclub/icons';
import RatingStars from '../ratingStars';

const TravelTripCardWrapper = styled.div`
  padding: 0.75rem;
  border-radius: 5px;
  margin-bottom: 1.5rem;
  box-shadow: 0 0 5px rgba(0,0,0,0.15);
  display: block;
  transition: 300ms;
  &:hover { box-shadow: 0 0px 3px rgba(0,0,0,0.35); }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  // flex-wrap: wrap;
`;

const TravelerInfo = styled.div`
  display: flex;
  align-items: center;
  
  & img {
    width: 50px;
    border-radius: 50px;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
  }
  & > div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-left: 0.5rem;
    & span { white-space: nowrap; text-overflow: ellipsis; }
  }
`;

const RequestButton = styled.button`
  color: #2650ff;
  background: rgba(38,80,255,0.15);
  padding: 0.5rem 1rem;
  font-weight: 500;
  border-radius: 50px;
  transition: 250ms;

  &:hover{
    background: rgba(38,80,255,0.20);
  }
`;

const TravelLocations = styled.div`
  padding: 1rem 0;
  @media(min-width: 700px){
    padding-left: 2rem;
    padding-right: 2rem;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;

  & svg { margin: 0 0.5rem; }
  & > div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    & small { font-weight: bold; color: gray; }
    & p {
      @media(min-width: 400px){
        font-size: 17px;
      }
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    & .date { color: #a1a1a1; font-size: 15px; }
  }
`;

export default function TravelerTripCard() {
  return (
    <TravelTripCardWrapper>
      <CardHeader>
        <TravelerInfo>
          <img src="https://s3.amazonaws.com/uifaces/faces/twitter/patrickcoombe/128.jpg" alt="" />
          <div>
            <b> Alicia Cartwright </b>
            <RatingStars />
          </div>
        </TravelerInfo>
        <RequestButton> Request </RequestButton>
      </CardHeader>
      <TravelLocations>
        <div>
          <small>From</small>
          <p>New york, United States</p>
          <span className="date"> 10 Dec `20 </span>
        </div>
        <Icon glyph="enter" color="#2650ff" size={35} />
        <div>
          <small>To</small>
          <p>Sousse, TN</p>
          <span className="date"> 10 Dec `20 </span>
        </div>
      </TravelLocations>
    </TravelTripCardWrapper>
  );
}
