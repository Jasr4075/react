import { Container, Row, Col, Form } from 'react-bootstrap';
import { Toaster, toast } from 'react-hot-toast';
import NavbarComponent from '../../components/NavbarComponent';
import ButtonRgbComponent from '../../components/ButtonRgbComponent';

const Login = () => {
    const handleLogin = (e) => {
        e.preventDefault();
        toast.success('Login bem-sucedido');
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
                            <h2 style={styles.heading}>Bem-vindo de volta</h2>
                            <Form.Group controlId="formBasicEmail" style={styles.formControl}>
                                <Form.Label style={styles.formLabel}>Email</Form.Label>
                                <Form.Control type="email" placeholder="Digite seu email" required />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword" style={styles.formControl}>
                                <Form.Label style={styles.formLabel}>Senha</Form.Label>
                                <Form.Control type="password" placeholder="Digite sua senha" required />
                            </Form.Group>
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <Form.Check type="checkbox" label="Lembrar-me" />
                                <a href="/login/resetPassword" style={styles.link}>
                                    Esqueceu sua senha?
                                </a>
                            </div>
                            <ButtonRgbComponent
                                type="submit"
                                style={styles.button}
                            >
                                Entrar
                            </ButtonRgbComponent>
                            <div style={styles.textCenter}>
                                <p>
                                    Não tem uma conta?{' '}
                                    <a href="/register" style={styles.link}>
                                        Cadastre-se
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
