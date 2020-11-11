import React from 'react';
import Footer from '../../components/footer';
// import MainContainer from '../../components/mainContainer';
import HomeBanner from './components/Banner';
import Shops from './components/Shops';
import WhatCanYouDo from './components/WhatCanYouDo';

export default function HomePage() {
  return (
    <>
      {/* <MainContainer> */}
      <HomeBanner />
      <WhatCanYouDo />
      <Shops />
      <Footer />
    </>
  );
}
