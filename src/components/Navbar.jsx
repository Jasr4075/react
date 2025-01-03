import { Navbar, Nav, Container } from 'react-bootstrap';
import CButton from './CustomButton';

const NavbarComp = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/">ActivoVo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/#características">Características </Nav.Link>
            <Nav.Link href="/#gallery">Galeria</Nav.Link>
            {/* <Nav.Link href="/contact">Suporte</Nav.Link> */}
            {/* <Nav.Link href="/contact">Novidades</Nav.Link> */}
            {/* <Nav.Link href="/about">Sobre</Nav.Link> */}
            <Nav.Link href="/items/">Venda de itens para academia</Nav.Link>
            <Nav.Link href="/filmes">Filmes teste</Nav.Link>
          </Nav>
          <div className="d-flex ms-auto">
            <CButton className="me-2" href="/account/login" >Login</CButton>
            <CButton href="/account/register">Registrar</CButton>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
