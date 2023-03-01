import { Container, Nav, Navbar } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import "./Navbar.css";

function WebNavbar() {
  const [navbar, setNavbar] = useState(false);

  const changeNavbar = () => {
    if (window.scrollY >= 30) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbar);
  }, []);

  return (
    <Navbar
      fixed="top"
      expand="lg"
      className={navbar ? "navbar-active" : "navbar"}
    >
      <Container>
        <Navbar.Brand
          href="/"
          style={{
            fontFamily: "'General Sans', sans-serif",
            fontWeight: "600",
          }}
          className={navbar ? "color-active" : "font-color"}
        >
          mealin'.
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3"></Nav>
          <Nav className="me-auto">
            <Nav.Link
              href="/#ingredient"
              className={navbar ? "color-active" : "font-color"}
            >
              Ingredients
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default WebNavbar;
