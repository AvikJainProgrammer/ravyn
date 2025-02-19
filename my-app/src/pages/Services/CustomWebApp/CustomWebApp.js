// src/pages/Services/CustomWebApp/CustomWebApp.js

import React from 'react';
import BlogPage from '../../../components/BlogPage/BlogPage';
import customWebAppSections from './customWebAppData';

const CustomWebApp = () => {
  return <BlogPage sections={customWebAppSections} />;
};

export default CustomWebApp;
