// src/pages/Manufacturing/manufacturingData.js

import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../constants/routes';

const manufacturingSections = [
  {
    id: 'introduction',
    label: 'Introduction',
    title: 'Overview of Our Manufacturing Solutions',
    content: (
      <div>
        <p>
          Our manufacturing solutions are designed to provide end-to-end services that meet the diverse needs of modern businesses.
          We combine advanced technology, streamlined processes, and industry expertise to deliver high-quality products efficiently.
        </p>
      </div>
    ),
  },
  {
    id: 'capabilities',
    label: 'Capabilities',
    title: 'Comprehensive Manufacturing Capabilities',
    content: (
      <div>
        <p>
          From large-scale production to highly customized projects, our manufacturing capabilities cover a wide spectrum of services.
          Our facilities are equipped with state-of-the-art machinery, ensuring that every product meets rigorous quality and performance standards.
        </p>
      </div>
    ),
  },
  {
    id: 'precision',
    label: 'Precision Manufacturing',
    title: 'Precision Metal Manufacturing',
    content: (
      <div>
        <p>
          For projects requiring exact specifications, our Precision Metal Manufacturing service offers custom-engineered metal components produced with tight tolerances.
          Utilizing advanced CNC machining, laser cutting, and automated assembly, we deliver products that perform reliably in demanding environments.
        </p>
        <p>
          Learn more about our&nbsp;
          <Link to={ROUTES.SERVICES.METAL_MANUFACTURING}>
            Precision Metal Manufacturing
          </Link>
          &nbsp;capabilities.
        </p>
      </div>
    ),
  },
  {
    id: 'pcb',
    label: 'PCB Manufacturing',
    title: 'PCB Manufacturing & Assembly',
    content: (
      <div>
        <p>
          In addition to metal manufacturing, we offer comprehensive PCB Manufacturing & Assembly services.
          Our process encompasses design validation, high-precision fabrication, automated component placement, and rigorous testing to ensure that your printed circuit boards meet all industry standards.
        </p>
        <p>
          Discover our approach to&nbsp;
          <Link to={ROUTES.SERVICES.PCB_MANUFACTURING}>
            PCB Manufacturing & Assembly
          </Link>
          &nbsp;and how it can benefit your business.
        </p>
      </div>
    ),
  },
  {
    id: 'innovation',
    label: 'Innovation',
    title: 'Quality, Innovation & Efficiency',
    content: (
      <div>
        <p>
          Innovation and quality are at the heart of our operations. We continuously adopt new technologies and process improvements to enhance efficiency and reduce lead times.
          Our commitment to quality ensures that every product we manufacture is built to perform at its best.
        </p>
      </div>
    ),
  },
  {
    id: 'conclusion',
    label: 'Conclusion',
    title: 'Our Commitment to Manufacturing Excellence',
    content: (
      <div>
        <p>
          Whether you need high-volume production or specialized services, we are committed to delivering excellence.
          Our integrated approach ensures seamless coordination across all stages of manufacturing, helping your business succeed in a competitive market.
        </p>
      </div>
    ),
  },
];

export default manufacturingSections;
