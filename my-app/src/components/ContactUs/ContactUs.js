import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import './ContactUs.css';

const ContactUs = ({ companyEmail }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91', 
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: '',
      email: '',
      countryCode: '+1',
      phone: '',
      message: '',
    });
  };

  return (
    <section className="contact-us-section py-5">
      <Container>
        <h2 className="text-center mb-4">Contact Us</h2>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="contactFormName" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="contactFormEmail" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="contactFormPhone" className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Row>
                  <Col xs={4}>
                    <Form.Control
                      type="text"
                      placeholder="+1"
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                  <Col xs={8}>
                    <Form.Control
                      type="tel"
                      placeholder="Enter phone number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group controlId="contactFormMessage" className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Enter your message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Button type="submit" className="custom-btn">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="text-center">
            <p>
              Alternatively, you can reach us directly at:{" "}
              <a href={`mailto:${companyEmail}`}>{companyEmail}</a>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUs;
