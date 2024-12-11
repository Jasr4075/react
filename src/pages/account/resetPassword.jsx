import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import './ResetPassword.css';

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(false);

        fetch('http://localhost:3333/reset-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Não foi possível enviar o e-mail. Verifique seu e-mail e tente novamente.');
                }
                return response.json();
            })
            .then(() => {
                setSuccess(true);
                setEmail('');
            })
            .catch((err) => {
                setError(err.message);
            });
    };

    return (
        <Container className="reset-password-container">
            <h1 className="reset-password-title">Redefinir Senha</h1>
            <p className="reset-password-instructions">
                Insira seu endereço de e-mail para receber um link de redefinição de senha.
            </p>

            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">E-mail enviado com sucesso. Verifique sua caixa de entrada.</Alert>}

            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formEmail">
                    <Form.Label>Endereço de E-mail</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Insira seu e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-3">
                    Enviar link
                </Button>
            </Form>
        </Container>
    );
};

export default ResetPassword;
