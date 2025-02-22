import React from "react";
import Scrollspy from "react-scrollspy";
import { Nav } from "react-bootstrap";
import "./ScrollSpySidebar.css";

const ScrollSpySidebar = ({ sections }) => {
  const sectionIds = sections.map((section) => section.id);

  return (
    <Nav className="flex-column scrollspy-sidebar">
      <Scrollspy items={sectionIds} currentClassName="active" offset={-100}>
        {sections.map((section) => (
          <Nav.Item key={section.id}>
            <Nav.Link
              href={`#${section.id}`}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(section.id);
                if (element) {
                  element.scrollIntoView({ behavior: "smooth", block: "start" });
                  window.history.pushState(null, "", `#${section.id}`);
                }
              }}
            >
              {section.label}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Scrollspy>
    </Nav>
  );
};

export default ScrollSpySidebar;
