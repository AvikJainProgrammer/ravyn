import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const CustomNavbar = ({ menuItems }) => {
  return (
    <Navbar expand="lg" className="custom-nav">
      <Container>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto">
            {menuItems.map((item, index) =>
              item.dropdown ? (
                <NavDropdown title={item.label} key={index} className="nav-link">
                  {item.dropdown.map((subItem, subIndex) => (
                    <NavDropdown.Item
                      key={subIndex}
                      as={Link}
                      to={subItem.link}
                      className={subItem.disabled ? "disabled" : ""}
                    >
                      {subItem.label}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              ) : (
                <Nav.Link
                  key={index}
                  as={NavLink}
                  to={item.link}
                  className={item.disabled ? "disabled" : ""}
                >
                  {item.label}
                </Nav.Link>
              )
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
