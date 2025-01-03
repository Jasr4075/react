import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import CButton from "../../components/CustomButton";

const ItemsDetails = () => {
  const { id } = useParams(); // Obtém o ID do item da URL
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const response = await fetch(
          `https://api.mercadolibre.com/items/${id}`
        );
        if (!response.ok) throw new Error("Erro ao carregar os detalhes do item.");
        const data = await response.json();
        setItem(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItemDetails();
  }, [id]);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Container>
      <h1>{item.title}</h1>
      <img
        src={item.pictures?.[0]?.url || item.thumbnail}
        alt={item.title}
        style={{ maxWidth: "100%", borderRadius: "10px", marginBottom: "20px" }}
      />
      <p>
        <strong>Preço:</strong> R$ {item.price.toFixed(2)}
      </p>
      <p>
        <strong>Descrição:</strong> {item.description || "Sem descrição disponível."}
      </p>
      <p>
        <strong>Link para compra:</strong>{" "}
        <a href={item.permalink} target="_blank" rel="noopener noreferrer">
          Clique aqui
        </a>
      </p>
      <CButton onClick={() => window.history.back()}>Voltar</CButton>
    </Container>
  );
};

export default ItemsDetails;
