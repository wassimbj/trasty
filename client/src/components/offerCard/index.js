import React from 'react';
import { Link } from 'react-router-dom';
import timeAgo from '../../utils/timeAgo';
import niceDateFormat from '../../utils/niceDateFormat';
import ReviewBadge from '../reviewBadge';
import BigDot from '../bigDot';
import {
  AcceptOfferButton, ActionButtonWrapper, DetailTitle,
  OfferByInfo, OfferCardContainer, OfferDate, OfferDetails, RatingSummary, RefuseOfferButton,
  SingleOfferDetail, UserImg, UserName, UserNameAndRating,
} from './style';

export default function OfferCard({
  userId,
  userImg,
  userName,
  createdAt,
  deliverFrom,
  deliverOn,
  reward,
}) {
  return (
    <OfferCardContainer>
      <OfferByInfo>
        <Link to={`/user/${userId}`} target="_blank" rel="noopener">
        <UserImg
          src={userImg}
          alt=""
        />
        </Link>
        <UserNameAndRating>
          <Link to={`/user/${userId}`} target="_blank" rel="noopener">
            <UserName>{userName}</UserName>
            <OfferDate>
            <BigDot />
            {timeAgo(createdAt)}
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
          <p>{niceDateFormat(deliverOn)}</p>
        </SingleOfferDetail>
        <SingleOfferDetail>
          <DetailTitle> From </DetailTitle>
          <p>{deliverFrom.nice_display}</p>
        </SingleOfferDetail>
        <SingleOfferDetail>
          <DetailTitle> Reward </DetailTitle>
          <p>{`${reward} TND`}</p>
        </SingleOfferDetail>
      </OfferDetails>
      <ActionButtonWrapper>
        <AcceptOfferButton>Accept</AcceptOfferButton>
        <RefuseOfferButton>Remove</RefuseOfferButton>
      </ActionButtonWrapper>
    </OfferCardContainer>
  );
}
