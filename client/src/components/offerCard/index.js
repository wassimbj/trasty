import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@hackclub/icons';
import ReviewBadge from '../reviewBadge';
import BigDot from '../bigDot';
import {
  AcceptOfferButton, ActionButtonWrapper, DetailTitle,
  OfferByInfo, OfferCardContainer, OfferDate, OfferDetails, RatingSummary, RefuseOfferButton,
  SingleOfferDetail, UserImg, UserName, UserNameAndRating,
} from './style';

export default function OfferCard() {
  return (
    <OfferCardContainer>
      <OfferByInfo>
        <Link to="/user/558" target="_blank" rel="noopener">
        <UserImg
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4vHwf_WqQW7lAjOAsNDwrzeJer1Bg863H1Q&usqp=CAU"
          alt=""
        />
        </Link>
        <UserNameAndRating>
          <Link to="/user/855" target="_blank" rel="noopener">
            <UserName> Ali batata </UserName>
            <OfferDate>
            <BigDot />
            5 min ago
            </OfferDate>
          </Link>
          <RatingSummary>
            <span className="def"> Reviews: </span>
            <ReviewBadge small rating={5} />
          </RatingSummary>
        </UserNameAndRating>
      </OfferByInfo>
      <OfferDetails>
        <SingleOfferDetail>
          <DetailTitle> Deliver on </DetailTitle>
          <p> 25 March, 2020 </p>
        </SingleOfferDetail>
        <SingleOfferDetail>
          <DetailTitle> From </DetailTitle>
          <p> Germany </p>
        </SingleOfferDetail>
        <SingleOfferDetail>
          <DetailTitle> Reward </DetailTitle>
          <p> 50 TND </p>
        </SingleOfferDetail>
      </OfferDetails>
      <ActionButtonWrapper>
        <AcceptOfferButton>Accept</AcceptOfferButton>
        <RefuseOfferButton>Remove</RefuseOfferButton>
      </ActionButtonWrapper>
    </OfferCardContainer>
  );
}
