import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ScrollSpySidebar from "../../components/ScrollSpySidebar/ScrollSpySidebar";
import ContentSection from "../../components/ContentSection/ContentSection";

const BlogPage = ({ sections }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return (
    <Container fluid>
      <Row>
        {/* Left Sidebar with ScrollSpy Navigation */}
        <Col md={3}>
          <ScrollSpySidebar sections={sections} />
        </Col>

        {/* Main Content */}
        <Col md={9}>
          {sections.map((section) => (
            <ContentSection key={section.id} id={section.id} title={section.title}>
              {section.content}
            </ContentSection>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default BlogPage;
