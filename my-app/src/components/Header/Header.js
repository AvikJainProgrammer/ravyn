import React from "react";
import { Container } from "react-bootstrap";
import "./Header.css"; // Import the CSS file for styling

const Header = ({ logoSrc, title }) => {
  return (
    <header className="bg-light py-2">
      <Container className="d-flex align-items-center">
        <img src={logoSrc} alt="Company Logo" className="logo me-2" />
        <h1 className="h4 mb-0">{title}</h1>
      </Container>
    </header>
  );
};

export default Header;
