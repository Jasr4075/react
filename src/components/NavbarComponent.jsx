import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import ButtonRgbComponent from './ButtonRgbComponent';

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">AtivoVo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Empresa</Nav.Link>
            <Nav.Link href="#contact">Contacto</Nav.Link>
            <Nav.Link href="#contact">Suporte</Nav.Link>
            <Nav.Link href="#contact">Novidades</Nav.Link>
            <Nav.Link href="#about">Acerca de</Nav.Link>
          </Nav>
          <div className="d-flex ms-auto">
            <ButtonRgbComponent className="me-2">Login</ButtonRgbComponent>
            <ButtonRgbComponent>Register</ButtonRgbComponent>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
