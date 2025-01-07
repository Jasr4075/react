import { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { Toaster, toast } from 'react-hot-toast';
import CButton from '../../components/CustomButton';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/users/login', {
                email,
                password
            });
            toast.success('Login bem-sucedido');
            // Here you would typically store the token and redirect the user
            console.log('Token:', response.data.token);
            // Example: localStorage.setItem('token', response.data.token);
            // Example: history.push('/dashboard');
        } catch (error) {
            toast.error(error.response?.data?.message || 'Erro ao fazer login. Tente novamente.');
        }
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
            <Container className="py-5" >
                <Row className="justify-content-center">
                    <Col md={4}>
                        <Form onSubmit={handleLogin} style={styles.loginForm}>
                            <h2 style={styles.heading}>Bem-vindo de volta</h2>
                            <Form.Group controlId="formBasicEmail" style={styles.formControl}>
                                <Form.Label style={styles.formLabel}>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Digite seu email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword" style={styles.formControl}>
                                <Form.Label style={styles.formLabel}>Senha</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Digite sua senha"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Group>
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <Form.Check type="checkbox" label="Lembrar-me" />
                                <a href="/login/resetPassword" style={styles.link}>
                                    Esqueceu sua senha?
                                </a>
                            </div>
                            <CButton
                                type="submit"
                                style={styles.button}
                            >
                                Entrar
                            </CButton>
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

