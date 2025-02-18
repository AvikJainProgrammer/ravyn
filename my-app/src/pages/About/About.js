// Example usage in a parent component, e.g., in src/pages/Blog/Blog.js

import React from 'react';
import BlogPage from '../../components/BlogPage/BlogPage';
import CardsSection from '../../components/CardsSection/CardsSection';
import homeData from '../Home/homeData';
import aboutSections from './aboutData';

const blogSections = [
  {
    id: 'introduction',
    label: 'Introduction',
    title: 'Introduction',
    content: (
      <div>
        <p>
          <CardsSection sectionTitle={"Services"} cards={homeData.cardsData} />
        </p>
      </div>
    ),
  },
  {
    id: 'tech-trends',
    label: 'Tech Trends',
    title: 'Latest Tech Trends',
    content: (
      <div>
        <p>
          Artificial Intelligence, blockchain, and IoT are shaping the future of our industry.
        </p>
      </div>
    ),
  },
  {
    id: 'conclusion',
    label: 'Conclusion',
    title: 'Conclusion',
    content: (
      <div>
        <p>
          Thank you for reading! We hope this article provided some valuable insights.
        </p>
      </div>
    ),
  },
];

const Blog = () => {
  return <BlogPage sections={aboutSections} />;
};

export default Blog;
