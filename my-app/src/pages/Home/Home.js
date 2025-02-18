import React from 'react';
import homeData from './homeData';
import Hero from '../../components/Hero/Hero';
import LeftHeroSection from '../../components/LeftHeroSection/LeftHeroSection';
import CardsSection from '../../components/CardsSection/CardsSection';
import ContactUs from '../../components/ContactUs/ContactUs';

import contactUsData from '../../data/contactUsData';

const Home = () => {
  return (
    <div>
      <Hero {...homeData.heroProps} />
      <CardsSection sectionTitle="Our Services" cards={homeData.cardsData} />
      <LeftHeroSection {...homeData.leftHeroProps} />
      <ContactUs companyEmail={contactUsData.email}/>
    </div>
  );
};

export default Home;
