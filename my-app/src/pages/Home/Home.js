import React from 'react';
import homeData from './homeData';
import Hero from '../../components/Hero/Hero';
import LeftHeroSection from '../../components/LeftHeroSection/LeftHeroSection';
import CardsSection from '../../components/CardsSection/CardsSection';
import SimpleContact from '../../components/SimpleContact/SimpleContact';

import contactUsData from '../../data/contactUsData';
import servicesData from '../../data/servicesData';

const Home = () => {
  return (
    <div>
      <Hero {...homeData.heroProps} />
      <CardsSection sectionTitle="Our Services" cards={servicesData.cardsData} />
      <LeftHeroSection {...homeData.leftHeroProps} />
      <SimpleContact companyEmail={contactUsData.email}/>

    </div>
  );
};

export default Home;
