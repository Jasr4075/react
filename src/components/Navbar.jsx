import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import CButton from "./customButton";

const NavbarComp = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const updateUser = () => {
      const token = localStorage.getItem("token");
      const user = localStorage.getItem("username");
      if (token) {
        setIsLoggedIn(true);
        setUsername(user);
      } else {
        setIsLoggedIn(false);
        setUsername("");
      }
    };
    updateUser();
    window.addEventListener("login", updateUser);
    return () => {
      window.removeEventListener("login", updateUser);
    };
  }, []);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/">ActivoVo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/#caracteristicas">Características </Nav.Link>
            <Nav.Link href="/#gallery">Galeria</Nav.Link>
            <Nav.Link href="/items/">Venda de itens para academia</Nav.Link>
          </Nav>
          {!isLoggedIn ? (
            <div className="d-flex ms-auto">
              <CButton className="me-2" href="/account/login">
                Login
              </CButton>
              <CButton href="/account/register">Registrar</CButton>
            </div>
          ) : (
              <Nav.Link href="/#profile" className="d-flex ms-auto text-white">
                <span>Olá, {username}</span>
              </Nav.Link>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
