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
            <Nav.Link href="/contact">Contato</Nav.Link>
            <Nav.Link href="/contact">Suporte</Nav.Link>
            <Nav.Link href="/contact">Novidades</Nav.Link>
            <Nav.Link href="/about">Sobre</Nav.Link>
            <Nav.Link href="/items">Venda de itens</Nav.Link>
          </Nav>
          <div className="d-flex ms-auto">
            <ButtonRgbComponent className="me-2" href="/login" >Login</ButtonRgbComponent>
            <ButtonRgbComponent href="/register">Registrar</ButtonRgbComponent>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
