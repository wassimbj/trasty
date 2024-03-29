/* eslint-disable max-len */
import React, { useState } from 'react';
import Icon from '@hackclub/icons';
import Tip from '../tip';
import ReviewBadge from '../reviewBadge';
import BigDot from '../bigDot';
import ToolTip from '../toolTip';
import timeAgo from '../../utils/timeAgo';
import niceDateFormat from '../../utils/niceDateFormat';
import {
  DeleteBtn, DeliveryDetails,
  OfferCardWrapper, OfferDetails,
  OfferReward, TravelerInfo,
  OfferByInfo, UserImg,
  UserNameAndRating, UserName,
  OfferDate, RatingSummary, AcceptBtn,
  ActionBtnWrapper, OfferAcceptedMsg, AcceptedBadge,
} from './style';
import DeleteOfferModal from '../deleteOfferModal';
import AcceptOfferModal from '../acceptOfferModal';

export default function OfferCard({
  userId,
  userImg,
  userName,
  isAccepted,
  chatRoom,
  createdAt,
  deliverFrom,
  deliverOn,
  reward,
  offerId,
  requestId,
  requestBy,
}) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isAcceptModalOpen, setIsAcceptModalOpen] = useState(false);

  return (
    <>
      <OfferCardWrapper>
        <TravelerInfo>
          <span className="title">Traveler info</span>
          <OfferByInfo>
            <a href={`/user/${userId}`} target="_blank" rel="noreferrer">
            <UserImg
              src={userImg}
              alt=""
            />
            </a>
            <UserNameAndRating>
              <UserName>{userName}</UserName>
              <OfferDate>
                <BigDot />
                {timeAgo(createdAt)}
              </OfferDate>
              <RatingSummary>
                <ToolTip content="reviews" inline><ReviewBadge small rating={5} /></ToolTip>
              </RatingSummary>
            </UserNameAndRating>
          </OfferByInfo>
        </TravelerInfo>
        <OfferDetails>
          <span className="title">Traveler offer</span>
          <DeliveryDetails>
            <span className="icon">
              <svg width="20" height="14" viewBox="0 0 30 22" fill="#999" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.06298 10.063 6.27212 12.2721 6.27212C14.4813 6.27212 16.2721 8.06298 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16755 11.1676 8.27212 12.2721 8.27212C13.3767 8.27212 14.2721 9.16755 14.2721 10.2721Z" fill="#999" />
                <path fillRule="evenodd" clipRule="evenodd" d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.39409 5.48178 3.79417C8.90918 0.194243 14.6059 0.054383 18.2059 3.48178C21.8058 6.90918 21.9457 12.6059 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.97318 6.93028 5.17324C9.59603 2.3733 14.0268 2.26452 16.8268 4.93028C19.6267 7.59603 19.7355 12.0268 17.0698 14.8268Z" fill="#999" />
              </svg>
            </span>
            <span className="hint">Delivery From</span>
            <span className="mark">{deliverFrom.nice_display}</span>
          </DeliveryDetails>
          <DeliveryDetails>
            <span className="icon">
              <svg width="20" height="14" viewBox="0 0 30 22" fill="#999" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 7H11V12H16V14H9V7Z" fill="#999" />
                <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z" fill="#999" />
              </svg>
            </span>
            <span className="hint">Delivery date</span>
            <span className="mark">{niceDateFormat(deliverOn)}</span>
          </DeliveryDetails>
          <OfferReward>
            <span className="icon">
              <svg width="20" height="14" viewBox="0 0 30 22" fill="#999" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M11 19V22H13V19H14C16.2091 19 18 17.2091 18 15C18 12.7909 16.2091 11 14 11H13V7H15V9H17V5H13V2H11V5H10C7.79086 5 6 6.79086 6 9C6 11.2091 7.79086 13 10 13H11V17H9V15H7V19H11ZM13 17H14C15.1046 17 16 16.1046 16 15C16 13.8954 15.1046 13 14 13H13V17ZM11 11V7H10C8.89543 7 8 7.89543 8 9C8 10.1046 8.89543 11 10 11H11Z" fill="#999" />
              </svg>
            </span>
            <span className="hint"> Traveler reward </span>
            <span className="mark">{`${reward} TND`}</span>
          </OfferReward>
        </OfferDetails>
        {
          isAccepted
            ? (
              <>
                <OfferAcceptedMsg href={`/messages/${chatRoom}/${userId}`}>
                  Chat more with the traveler...
                </OfferAcceptedMsg>
                <AcceptedBadge>Accepted</AcceptedBadge>
              </>
            )
            : (
              <ActionBtnWrapper>
                <AcceptBtn onClick={() => setIsAcceptModalOpen(true)}>
                  <Icon glyph="checkmark" size={22} />
                  Accept
                </AcceptBtn>
                <DeleteBtn onClick={() => setIsDeleteModalOpen(true)}>
                  <Icon glyph="delete" size={20} />
                  Remove
                </DeleteBtn>
              </ActionBtnWrapper>
            )
        }
      </OfferCardWrapper>
      {
        !isAccepted && isDeleteModalOpen && (
          <DeleteOfferModal
            onClose={() => setIsDeleteModalOpen(false)}
            offerId={offerId}
            requestBy={requestBy}
            key={offerId}
          />
        )
      }
      {
        !isAccepted && isAcceptModalOpen && (
          <AcceptOfferModal
            onClose={() => setIsAcceptModalOpen(false)}
            offerId={offerId}
            requestBy={requestBy}
            offerBy={userId}
            requestId={requestId}
            key={offerId}
          />
        )
      }
    </>
  );
}
