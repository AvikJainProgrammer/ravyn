import React from 'react';
import homeData from './homeData';
import Hero from '../../components/Hero/Hero';
import LeftHeroSection from '../../components/LeftHeroSection/LeftHeroSection';
import CardsSection from '../../components/CardsSection/CardsSection';

const Home = () => {
  return (
    <div>
      <Hero {...homeData.heroProps} />
      <CardsSection sectionTitle="Our Services" cards={homeData.cardsData} />
      <LeftHeroSection {...homeData.leftHeroProps} />
    </div>
  );
};

export default Home;
