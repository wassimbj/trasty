import React from 'react';
import Icon from '@hackclub/icons';
import BigDot from '../../../components/bigDot';
import {
  UserOfferCardWrapper, OfferCardhead, OfferDeliveryInfo, OfferReward,
} from '../style';
import RatingStars from '../../../components/ratingStars';

export default function UserOfferCard() {
  return (
    <UserOfferCardWrapper>
      <OfferCardhead>
        <div className="userInfo">
          <img src="https://s3.amazonaws.com/uifaces/faces/twitter/andreas_pr/128.jpg" alt="" />
          <div className="userName">
            <div>
              <b>Tatyana Pfeffer</b>
              <BigDot />
              <small> 5 hours ago </small>
            </div>
            <RatingStars />
          </div>
        </div>
      </OfferCardhead>
      <OfferDeliveryInfo>
        <Icon glyph="event-check" />
        <span className="static"> I will deliver it on </span>
        <b> February 4, 2021 </b>
        <span> from New York, NY, US </span>
      </OfferDeliveryInfo>
      <OfferReward>
        Traveler reward
        <span> 155.00 DT </span>
      </OfferReward>
    </UserOfferCardWrapper>
  );
}
