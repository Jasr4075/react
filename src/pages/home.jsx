import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import NavbarComponent from '../components/NavbarComponent';
import './Home.css';

const Home = () => {
    return (
        <>
            <NavbarComponent />

            <Container fluid className="hero-section">
                <Row className="justify-content-center text-center">
                    <Col md={6}>
                        <h1 className="display-3 text-white">Bienvenido a Mi Portafolio</h1>
                        <p className="lead text-white">Un lugar donde la creatividad y la tecnología se encuentran.</p>
                        <button
                            type="button"
                            className="btn btn-primary btn-lg"
                            style={{
                                backgroundColor: 'rgb(0, 27, 255)',
                                transition: 'all 0.9s ease',
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = 'rgb(85, 0, 255)';
                                e.target.style.transform = 'scale(1.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = 'rgb(0, 27, 255)';
                                e.target.style.transform = 'scale(1)';
                            }}
                        >
                            Ver Mis Proyectos
                        </button>



                    </Col>
                </Row>
            </Container>

            <Container id="features" className="my-5">
                <Row>
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Diseño Web</Card.Title>
                                <Card.Text>
                                    Desarrollo sitios web atractivos y funcionales con las últimas tecnologías.
                                </Card.Text>
                                <Button
                                    type="button"
                                    className="btn btn-primary btn-lg"
                                    style={{
                                        backgroundColor: 'rgb(0, 27, 255)',
                                        transition: 'all 0.9s ease',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = 'rgb(85, 0, 255)';
                                        e.target.style.transform = 'scale(1.1)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = 'rgb(0, 27, 255)';
                                        e.target.style.transform = 'scale(1)';
                                    }}
                                >
                                    Más Información
                                </Button>                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Desarrollo de Apps</Card.Title>
                                <Card.Text>
                                    Creación de aplicaciones móviles innovadoras para iOS y Android.
                                </Card.Text>
                                <button
                                    type="button"
                                    className="btn btn-primary btn-lg"
                                    style={{
                                        backgroundColor: 'rgb(0, 27, 255)',
                                        transition: 'all 0.9s ease',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = 'rgb(85, 0, 255)';
                                        e.target.style.transform = 'scale(1.1)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = 'rgb(0, 27, 255)';
                                        e.target.style.transform = 'scale(1)';
                                    }}
                                >
                                    Ver Proyectos
                                </button>                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Consultoría</Card.Title>
                                <Card.Text>
                                    Brindo asesoramiento para llevar tu negocio al siguiente nivel.
                                </Card.Text>
                                <button
                                    type="button"
                                    className="btn btn-primary btn-lg"
                                    style={{
                                        backgroundColor: 'rgb(0, 27, 255)',
                                        transition: 'all 0.9s ease',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = 'rgb(85, 0, 255)';
                                        e.target.style.transform = 'scale(1.1)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = 'rgb(0, 27, 255)';
                                        e.target.style.transform = 'scale(1)';
                                    }}
                                >
                                    Contáctame
                                </button>                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Container id="contact" className="bg-light py-5">
                <Row className="justify-content-center">
                    <Col md={6}>
                        <h2 className="text-center">Contáctame</h2>
                        <p className="text-center">¡Estoy listo para tu próximo proyecto!</p>
                        <Button variant="primary" w-100>Enviar Mensaje</Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Home;
