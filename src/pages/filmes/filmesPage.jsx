import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarComponent from '../../components/NavbarComponent';
import ButtonRgbComponent from '../../components/ButtonRgbComponent';
import AosInitializer from '../../plugins/aos';
import { Container } from 'react-bootstrap';

const TMDB_API_URL = 'https://api.themoviedb.org/3/movie/popular';
const TMDB_API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTQ0ZWY0OTdiN2YwNmFiZGE0NmJjNmM2NmIxNTE0NiIsIm5iZiI6MTczNDAwMjkzMy4zNDA5OTk4LCJzdWIiOiI2NzVhYzhmNThhMTJhYzgwMmU4YTQ2NTkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.oRFnD-DVjeEHkP7JoP1HM7QxxDy_n8m0tIPLfGX3VZc',
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
        <>
            <AosInitializer />
            <NavbarComponent />
            <Container className="items-page-container">
                <br /><br />
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
                                    style={{ maxWidth: '200px', maxHeight: '300px' }}
                                />
                                <h2 className="item-name">{movie.title}</h2>
                                <p className="item-rating">
                                    <strong>Avaliação:</strong> {movie.vote_average}/10
                                </p>
                                <ButtonRgbComponent onClick={() => navigate(`/detalhes/${movie.id}`)}>
                                    Mais detalhes
                                </ButtonRgbComponent>
                            </div>
                        ))}
                    </div>
                )}
            </Container>
        </>
    );
};

export default FilmesPage;
