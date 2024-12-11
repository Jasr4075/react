import { Container, Row, Col, Form } from 'react-bootstrap';
import { Toaster, toast } from 'react-hot-toast';
import Aos from 'aos';
import NavbarComponent from '../components/NavbarComponent';
import ButtonRgbComponent from '../components/ButtonRgbComponent';

const Login = () => {
    const handleLogin = (e) => {
        e.preventDefault();
        toast.success('Inicio de sesión exitoso');
    };

    const styles = {
        loginForm: {
            backgroundColor: '#ffffff',
            borderRadius: '15px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            padding: '2rem',
        },
        heading: {
            fontWeight: 'bold',
            color: '#333333',
            marginBottom: '1.5rem',
            textAlign: 'center',
        },
        formLabel: {
            marginBottom: '0.5rem',
        },
        formControl: {
            marginBottom: '1.5rem',
        },
        link: {
            textDecoration: 'none',
            color: '#007bff',
        },
        linkHover: {
            textDecoration: 'underline',
        },
        button: {
            width: '100%',
        },
        textCenter: {
            textAlign: 'center',
            marginTop: '1.5rem',
        },
    };

    return (
        <>
            <NavbarComponent />
            <Container className="py-5">
                <Row className="justify-content-center">
                    <Col md={6}>
                        <Form onSubmit={handleLogin} style={styles.loginForm}>
                            <h2 style={styles.heading}>Bienvenido de nuevo</h2>
                            <Form.Group controlId="formBasicEmail" style={styles.formControl}>
                                <Form.Label style={styles.formLabel}>Correo electrónico</Form.Label>
                                <Form.Control type="email" placeholder="Ingresa tu correo" required />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword" style={styles.formControl}>
                                <Form.Label style={styles.formLabel}>Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Ingresa tu contraseña" required />
                            </Form.Group>
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <Form.Check type="checkbox" label="Recuérdame" />
                                <a href="#recuperar" style={styles.link}>
                                    ¿Olvidaste tu contraseña?
                                </a>
                            </div>
                            <ButtonRgbComponent
                                type="submit"
                                style={styles.button}
                            >
                                Iniciar Sesión
                            </ButtonRgbComponent>
                            <div style={styles.textCenter}>
                                <p>
                                    ¿No tienes cuenta?{' '}
                                    <a href="#registro" style={styles.link}>
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
