import React from 'react';
import { Container } from 'react-bootstrap';
import './SimpleContact.css';

const SimpleContact = ({ companyEmail }) => {
  return (
    <section className="simple-contact-section d-flex justify-content-center align-items-center">
      <Container className="text-center">
        <h2>Contact Us</h2>
        <p>
          For any inquiries, please feel free to reach out to us via email at:{' '}
          <a href={`mailto:${companyEmail}`}>{companyEmail}</a>
        </p>
      </Container>
    </section>
  );
};

export default SimpleContact;
