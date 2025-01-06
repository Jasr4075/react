import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CButton from "../../components/CustomButton";
import AosInitializer from "../../services/utils/aos";
import { Container } from "react-bootstrap";
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
  .item-price {
    margin: 5px 0;
    color: #555;
  }
  .item-price strong {
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
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(
          "https://api.mercadolibre.com/sites/MLB/search?q=itens%20de%20academia%20exercicio%20roupa"
        );
        if (!response.ok) throw new Error("Erro ao obter os dados da API.");
        const data = await response.json();
        setItems(data.results || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  const handleShowDetails = (id) => {
    navigate(`/items/${id}`);
  };

  return (
    <ItemsPageStyled>
      <AosInitializer />
      <Container className="items-page-container">
        <h1 className="items-page-title">Itens de academia disponíveis</h1>
        {loading && <p className="loading-message">Carregando...</p>}
        {error && <p className="error-message">Erro: {error}</p>}
        {!loading && !error && (
          <div className="items-grid">
            {items.map((item) => (
              <div key={item.id} className="item-card" data-aos="fade-up">
                <img
                  src={item.thumbnail.replace('I.jpg', 'J.jpg')}
                  alt={item.title}
                  className="item-image"
                />
                <h2 className="item-name">
                  {item.title.length > 30
                    ? `${item.title.slice(0, 30)}...`
                    : item.title}
                </h2>
                <p className="item-price">
                  <strong>Preço:</strong> R$ {item.price.toFixed(2)}
                </p>
                <CButton
                  className="buttom"
                  onClick={() => handleShowDetails(item.id)}
                >
                  Mais detalhes
                </CButton>
              </div>
            ))}
          </div>
        )}
      </Container>
    </ItemsPageStyled>
  );
};

export default ItemsPage;
