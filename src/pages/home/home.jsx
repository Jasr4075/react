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

const styles = {
  hero: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'left',
    background: 'linear-gradient(45deg, #4b79a1, #283e51)',
    color: 'white',
  },
  featuresHeading: {
    fontSize: '2rem',
    marginBottom: '2rem',
  },
  card: {
    border: 'none',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  cardHover: {
    transform: 'translateY(-10px)',
    boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
  },
  galleryHeading: {
    fontSize: '2rem',
    marginBottom: '2rem',
  },
  gallerySwiper: {
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto',
  },
  galleryImg: {
    borderRadius: '8px',
    maxHeight: '400px',
    objectFit: 'cover',
    display: 'block',
    margin: '0 auto',
  },
  contact: {
    backgroundColor: '#f9f9f9',
    padding: '2rem 0',
    borderTop: '1px solid #ddd',
  },
  contactHeading: {
    marginBottom: '1rem',
    fontSize: '1.8rem',
  },
  contactText: {
    marginBottom: '1.5rem',
    color: '#555',
  },
  chatBubbleContainer: {
    marginTop: '2rem',
    display: 'flex',
    justifyContent: 'center',
  },
  buttonPrimary: {
    backgroundColor: '#0066ff',
    border: 'none',
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
  },
};

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <NavbarComponent />
      <header id="intro" style={styles.hero}>
        <Container className="h-100">
          <Row className="h-500 align-items-center">
            <Col lg={6}>
              <h1 data-aos="fade-up">ActivoVo</h1>
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
          </Row>
        </Container>
      </header>

      <Container id="Características" className="py-5">
        <h2 style={styles.featuresHeading} data-aos="fade-up">Características Principales</h2>
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
          <h2 style={styles.galleryHeading} data-aos="fade-up">Galería</h2>
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
                  style={styles.galleryImg}
                  loading="lazy"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </section>

      <Container id="contact" style={styles.contact}>
        <Row className="justify-content-center">
          <Col md={4}>
            <h2 style={styles.contactHeading}>Contacto</h2>
            <p style={styles.contactText}>¿Tienes alguna pregunta? ¡Escríbenos!</p>
            <div className="d-flex justify-content-center">
              <ButtonRgbComponent
                onClick={() => toast.success('Mensaje enviado correctamente')}
                style={{ backgroundColor: '#228B22' }}
              >
                Enviar Mensaje
              </ButtonRgbComponent>
            </div>
          </Col>
        </Row>
        <div style={styles.chatBubbleContainer}>
          <ChatBubble />
        </div>
      </Container>
      <Toaster />
    </>
  );
};

export default Home;
