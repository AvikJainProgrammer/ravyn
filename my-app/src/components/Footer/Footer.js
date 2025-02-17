import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = ({
  logoSrc,
  footerLinks,   // An array of objects: [{ label: "About", url: "/about" }, ...]
  socialLinks,   // If you want to keep it dynamic, you can map icon names to actual icons below
  copyrightText,
}) => {
  // You can create a mapping for dynamic icon usage if needed.
  const iconMapping = {
    "fab fa-facebook-f": faFacebookF,
    "fab fa-twitter": faTwitter,
    "fab fa-instagram": faInstagram,
    "fab fa-linkedin-in": faLinkedinIn,
  };

  return (
    <footer className="footer-section">
      <Container>
        <Row className="align-items-center">
          {/* Company Logo */}
          <Col md={4} className="text-center text-md-start">
            <img src={logoSrc} alt="Company Logo" className="footer-logo" />
          </Col>
          {/* Footer Links */}
          <Col md={4} className="text-center">
            <ul className="footer-links">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.url}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </Col>
          {/* Social Media Icons */}
          <Col md={4} className="text-center text-md-end">
            {socialLinks.map((social, index) => (
              <a key={index} href={social.url} className="social-icon">
                <FontAwesomeIcon icon={iconMapping[social.iconClass]} />
              </a>
            ))}
          </Col>
        </Row>
        <hr className="footer-divider" />
        <p className="text-center footer-text">{copyrightText}</p>
      </Container>
    </footer>
  );
};

export default Footer;
