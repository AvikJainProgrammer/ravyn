// src/pages/Services/SEO/SEO.js

import React from 'react';
import BlogPage from '../../../components/BlogPage/BlogPage';
import seoSections from './seoData';

const SEO = () => {
  return <BlogPage sections={seoSections} />;
};

export default SEO;
