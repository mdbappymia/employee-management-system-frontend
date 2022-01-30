import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./AppBar.css";

const AppBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand className="brand-text" as={NavLink} to="/">
          EMS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="nav-link" to="/">
              <i className="fas fa-home"></i> Home
            </NavLink>
            <NavLink className="nav-link" to="/insertEmployee">
              <i className="fas fa-user-plus"></i> Insert Employee
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppBar;
