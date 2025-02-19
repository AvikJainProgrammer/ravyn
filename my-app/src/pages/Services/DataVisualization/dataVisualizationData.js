// src/pages/Services/DataVisualization/dataVisualizationData.js

import { Link } from 'react-router-dom';

const dataVisualizationSections = [
  {
    id: 'importance',
    label: 'Importance',
    title: 'Why Dashboards Matter',
    content: (
      <div>
        <p>
          In today’s fast-paced business world, timely and accurate information is critical. Dashboards provide a consolidated, real-time view of key performance indicators, enabling you to make informed decisions quickly.
        </p>
        <p>
          A well-designed dashboard transforms raw data into actionable insights, helping you identify trends, spot issues before they escalate, and optimize operations on a daily basis.
        </p>
      </div>
    ),
  },
  {
    id: 'scenarios',
    label: 'Scenarios',
    title: 'Business Scenarios Requiring Dashboards',
    content: (
      <div>
        <p>
          Dashboards are essential tools across various business functions, such as:
        </p>
        <ul>
          <li><strong>Finance:</strong> Monitor cash flow, expenses, and revenue to stay on top of financial health.</li>
          <li><strong>Human Resources:</strong> Track employee performance, recruitment metrics, and retention rates.</li>
          <li><strong>Procurement:</strong> Oversee supply chain efficiency and vendor performance.</li>
          <li><strong>Sales:</strong> Keep track of sales targets, conversion rates, and customer acquisition.</li>
          <li><strong>Logistics:</strong> Manage inventory levels, shipping times, and distribution efficiency.</li>
          <li><strong>Marketing:</strong> Analyze campaign performance, website traffic, and lead generation efforts.</li>
          <li><strong>Operations:</strong> Gain real-time visibility into overall business performance for smoother operations.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'solutions',
    label: 'Solutions',
    title: 'Our Dashboard Solutions',
    content: (
      <div>
        <p>
          We offer a range of dashboard solutions tailored to your business needs:
        </p>
        <ul>
          <li><strong>PowerBI:</strong> Leverage Microsoft's robust analytics platform for interactive reports.</li>
          <li><strong>QlikSense:</strong> Benefit from advanced data visualization and self-service analytics.</li>
          <li><strong>Tableau:</strong> Create dynamic, intuitive dashboards that turn complex data into clear insights.</li>
          <li><strong>Custom Web App Dashboards:</strong> Get bespoke dashboard solutions designed specifically for your business.</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'ai-integration',
    label: 'AI Integration',
    title: 'Integrating AI for Predictive Analysis',
    content: (
      <div>
        <p>
          Our dashboard solutions are enhanced with advanced AI tools to provide predictive analytics. This integration helps forecast trends, predict sales, and identify potential issues before they arise.
        </p>
        <p>
          By combining real-time data with machine learning algorithms, our dashboards enable proactive decision-making tailored to your business requirements.
        </p>
      </div>
    ),
  },
  {
    id: 'benefits',
    label: 'Benefits',
    title: 'Additional Benefits',
    content: (
      <div>
        <p>
          With our data visualization and reporting solutions, you gain:
        </p>
        <ul>
          <li>Real-time insights to drive daily business decisions.</li>
          <li>Customizable dashboards that adapt as your business evolves.</li>
          <li>Enhanced data management and operational efficiency.</li>
          <li>Scalable solutions that grow with your organization.</li>
        </ul>
        <p>
          Experience better decision-making and a competitive edge with our comprehensive dashboard solutions.
        </p>
      </div>
    ),
  },
];

export default dataVisualizationSections;
