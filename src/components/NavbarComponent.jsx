import { Navbar, Nav, Container } from 'react-bootstrap';
import ButtonRgbComponent from './ButtonRgbComponent';

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">AtivoVo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="http://localhost:5173/#Características">Características </Nav.Link>
            <Nav.Link href="/contact">Contacto</Nav.Link>
            <Nav.Link href="/contact">Suporte</Nav.Link>
            <Nav.Link href="/contact">Novidades</Nav.Link>
            <Nav.Link href="/about">Acerca de</Nav.Link>
            <Nav.Link href="/items">items</Nav.Link>

          </Nav>
          <div className="d-flex ms-auto">
            <ButtonRgbComponent className="me-2" href="/login" >Login</ButtonRgbComponent>
            <ButtonRgbComponent href="/register">Register</ButtonRgbComponent>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
