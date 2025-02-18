import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ScrollSpySidebar from '../../components/ScrollSpySidebar/ScrollSpySidebar';
import ContentSection from '../../components/ContentSection/ContentSection';

const BlogPage = ({ sections }) => {
  return (
    <Container fluid>
      <Row>
        {/* Left Sidebar with ScrollSpy Navigation */}
        <Col md={3}>
          <ScrollSpySidebar 
            sections={sections.map(({ id, label }) => ({ id, label }))}
          />
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
