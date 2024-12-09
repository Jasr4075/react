import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import NavbarComponent from '../../components/NavbarComponent';
import ButtonRgbComponent from '../../components/ButtonRgbComponent';
import { Toaster, toast } from 'react-hot-toast';
import './Login.css';

const Login = () => {
    const handleLogin = (e) => {
        e.preventDefault();
        toast.success('Inicio de sesión exitoso');
    };

    return (
        <>
            <NavbarComponent />
            {/* <header className="hero bg-dark text-white py-5">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} className="text-center text-lg-left">
                            <h1>Inicia Sesión</h1>
                            <p className="lead">Accede a todas las funcionalidades de AtivoVo.</p>
                        </Col>
                        <Col lg={6} data-aos="fade-left">
                            <img
                                src="https://th.bing.com/th/id/R.2b376f0f7550b4819ddbe73c17db215a?rik=cKYPzGh7knzSKA&pid=ImgRaw&r=0"
                                alt="Vista previa"
                                className="img-fluid"
                            />
                        </Col>
                    </Row>
                </Container>
            </header> */}

            <Container className="py-5">
                <Row className="justify-content-center">
                    <Col md={6}>
                        <Form onSubmit={handleLogin} className="login-form bg-light p-4 rounded shadow">
                            <h2 className="text-center mb-4">Bienvenido de nuevo</h2>
                            <Form.Group controlId="formBasicEmail" className="mb-3">
                                <Form.Label>Correo electrónico</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Ingresa tu correo"
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword" className="mb-4">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Ingresa tu contraseña"
                                    required
                                />
                            </Form.Group>
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <Form.Check type="checkbox" label="Recuérdame" />
                                <a href="#recuperar" className="text-primary">
                                    ¿Olvidaste tu contraseña?
                                </a>
                            </div>
                            <ButtonRgbComponent type="submit" className="w-100 btn-primary">
                                Iniciar Sesión
                            </ButtonRgbComponent>
                            <div className="text-center mt-3">
                                <p>
                                    ¿No tienes cuenta?{' '}
                                    <a href="#registro" className="text-primary">
                                        Regístrate
                                    </a>
                                </p>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <Toaster />
        </>
    );
};

export default Login;
