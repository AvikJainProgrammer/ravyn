import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './CardsSection.css';

const CardsSection = ({ sectionTitle, cards }) => {
  return (
    <section className="cards-section py-5">
      <Container>
        <h2 className="text-center mb-4">{sectionTitle}</h2>
        <Row className="g-4">
          {cards.map((card, index) => (
            <Col key={index} md={6} lg={4}>
              <Card className="h-100 text-center">
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{card.title}</Card.Title>
                  <img
                    src={card.imageSrc}
                    alt={card.alt}
                    className="card-img-custom mx-auto"
                  />
                  <Link to={card.link} className="btn custom-btn mt-auto">
                    {card.buttonLabel || 'Learn More'}
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CardsSection;
