import React from 'react';
import {
  Banner, BannerWrapper, BannerPostLink,
  BannerTravelLink, BannerItem, BannerContainer,
} from '../style';

export default function HomeBanner() {
  return (
    <Banner>
      <BannerContainer>
        <BannerWrapper>
          <BannerItem>
            <h1> Shop Anything, </h1>
            <h1> From Anywhere. </h1>
            <p>Trasty connects shoppers and travelers who help each other access the world.</p>
            <BannerPostLink to="/start">Get Started</BannerPostLink>
            <BannerTravelLink to="/requests">Find Requests</BannerTravelLink>
          </BannerItem>
          <BannerItem>
            <img src="/images/online-shop.png" alt="" />
          </BannerItem>
        </BannerWrapper>
      </BannerContainer>
    </Banner>
  );
}
