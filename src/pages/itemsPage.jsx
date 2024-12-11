import React, { useEffect, useState } from 'react';
import NavbarComponent from '../components/NavbarComponent';
import ButtonRgbComponent from '../components/ButtonRgbComponent';
import { Container, Modal, Carousel } from 'react-bootstrap';
import './ItemsPage.css';

const ItemsPage = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3333/items')
            .then((response) => response.json())
            .then((data) => {
                if (data.type === 'success') {
                    setItems(data.data);
                } else {
                    throw new Error('Error al obtener los datos');
                }
            })
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    const handleShowDetails = (item) => {
        setSelectedItem(item);
    };

    const handleCloseDetails = () => {
        setSelectedItem(null);
    };

    return (
        <>
            <NavbarComponent />
            <Container className="items-page-container">
                <h1 className="items-page-title">Items Disponibles</h1>
                {loading && <p className="loading-message">Cargando...</p>}
                {error && <p className="error-message">Error: {error}</p>}
                {!loading && !error && (
                    <div className="items-grid">
                        {items.map((item) => (
                            <div key={item.id} className="item-card">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="item-image"
                                    style={{ maxWidth: '200px', maxHeight: '200px' }}
                                />
                                <h2 className="item-name">{item.name}</h2>
                                <p className="item-price">
                                    <strong>Precio:</strong> ${item.price}
                                </p>
                                <p className="item-category">
                                    <strong>Categoría:</strong> {item.category.name}
                                </p>
                                <ButtonRgbComponent onClick={() => handleShowDetails(item)}>
                                    Mais detalhes
                                </ButtonRgbComponent>
                            </div>
                        ))}
                    </div>
                )}
            </Container>

            {selectedItem && (
                <Modal show onHide={handleCloseDetails} size="lg" centered>
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedItem.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Carousel>
                            {[selectedItem.image, selectedItem.image].map((img, index) => (
                                <Carousel.Item key={index}>
                                    <img
                                        className="d-block w-100"
                                        src={img}
                                        alt={`Imagen ${index + 1}`}
                                    />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                        <p className="mt-4">
                            <strong>Descripción:</strong> {selectedItem.description}
                        </p>
                        <p>
                            <strong>Precio:</strong> ${selectedItem.price}
                        </p>
                        <p>
                            <strong>Categoría:</strong> {selectedItem.category.name}
                        </p>
                        <p>
                            <strong>Detalles de pago:</strong> Pago disponible con tarjetas de crédito y PIX.
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <ButtonRgbComponent onClick={handleCloseDetails}>Cerrar</ButtonRgbComponent>
                    </Modal.Footer>
                </Modal>
            )}
        </>
    );
};

export default ItemsPage;
