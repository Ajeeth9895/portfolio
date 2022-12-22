import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function Navigation() {
  return (
    <div className="navigation container-fluid">
      <Navbar bg="#0E1630" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#" style={{ color: "white", fontSize: "2em" }}>
            <span className="color-green">A</span>jeeth
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#home" style={{ color: "#808DAD" }}>
                Home
              </Nav.Link>
              <Nav.Link href="#about" style={{ color: "#808DAD" }}>
                About
              </Nav.Link>
              <Nav.Link href="#Skills" style={{ color: "#808DAD" }}>
                Skill
              </Nav.Link>
              <Nav.Link href="#Projects" style={{ color: "#808DAD" }}>
                Project
              </Nav.Link>
              <Nav.Link href="#contact" style={{ color: "#808DAD" }}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
