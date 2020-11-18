import React from 'react';
import styled from 'styled-components';
import RatingStars from '../../../components/ratingStars';

const ReviewCardContainer = styled.div`
  padding: 1rem;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 5px;
  margin-bottom: 1rem;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;

  & img { border-radius: 50px; width: 50px; height: 50px; margin-right: 0.5rem; }

  & div {
    & .userName { font-weight: 500; display: block }
    & .asWhat { font-size: 15px; color: gray; }
  }
`;

const ReviewDetails = styled.div`
  margin-top: 1rem;
`;

const ReviewDetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;

  @media(max-width: 350px){
    & .stars { margin-top: 1rem; }
  }
`;

export default function ReviewCard() {
  return (
    <ReviewCardContainer>
      <ReviewDetailsWrapper>
        <UserInfo>
          <img src="https://s3.amazonaws.com/uifaces/faces/twitter/imomenui/128.jpg" alt="" />
          <div>
            <span className="userName"> Destiney Hand </span>
            <span className="asWhat"> As a Traveler </span>
          </div>
        </UserInfo>
        <div className="stars"><RatingStars rating={4} /></div>
      </ReviewDetailsWrapper>
      <ReviewDetails>
        <p>
          Necessitatibus mollitia eaque blanditiis quia officiis.
        </p>
      </ReviewDetails>
    </ReviewCardContainer>
  );
}
