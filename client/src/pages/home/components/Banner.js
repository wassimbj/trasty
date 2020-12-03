import React from 'react';
import MainContainer from '../../../components/mainContainer';
import {
  Banner, BannerWrapper, BannerPostLink, BannerTravelLink, BannerItem,
} from '../style';

export default function HomeBanner() {
  return (
    <Banner>
      <MainContainer>
        <BannerWrapper>
          <BannerItem>
            <h1> Shop Anything, </h1>
            <h1> To Anywhere. </h1>
            <p>Trusti connects shoppers and travelers who help each other access the world.</p>
            <BannerPostLink to="/start">Get Started</BannerPostLink>
            <BannerTravelLink to="/requests">Find Requests</BannerTravelLink>
          </BannerItem>
          <BannerItem>
            <img src="/images/banner-img.png" alt="" />
          </BannerItem>
        </BannerWrapper>
      </MainContainer>
    </Banner>
  );
}
