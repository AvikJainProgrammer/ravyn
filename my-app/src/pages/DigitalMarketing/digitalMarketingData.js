// src/pages/DigitalMarketing/digitalMarketingData.js

import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../constants/routes';

const digitalMarketingSections = [
  {
    id: 'introduction',
    label: 'Introduction',
    title: 'Digital Marketing Overview',
    content: (
      <div>
        <p>
          In the digital age, a strong online presence is key to business success. Our Digital Marketing services are designed to help you reach your target audience, build brand awareness, and drive meaningful engagement across multiple channels.
        </p>
      </div>
    ),
  },
  {
    id: 'strategy',
    label: 'Strategy',
    title: 'Our Digital Marketing Strategy',
    content: (
      <div>
        <p>
          We develop comprehensive digital marketing strategies tailored to your business goals. Our approach combines data-driven insights with creative campaigns to deliver measurable results. We work with you to understand your target market, craft compelling messages, and select the right channels for maximum impact.
        </p>
      </div>
    ),
  },
  {
    id: 'services',
    label: 'Our Services',
    title: 'Our Digital Marketing Services',
    content: (
      <div>
        <p>
          Our digital marketing services include a range of solutions designed to boost your online performance:
        </p>
        <ul>
          <li>
            <strong>Search Engine Optimization (SEO):</strong> Improve your organic search rankings and drive traffic. Learn more&nbsp;
            <Link to={ROUTES.SERVICES.SEO}>here</Link>.
          </li>
          <li>
            <strong>Pay-Per-Click (PPC) Advertising:</strong> Drive immediate results with targeted ad campaigns. Discover our approach&nbsp;
            <Link to={ROUTES.SERVICES.PPC_ADVERTISING}>here</Link>.
          </li>
          <li>
            <strong>Custom Web & App Development:</strong> Enhance user experience with tailored digital platforms. Explore our solutions&nbsp;
            <Link to={ROUTES.SERVICES.WEB_APP_DEVELOPMENT}>here</Link>.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'analytics',
    label: 'Analytics',
    title: 'Data-Driven Analytics & Optimization',
    content: (
      <div>
        <p>
          We leverage advanced analytics tools to track campaign performance and continuously optimize your digital marketing efforts. Our data-driven approach ensures that every decision is backed by actionable insights, leading to improved ROI and sustained growth.
        </p>
      </div>
    ),
  },
  {
    id: 'conclusion',
    label: 'Conclusion',
    title: 'Empowering Your Business',
    content: (
      <div>
        <p>
          Our Digital Marketing solutions are designed to help your business stand out in a crowded online marketplace. By integrating creative strategy with cutting-edge technology and robust analytics, we empower you to make informed decisions and achieve your business goals.
        </p>
      </div>
    ),
  },
];

export default digitalMarketingSections;
