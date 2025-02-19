// Example usage in a parent component, e.g., in src/pages/Blog/Blog.js

import React from 'react';
import BlogPage from '../../components/BlogPage/BlogPage';
import aboutSections from './aboutData';


const Blog = () => {
  return <BlogPage sections={aboutSections} />;
};

export default Blog;
