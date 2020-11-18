import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@hackclub/icons';
import LazyLoad from 'react-lazyload';
import RatingStars from '../ratingStars';
import {
  Card, DetailsWrapper, LocationDetails, RequestButton,
  TravelerInfo, TripDate, TripDetails,
} from './style';

export default function TravelerTripCard({ displayUser }) {
  return (
    <Card>
      <DetailsWrapper>
        {
          displayUser ? (
            <TravelerInfo>
              <Link to="/user/85" style={{ display: 'block' }}>
                <LazyLoad once>
                  <img src="https://www.flaticon.com/svg/static/icons/svg/149/149071.svg" alt="" />
                </LazyLoad>
              </Link>
              <div>
                <span className="name"> Alicia Cartwright </span>
                <RatingStars />
              </div>
            </TravelerInfo>
          ) : null
        }
        <TripDetails>
          <LocationDetails>
            <span> Sousse, TN </span>
            <Icon glyph="enter" color="#2650ff" style={{ margin: '0 0.5rem' }} />
            <span> Germany </span>
          </LocationDetails>
          <TripDate> December 3, 2020 </TripDate>
        </TripDetails>
        <RequestButton> Request </RequestButton>
      </DetailsWrapper>
    </Card>
  );
}
