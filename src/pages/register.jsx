import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import NavbarComponent from '../components/NavbarComponent';
import ButtonRgbComponent from '../components/ButtonRgbComponent';
import { Toaster, toast } from 'react-hot-toast';

const Register = () => {
    const handleRegister = (e) => {
        e.preventDefault();
        toast.success('Registro exitoso. ¡Bienvenido!');
    };

    const styles = {
        formContainer: {
            backgroundColor: '#ffffff',
            borderRadius: '15px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            padding: '2rem',
        },
        formHeading: {
            fontWeight: 'bold',
            color: '#333333',
            textAlign: 'center',
        },
        button: {
            border: 'none',
            width: '100%',
        },
        link: {
            textDecoration: 'none',
            color: '#0056b3',
        },
    };

    return (
        <>
            <NavbarComponent />
            <Container className="py-5">
                <Row className="justify-content-center">
                    <Col md={6}>
                        <Form onSubmit={handleRegister} style={styles.formContainer}>
                            <h2 style={styles.formHeading}>Crea tu cuenta</h2>
                            <Form.Group controlId="formName" className="mb-3">
                                <Form.Label>Nombre completo</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ingresa tu nombre completo"
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formEmail" className="mb-3">
                                <Form.Label>Correo electrónico</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Ingresa tu correo"
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formPassword" className="mb-3">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Crea una contraseña"
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formConfirmPassword" className="mb-4">
                                <Form.Label>Confirma tu contraseña</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Repite tu contraseña"
                                    required
                                />
                            </Form.Group>
                            <div className="mb-4">
                                <Form.Check
                                    type="checkbox"
                                    label="Acepto los términos y condiciones"
                                    required
                                />
                            </div>
                            <ButtonRgbComponent type="submit" style={styles.button}>
                                Registrarse
                            </ButtonRgbComponent>
                            <div className="text-center mt-3">
                                <p>
                                    ¿Ya tienes cuenta?{' '}
                                    <a href="/login" style={styles.link}>
                                        Inicia sesión
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

export default Register;
