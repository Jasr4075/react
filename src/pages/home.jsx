import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import NavbarComponent from '../components/NavbarComponent';
import ButtonRgbComponent from '../components/ButtonRgbComponent';
import './Home.css';

const Home = () => {
    // funciones
    const handleButtonClick = () => {
        Toast('¡Botón presionado!');
    };

    return (
        <>
            <NavbarComponent />
            
            <Container fluid className="hero-section" style={{ backgroundImage: 'url("https://wallpapercave.com/wp/wp5861473.jpg")', }}>
                <Row className="justify-content-center text-center">
                    <Col md={6}>
                        <h1 className="display-3 text-white">Mi Portafolio</h1>
                        <p className="lead text-white">Descripcion</p>
                        <ButtonRgbComponent onClick={handleButtonClick}>Ver Meus Proyectos</ButtonRgbComponent>
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
                                <ButtonRgbComponent onClick={handleButtonClick}>Más Información</ButtonRgbComponent>
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
                                <ButtonRgbComponent onClick={handleButtonClick}>Ver Proyectos</ButtonRgbComponent>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Container id="contact" className="bg-light py-5">
                <Row className="justify-content-center">
                    <Col md={4}>
                        <h2 className="text-center">Contáctame</h2>
                        <p className="text-center">¡Estoy listo para tu próximo proyecto!</p>
                        <ButtonRgbComponent
                                onClick={handleButtonClick}
                                className="text-center"
                            style={{
                                backgroundColor: '#228B22',
                            }}
                        >Enviar Mensaje</ButtonRgbComponent>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Home;

