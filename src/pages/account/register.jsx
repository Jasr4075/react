import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import CButton from '../../components/CustomButton';
import { Toaster, toast } from 'react-hot-toast';
import axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error('As senhas não coincidem.');
            return;
        }
        try {
            const response = await axios.post('http://localhost:3000/api/users/register', {
                username,
                email,
                password
            });
            toast.success('Registro bem-sucedido. Bem-vindo!');
            // You might want to redirect the user or update the app state here
        } catch (error) {
            toast.error(error.response?.data?.message || 'Erro ao registrar. Tente novamente.');
        }
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
                                <Form.Label>Nome de usuário</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Digite seu nome de usuário"
                                    required
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group controlId="formEmail" className="mb-3">
                                <Form.Label>Endereço de e-mail</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Digite seu e-mail"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group controlId="formPassword" className="mb-3">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Crie uma senha"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group controlId="formConfirmPassword" className="mb-4">
                                <Form.Label>Confirme sua senha</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Repita sua senha"
                                    required
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </Form.Group>
                            <div className="mb-4">
                                <Form.Check
                                    type="checkbox"
                                    label="Aceito os termos e condições"
                                    required
                                />
                            </div>
                            <CButton type="submit" style={styles.button}>
                                Registrar-se
                            </CButton>
                            <div className="text-center mt-3">
                                <p>
                                    Já tem uma conta?{' '}
                                    <a href="/account/login" style={styles.link}>
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

