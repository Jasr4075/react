import { Container, Row, Col, Form } from 'react-bootstrap';
import ButtonRgbComponent from '../../components/ButtonRgbComponent';
import { Toaster, toast } from 'react-hot-toast';

const Register = () => {
    const handleRegister = (e) => {
        e.preventDefault();
        toast.success('Registro bem-sucedido. Bem-vindo!');
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
            <Container className="py-5">
                <Row className="justify-content-center">
                    <Col md={6}>
                        <Form onSubmit={handleRegister} style={styles.formContainer}>
                            <h2 style={styles.formHeading}>Crie sua conta</h2>
                            <Form.Group controlId="formName" className="mb-3">
                                <Form.Label>Nome completo</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Digite seu nome completo"
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formEmail" className="mb-3">
                                <Form.Label>Endereço de e-mail</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Digite seu e-mail"
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formPassword" className="mb-3">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Crie uma senha"
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formConfirmPassword" className="mb-4">
                                <Form.Label>Confirme sua senha</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Repita sua senha"
                                    required
                                />
                            </Form.Group>
                            <div className="mb-4">
                                <Form.Check
                                    type="checkbox"
                                    label="Aceito os termos e condições"
                                    required
                                />
                            </div>
                            <ButtonRgbComponent type="submit" style={styles.button}>
                                Registrar-se
                            </ButtonRgbComponent>
                            <div className="text-center mt-3">
                                <p>
                                    Já tem uma conta?{' '}
                                    <a href="/login" style={styles.link}>
                                        Faça login
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
