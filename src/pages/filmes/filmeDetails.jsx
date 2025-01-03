import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Carousel, Row, Col } from 'react-bootstrap';
import CButton from '../../components/CustomButton';

const FilmeDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTQ0ZWY0OTdiN2YwNmFiZGE0NmJjNmM2NmIxNTE0NiIsIm5iZiI6MTczNDAwMjkzMy4zNDA5OTk4LCJzdWIiOiI2NzVhYzhmNThhMTJhYzgwMmU4YTQ2NTkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.oRFnD-DVjeEHkP7JoP1HM7QxxDy_n8m0tIPLfGX3VZc',
                    },
                });

                if (!response.ok) {
                    throw new Error(`Erro ao obter dados: ${response.status}`);
                }

                const data = await response.json();
                setMovie(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMovieDetails();
    }, [id]);

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>Erro: {error}</p>;

    return (
        <>
            <Container className="details-page-container">
                <Row className="mt-5">
                    <Col md={8} className="mx-auto">
                        <h1 className="details-page-title text-center">{movie.title}</h1>
                        <Carousel className="mt-4">
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                                    alt={movie.title}
                                />
                            </Carousel.Item>
                        </Carousel>
                        <div className="movie-details mt-4">
                            <p>
                                <strong>Descrição:</strong> {movie.overview || 'Descrição não disponível.'}
                            </p>
                            <p>
                                <strong>Avaliação:</strong> {movie.vote_average}/10
                            </p>
                            <p>
                                <strong>Data de Lançamento:</strong> {movie.release_date}
                            </p>
                        </div>
                        <div className="text-center mt-4">
                            <CButton onClick={() => navigate(-1)}>Voltar</CButton>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default FilmeDetails;
