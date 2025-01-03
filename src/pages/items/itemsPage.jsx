import { useEffect, useState } from "react";
import CButton from "../../components/CustomButton";
import AosInitializer from "../../utils/aos";
import { Container, Modal, Carousel } from "react-bootstrap";
import styled from "styled-components";

const ItemsPageStyled = styled.div`
  .items-page-container {
    padding: 20px;
    font-family: Arial, sans-serif;
  }

  .items-page-title {
    font-size: 2rem;
    margin-bottom: 20px;
    color: #333;
  }

  .loading-message,
  .error-message {
    font-size: 1.2rem;
    color: #777;
    text-align: center;
  }

  .items-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
  }

  .item-card {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 10px;
    text-align: center;
    transition: transform 0.2s;
    max-width: 200px;
    flex: 1 1 calc(33.333% - 40px);
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .item-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  .item-image {
    border-radius: 10px;
    margin-bottom: 10px;
    width: 100%;
    height: auto;
    max-height: 150px;
    object-fit: cover;
  }

  .item-name {
    font-size: 1.2em;
    margin: 10px 0;
    color: #222;
  }

  .item-price,
  .item-category {
    margin: 5px 0;
    color: #555;
  }

  .item-price strong,
  .item-category strong {
    color: #000;
  }

  .buttom {
    margin-top: auto;
  }
`;

const ItemsPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(
          "https://api.mercadolibre.com/sites/MLB/search?q=itens%20de%20academia%20exercicio%20roupa"
        );
        const data = await response.json();
        if (data.results) {
          setItems(data.results);
        } else {
          throw new Error("Erro ao obter os dados da API do Mercado Livre");
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
    <ItemsPageStyled>
      <AosInitializer />
      <Container className="items-page-container">
        <br />
        <br />
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
                />
                <h2 className="item-name">
                  {item.title.length > 30
                    ? `${item.title.slice(0, 30)}...`
                    : item.title}
                </h2>{" "}
                <p className="item-price">
                  <strong>Preço:</strong> R$ {item.price.toFixed(2)}
                </p>
                <CButton
                  className="buttom"
                  onClick={() => handleShowDetails(item)}
                >
                  Mais detalhes
                </CButton>
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
                      className="d-block w-50 mx-auto"
                      src={img.url}
                      alt={`Imagem ${index + 1}`}
                    />
                  </Carousel.Item>
                ))
              ) : (
                <Carousel.Item>
                  <img
                    className="d-block w-50 mx-auto"
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
              <strong>Link para compra:</strong>{" "}
              <a
                href={selectedItem.permalink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Clique aqui
              </a>
            </p>
          </Modal.Body>
          <Modal.Footer>
            <CButton onClick={handleCloseDetails}>
              Fechar
            </CButton>
          </Modal.Footer>
        </Modal>
      )}
    </ItemsPageStyled>
  );
};

export default ItemsPage;
