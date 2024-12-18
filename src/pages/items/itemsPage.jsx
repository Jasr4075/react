import React, { useEffect, useState } from 'react';
import NavbarComponent from '../../components/NavbarComponent';
import ButtonRgbComponent from '../../components/ButtonRgbComponent';
import AosInitializer from '../../plugins/aos';
import { Container, Modal, Carousel } from 'react-bootstrap';
import './ItemsPage.css';

const ItemsPage = () => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(
                    'https://api.mercadolibre.com/sites/MLB/search?q=itens%20de%20academia%20exercicio%20roupa'
                );
                const data = await response.json();
                if (data.results) {
                    setItems(data.results);
                } else {
                    throw new Error('Erro ao obter os dados da API do Mercado Livre');
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchItems();
    }, []);

    const handleShowDetails = (item) => {
        setSelectedItem(item);
    };

    const handleCloseDetails = () => {
        setSelectedItem(null);
    };

    return (
        <>
            <AosInitializer />
            <NavbarComponent />
            <Container className="items-page-container">
                <br /><br />
                <h1 className="items-page-title">Itens de academia disponíveis</h1>
                {loading && <p className="loading-message">Carregando...</p>}
                {error && <p className="error-message">Erro: {error}</p>}
                {!loading && !error && (
                    <div className="items-grid">
                        {items.map((item) => (
                            <div key={item.id} className="item-card" data-aos="fade-up">
                                <img
                                    src={item.thumbnail}
                                    alt={item.title}
                                    className="item-image"
                                    style={{ maxWidth: '100px', maxHeight: '100px' }}
                                />
                                <h2 className="item-name">{item.title}</h2>
                                <p className="item-price">
                                    <strong>Preço:</strong> R$ {item.price.toFixed(2)}
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
                        <Modal.Title>{selectedItem.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Carousel>
                            {selectedItem.pictures && selectedItem.pictures.length > 0 ? (
                                selectedItem.pictures.map((img, index) => (
                                    <Carousel.Item key={index}>
                                        <img
                                            className="d-block w-25 mx-auto"
                                            src={img.url}
                                            alt={`Imagem ${index + 1}`}
                                        />
                                    </Carousel.Item>
                                ))
                            ) : (
                                <Carousel.Item>
                                    <img
                                        className="d-block w-25 mx-auto"
                                        src={selectedItem.thumbnail}
                                        alt="Imagem principal"
                                    />
                                </Carousel.Item>
                            )}
                        </Carousel>
                        <p className="mt-4">
                            <strong>Descrição:</strong> {selectedItem.title}
                        </p>
                        <p>
                            <strong>Preço:</strong> R$ {selectedItem.price.toFixed(2)}
                        </p>
                        <p>
                            <strong>Link para compra:</strong> <a href={selectedItem.permalink} target="_blank" rel="noopener noreferrer">Clique aqui</a>
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <ButtonRgbComponent onClick={handleCloseDetails}>Fechar</ButtonRgbComponent>
                    </Modal.Footer>
                </Modal>
            )}
        </>
    );
};

export default ItemsPage;
