import React from 'react';
import { Container, Row, Col, Card, Toast, Button } from 'react-bootstrap';
import NavbarComponent from '../../components/NavbarComponent';
import ButtonRgbComponent from '../../components/ButtonRgbComponent';
import { Toaster, toast } from 'react-hot-toast';
import ChatBubble from '../../components/chatBubble/ChatBubble';
import CustomCard from '../../components/card/CustomCardComponent';
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectCoverflow } from "swiper";

const Home = () => {
    React.useEffect(() => {
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
                            <p data-aos="fade-up" data-aos-delay="200">
                                Frase ou descripcion do app
                            </p>
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
                                alt="App Screenshot"
                                className="img-fluid"
                            />
                        </Col>
                    </Row>
                </Container>
            </header>

            <Container id="features" className="py-5">
                <h2 class="text-center mb-5" data-aos="fade-up">Caract.Principais</h2>

                <Row>
                    <CustomCard
                        title="titulo1"
                        subtitle="Subtitulo 1"
                        text="contenido 1."
                        link1="#"
                        link1Text="Link 1"
                        link2="#"
                        link2Text="Link 1"
                        animation="fade-righ"
                    />

                    <CustomCard
                        title="titulo2"
                        subtitle="Subtitulo 2"
                        text="contenido 2."
                        link1="#"
                        link1Text="Link 1"
                        link2="#"
                        link2Text="Link 2"
                        animation="fade-righ"
                    />
                    <CustomCard
                        title="titulo3"
                        subtitle="Subtitulo 3"
                        text="contenido 3."
                        link1="#"
                        link1Text="Link 1"
                        link2="#"
                        link2Text="Link 2"
                        animation="fade-righ"
                    />
                </Row>
            </Container>

            <section id="gallery" className="py-5">
                <Container>
                    <h2 className="text-center mb-5" data-aos="fade-up">
                        Galería
                    </h2>
                    <Swiper
                        effect="coverflow"
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView="auto"
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={{ clickable: true }}
                        navigation={true}
                        modules={[Pagination, Navigation, EffectCoverflow]}
                        className="mySwiper"
                        data-aos="fade-up"
                    >
                        <SwiperSlide>
                            <img
                                src="/placeholder.svg?height=500&width=300"
                                alt="Captura de pantalla 1"
                                className="img-fluid"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="/placeholder.svg?height=500&width=300"
                                alt="Captura de pantalla 2"
                                className="img-fluid"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="/placeholder.svg?height=500&width=300"
                                alt="Captura de pantalla 3"
                                className="img-fluid"
                            />
                        </SwiperSlide>
                    </Swiper>
                </Container>
            </section>

            <Container id="contact" className="bg-light py-5">
                <Row className="justify-content-center">
                    <Col md={4}>
                        <h2 className="text-center">contato</h2>
                        <p className="text-center">contato</p>
                        <div className="d-flex justify-content-center">
                            <ButtonRgbComponent
                                onClick={() => toast.success('ta bien')}
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
