// src/pages/AISolutions/aiSolutionsData.js

import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../constants/routes';

const aiSolutionsSections = [
  {
    id: 'introduction',
    label: 'Introduction',
    title: 'AI Solutions Overview',
    content: (
      <div>
        <p>
          Artificial Intelligence is transforming business operations, driving efficiency, and enabling innovative solutions to complex challenges. Our AI Solutions service offers a broad range of capabilities designed to help your organization harness the power of AI.
        </p>
      </div>
    ),
  },
  {
    id: 'applications',
    label: 'Applications',
    title: 'Wide Range of AI Applications',
    content: (
      <div>
        <p>
          Our AI solutions span across multiple domains to address your unique business needs. These include:
        </p>
        <ul>
          <li>Natural Language Processing for intelligent chatbots and customer service automation.</li>
          <li>Data automation and predictive analytics for optimizing business processes.</li>
          <li>Computer vision for quality control and security monitoring.</li>
          <li>Generative AI for creative content generation, such as image creation with Stable Diffusion.</li>
          <li>Custom AI applications tailored to industry-specific challenges.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'integration',
    label: 'Integration',
    title: 'Seamless Integration with Your Business',
    content: (
      <div>
        <p>
          We design our AI solutions to integrate smoothly with your existing systems. Whether it’s automating data workflows or deploying a custom chatbot, our approach ensures minimal disruption and maximum impact.
        </p>
        <p>
          Learn more about our&nbsp;
          <Link to={ROUTES.SERVICES.DATA_AUTOMATION}>Data Automation</Link>
          &nbsp;and&nbsp;
          <Link to={ROUTES.SERVICES.CUSTOM_CHATBOT}>Custom Chatbot</Link>
          &nbsp;services, which form a crucial part of our AI offerings.
        </p>
      </div>
    ),
  },
  {
    id: 'generative',
    label: 'Generative AI',
    title: 'Advanced Generative AI Technologies',
    content: (
      <div>
        <p>
          Our AI solutions also include advanced generative technologies. Using tools like Stable Diffusion, we can generate realistic images and creative designs. Additionally, GPT-based models help in producing human-like text for content creation, customer engagement, and more.
        </p>
      </div>
    ),
  },
  {
    id: 'conclusion',
    label: 'Conclusion',
    title: 'Empower Your Business with AI',
    content: (
      <div>
        <p>
          Our comprehensive AI Solutions are designed to drive innovation and improve operational efficiency. By integrating advanced AI tools with seamless data automation, we help your business stay ahead in a rapidly evolving digital landscape.
        </p>
        <p>
          Discover how our AI solutions can empower your business to make smarter decisions and unlock new opportunities.
        </p>
      </div>
    ),
  },
];

export default aiSolutionsSections;
