import React from 'react';
import Footer from '../../components/footer';
import MainContainer from '../../components/mainContainer';
import HomeBanner from './components/Banner';
import HowWeHelp from './components/HowWeHelp';
import JoinUsCard from './components/JoinUsCard';

export default function HomePage() {
  return (
    <>
      <MainContainer>
        <HomeBanner />
        <HowWeHelp />
        <JoinUsCard />
      </MainContainer>
      <Footer />
    </>
  );
}
