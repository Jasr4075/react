import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import NavbarComponent from '../../components/NavbarComponent';
import ButtonRgbComponent from '../../components/ButtonRgbComponent';
import { Toaster, toast } from 'react-hot-toast';
import ChatBubble from '../../components/chatBubble/ChatBubble';
import CustomCard from '../../components/card/CustomCardComponent';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Home.css';

const Home = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
            <NavbarComponent />

            <header id="intro" className="hero bg-dark text-white py-5">
                <Container className="h-100">
                    <Row className="h-500 align-items-center">
                        <Col lg={6}>
                            <h1 data-aos="fade-up">AtivoVo</h1>
                            <p data-aos="fade-up" data-aos-delay="200">Frase o descripción del app</p>
                            <ButtonRgbComponent
                                href="#features"
                                className="btn-primary btn-lg mt-3"
                                data-aos="fade-up"
                                data-aos-delay="400"
                                onClick={() => toast.success('Descargando APK')}
                            >
                                Descargar Ahora
                            </ButtonRgbComponent>
                        </Col>
                        <Col lg={6} className="d-none d-lg-block" data-aos="fade-left" data-aos-delay="600">
                            <img
                                src="https://th.bing.com/th/id/R.2b376f0f7550b4819ddbe73c17db215a?rik=cKYPzGh7knzSKA&pid=ImgRaw&r=0"
                                alt="Vista previa de la app"
                                className="img-fluid"
                            />
                        </Col>
                    </Row>
                </Container>
            </header>

            <Container id="features" className="py-5">
                <h2 className="text-center mb-5" data-aos="fade-up">Características Principales</h2>
                <Row>
                    {[...Array(3)].map((_, i) => (
                        <CustomCard
                            key={i}
                            title={`Título ${i + 1}`}
                            subtitle={`Subtítulo ${i + 1}`}
                            text={`Contenido ${i + 1}`}
                            link1="#"
                            link1Text="Link 1"
                            link2="#"
                            link2Text="Link 2"
                            animation="fade-right"
                        />
                    ))}
                </Row>
            </Container>

            <section id="gallery" className="py-4">
                <Container>
                    <h2 className="text-center mb-4" data-aos="fade-up">Galería</h2>
                    <Swiper
                        modules={[Navigation, Pagination, EffectCoverflow]}
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        navigation
                        className="mySwiper"
                        data-aos="fade-up"
                    >
                        {[
                            "https://img.freepik.com/vetores-premium/modelagem-movel-inteligente-realista-com-exibicao-branca-em-branco-em-fundo-branco_1351951-127.jpg?w=740",
                            "https://img.freepik.com/vetores-premium/modelagem-movel-inteligente-realista-com-exibicao-branca-em-branco-em-fundo-branco_1351951-127.jpg?w=740",
                            "https://img.freepik.com/vetores-premium/modelagem-movel-inteligente-realista-com-exibicao-branca-em-branco-em-fundo-branco_1351951-127.jpg?w=740",
                        ].map((imageUrl, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={imageUrl}
                                    alt={`Imagen ${index + 1}`}
                                    className="img-fluid"
                                    style={{
                                        maxHeight: "400px",
                                        objectFit: "cover",
                                        display: "block", /* Asegura que la imagen se comporte como un bloque */
                                        margin: "0 auto", /* Centra la imagen horizontalmente */
                                    }}
                                    loading="lazy"
                                />

                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Container>
            </section>

            <Container id="contact" className="bg-light py-5">
                <Row className="justify-content-center">
                    <Col md={4}>
                        <h2 className="text-center">Contacto</h2>
                        <p className="text-center">¿Tienes alguna pregunta? ¡Escríbenos!</p>
                        <div className="d-flex justify-content-center">
                            <ButtonRgbComponent
                                onClick={() => toast.success('Mensaje enviado correctamente')}
                                style={{
                                    backgroundColor: '#228B22',
                                }}
                            >
                                Enviar Mensaje
                            </ButtonRgbComponent>
                        </div>
                    </Col>
                </Row>
                <div className="chat-bubble-container">
                    <ChatBubble />
                </div>
            </Container>
            <Toaster />
        </>
    );
};

export default Home;
