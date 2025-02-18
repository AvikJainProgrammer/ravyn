import React from 'react';
import Scrollspy from 'react-scrollspy';
import { Nav } from 'react-bootstrap';
import './ScrollSpySidebar.css';

const ScrollSpySidebar = ({ sections }) => {
  // Extract the IDs from the sections
  const sectionIds = sections.map((section) => section.id);

  return (
    <Nav className="flex-column scrollspy-sidebar">
      <Scrollspy items={sectionIds} currentClassName="active" offset={-100}>
        {sections.map((section) => (
          <Nav.Item key={section.id}>
            <Nav.Link href={`#${section.id}`}>{section.label}</Nav.Link>
          </Nav.Item>
        ))}
      </Scrollspy>
    </Nav>
  );
};

export default ScrollSpySidebar;
