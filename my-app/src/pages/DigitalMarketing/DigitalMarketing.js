// src/pages/DigitalMarketing/DigitalMarketing.js

import React from 'react';
import BlogPage from '../../components/BlogPage/BlogPage';
import digitalMarketingSections from './digitalMarketingData';

const DigitalMarketing = () => {
  return <BlogPage sections={digitalMarketingSections} />;
};

export default DigitalMarketing;
