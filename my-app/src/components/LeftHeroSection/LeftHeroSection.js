import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './LeftHeroSection.css';

const LeftHeroSection = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  imageSrc,
  imageAlt,
}) => {
  return (
    <section className="left-hero-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* Text Content */}
          <Col lg={8} className="text-lg-start">
            <h1 className="left-hero-title">{title}</h1>
            <p className="left-hero-subtitle">{subtitle}</p>
            <div className="left-hero-buttons mt-4">
              <Link to={buttonLink} className="btn left-custom-btn">
                {buttonText}
              </Link>
            </div>
          </Col>
          {/* Hero Image */}
          <Col lg={4} className="text-center mt-4 mt-lg-0">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="left-hero-img img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LeftHeroSection;
