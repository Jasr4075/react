import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavbarComp from "../../components/Navbar";
import ButtonRgbComponent from "../../components/ButtonRgbComponent";
import AosInitializer from "../../utils/aos";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const ItemsPageStyled = styled.div`
  .items-page-container {
    padding: 20px;
  }

  .items-page-title {
    text-align: center;
    margin-bottom: 20px;
    font-size: 2rem;
    color: #333;
  }

  .loading-message,
  .error-message {
    text-align: center;
    font-size: 1.2rem;
    color: #ff0000;
  }

  .items-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
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
    transform: translateY(-10px);
  }

  .item-image {
    border-radius: 10px;
    margin-bottom: 10px;
    width: 100%;
    height: auto;
  }

  .item-name {
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: #333;
  }

  .item-rating {
    font-size: 1rem;
    color: #666;
  }

  @media (max-width: 768px) {
    .item-card {
      flex: 1 1 calc(50% - 20px);
    }
  }

  @media (max-width: 480px) {
    .item-card {
      flex: 1 1 100%;
    }

    .items-page-title {
      font-size: 1.5rem;
    }
  }
  .buttom {
    margin-top: auto;
  }
`;

const TMDB_API_URL = "https://api.themoviedb.org/3/movie/popular";
const TMDB_API_OPTIONS = {
  method: "GET",
    headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTQ0ZWY0OTdiN2YwNmFiZGE0NmJjNmM2NmIxNTE0NiIsIm5iZiI6MTczNDAwMjkzMy4zNDA5OTk4LCJzdWIiOiI2NzVhYzhmNThhMTJhYzgwMmU4YTQ2NTkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.oRFnD-DVjeEHkP7JoP1HM7QxxDy_n8m0tIPLfGX3VZc",
    },
};

const FilmesPage = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(TMDB_API_URL, TMDB_API_OPTIONS)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Erro ao obter dados: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                setMovies(data.results);
            })
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    return (
    <ItemsPageStyled>
            <AosInitializer />
            <NavbarComp />
            <Container className="items-page-container">
        <br />
        <br />
                <h1 className="items-page-title">Catálogo de Filmes Populares</h1>
                {loading && <p className="loading-message">Carregando...</p>}
                {error && <p className="error-message">Erro: {error}</p>}
                {!loading && !error && (
                    <div className="items-grid">
                        {movies.map((movie) => (
              <div key={movie.id} className="item-card" data-aos="fade-up">
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                  className="item-image"
                />
                <h2 className="item-name">{movie.title}</h2>
                <p className="item-rating">
                  <strong>Avaliação:</strong> {movie.vote_average}/10
                </p>
                <ButtonRgbComponent
                onClick={() => navigate(`/detalhes/${movie.id}`)}
                >
                  Mais detalhes
                </ButtonRgbComponent>
              </div>
                        ))}
                    </div>
                )}
            </Container>
    </ItemsPageStyled>
    );
};

export default FilmesPage;
