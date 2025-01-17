import axios from '../../services/axiosConfig';
import { Toaster, toast } from 'react-hot-toast';
import Cookies from 'js-cookie';

const Profile = () => {
    return (
        <Container className="py-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <div className="profile-form">
                        <h2 className="text-center">Meu Perfil</h2>
                        <div className="text-center mb-4">
                            <img
                                src={userData.profilePic || defaultProfilePic}
                                alt="Profile"
                                className="rounded-circle"
                                style={{ width: '150px', height: '150px' }}
                            />
                            {!userData.profilePic && (
                                <p className="text-muted">Adicione uma foto de perfil</p>
                            )}
                        </div>
                        <Form>
                            <Form.Group controlId="formUsername">
                                <Form.Label>Nome de Usuário</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="username"
                                    value={userData.username}
                                    onChange={handleInputChange}
                                    disabled={!editMode}
                                />
                            </Form.Group>
                            <Form.Group controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={userData.email}
                                    onChange={handleInputChange}
                                    disabled={!editMode}
                                />
                            </Form.Group>
                            <Form.Group controlId="formFullName">
                                <Form.Label>Nome Completo</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="fullName"
                                    value={userData.fullName || ''}
                                    onChange={handleInputChange}
                                    placeholder="Informe seu nome completo"
                                    disabled={!editMode}
                                />
                            </Form.Group>
                            <Form.Group controlId="formPhone">
                                <Form.Label>Telefone</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="phone"
                                    value={userData.phone || ''}
                                    onChange={handleInputChange}
                                    placeholder="Informe seu telefone"
                                    disabled={!editMode}
                                />
                            </Form.Group>
                            <Form.Group controlId="formAddress">
                                <Form.Label>Endereço</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="address"
                                    value={userData.address || ''}
                                    onChange={handleInputChange}
                                    placeholder="Informe seu endereço"
                                    disabled={!editMode}
                                />
                            </Form.Group>
                            {editMode ? (
                                <Button variant="primary" onClick={handleSaveChanges} className="w-100">
                                    Salvar Alterações
                                </Button>
                            ) : (
                                <Button variant="secondary" onClick={handleEditToggle} className="w-100">
                                    Editar Perfil
                                </Button>
                            )}
                        </Form>
                    </div>
                </Col>
            </Row>
            <Toaster />
        </Container>
    );
};

export default Profile;
