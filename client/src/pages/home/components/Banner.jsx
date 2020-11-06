import React from 'react';
import FindTravelerCard from '../../../components/findTravelerCard';
import { Banner, HomeTitle } from '../style';

export default function HomeBanner() {
  return (
    <Banner>
      <HomeTitle> Find Traveler </HomeTitle>
      <FindTravelerCard />
    </Banner>
  );
}
