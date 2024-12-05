import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import NavbarComponent from '../components/NavbarComponent';
import ButtonRGB from '../components/ButtonRGB';
import './Home.css';

const Home = () => {
    return (
        <>
            <NavbarComponent />

            <Container fluid className="hero-section" style={{ backgroundImage: 'url("https://wallpapercave.com/wp/wp5861473.jpg")', }}>
                <Row className="justify-content-center text-center">
                    <Col md={6}>
                        <h1 className="display-3 text-white">Mi Portafolio</h1>
                        <p className="lead text-white">Descripcion</p>
                        <ButtonRGB>Ver Meus Proyectos</ButtonRGB>
                    </Col>
                </Row>
            </Container>

            <Container id="features" className="my-9 d-flex justify-content-center align-items-center">
                <Row>
                    <Col md={6}>
                        <Card style={{
                            width: '18rem',
                        }}>
                            <Card.Img variant="top" src="https://wallpapercave.com/wp/wp5861473.jpg" />
                            <Card.Body>
                                <Card.Title>Diseño Web</Card.Title>
                                <Card.Text>
                                    DESCRIPCION: Desarrollo sitios web.
                                </Card.Text>
                                <ButtonRGB>Más Información</ButtonRGB>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card style={{
                            width: '18rem',
                        }}>
                            <Card.Img variant="top" src="https://wallpapercave.com/wp/wp5861473.jpg" />
                            <Card.Body>
                                <Card.Title>Desarrollo de Apps</Card.Title>
                                <Card.Text>
                                    DESCRIPCION: Desarrollo sitios web.
                                </Card.Text>
                                <ButtonRGB>Ver Proyectos</ButtonRGB>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Container id="contact" className="bg-light py-5">
                <Row className="justify-content-center">
                    <Col md={6}>
                        <h2 className="text-center">Contáctame</h2>
                        <p className="text-center">¡Estoy listo para tu próximo proyecto!</p>
                        <ButtonRGB
                            style={{
                                backgroundColor: '#228B22',
                            }}
                        >Enviar Mensaje</ButtonRGB>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Home;
