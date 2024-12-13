import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import NavbarComponent from '../../components/NavbarComponent';
import ButtonRgbComponent from '../../components/ButtonRgbComponent';
import { Toaster, toast } from 'react-hot-toast';
import ChatBubble from '../../components/chatBubble/ChatBubble';
import CustomCard from '../../components/card/CustomCardComponent';
import AccordionComponent from '../../components/accordion/accordionComponent';
import AosInitializer from '../../plugins/aos';

const Home = () => {
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
      borderRadius: '27px',
      maxHeight: '500px', // Increased image height
      objectFit: 'cover',
      display: 'block',
      margin: '0 auto',
    },
    contact: {
      padding: '2rem 0',
      borderTop: '1px solid #ddd',
    },
    chatBubbleContainer: {
      marginTop: '2rem',
      display: 'flex',
      justifyContent: 'center',
    },
  };

  return (
    <>
      <AosInitializer />

      <NavbarComponent />
      <header id="intro" style={styles.hero}>
        <Container className="h-100">
          <Row className="h-500 align-items-center">
            <Col lg={6}>
              <h1 data-aos="fade-up">ActivoVo</h1>
              <p data-aos="fade-up" data-aos-delay="200">
              Bem-vindo ao seu companheiro de treino para uma vida mais saudável e ativa! Um app feito especialmente para idosos, com treinos personalizados, interface amigável e acompanhamento do seu progresso, tudo ao alcance de um toque.</p>
              <ButtonRgbComponent
                href="/#Características"
                data-aos="fade-up"
                data-aos-delay="400"
                onClick={() => toast.success('Baixando APP...')}
              >
                Baixar Agora
              </ButtonRgbComponent>
            </Col>
          </Row>
        </Container>
      </header>

      <Container id="Características" className="py-5">
        <h2 style={styles.featuresHeading} data-aos="fade-up">Características Principais</h2>
        <Row className="justify-content-center"> 
          {[
            {
              title: 'Personalização de Treinos',
              subtitle: 'Treinos Personalizados para uma Vida Saudável',
              text: 'O aplicativo oferece treinos adaptados às necessidades específicas de idosos, considerando níveis de mobilidade, condições de saúde e objetivos pessoais. Os exercícios podem ser ajustados conforme o progresso do usuário.',
              link1: '#',
              link1Text: 'Link 1',
              link2: '#',
              link2Text: 'Link 2'
            },
            {
              title: 'Interface Intuitiva e Amigável',
              subtitle: 'Simples, Clara e Feita para Você',
              text: 'Uma interface projetada para fácil navegação, com botões grandes, fontes legíveis e opções de assistência por áudio para garantir que os idosos usem o app com conforto e segurança.',
              link1: '#',
              link1Text: 'Link 1',
              link2: '#',
              link2Text: 'Link 2'
            },
            {
              title: 'Monitoramento e Feedback',
              subtitle: 'Acompanhe Seu Progresso e Mantenha-se Motivado',
              text: 'O app permite o acompanhamento do progresso, oferecendo relatórios simples sobre frequência de treinos, calorias gastas e metas alcançadas. Possui também lembretes amigáveis para manter a regularidade.',
              link1: '#',
              link1Text: 'Link 1',
              link2: '#',
              link2Text: 'Link 2'
            },
          ].map((card, i) => (
            <CustomCard
              className="col-md-4 mb-4" 
              key={i}
              title={card.title}
              subtitle={card.subtitle}
              text={card.text}
              link1={card.link1}
              link1Text={card.link1Text}
              link2={card.link2}
              link2Text={card.link2Text}
              animation="fade-right"
            />
          ))}
        </Row>
      </Container>

      <section id="gallery" className="py-4">
        <Container>
          <h2 style={styles.galleryHeading} data-aos="fade-up">Galeria</h2>
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow]}
            spaceBetween={30}
            slidesPerView={1} // Show one image at a time to accommodate larger images
            pagination={{ clickable: true }}
            navigation
            className="mySwiper"
            data-aos="fade-up"
          >
            {[
              "./public/HomeActivoVo.png",
              "./public/Discover.png",
              "./public/Task.png",
              "./public/Pending.png",
              "./public/Exercise.png",
            ].map((imageUrl, index) => (
              <SwiperSlide key={index}>
                <img
                  src={imageUrl}
                  alt={`Imagem ${index + 1}`}
                  style={styles.galleryImg}
                  loading="lazy"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </section>

      <Container id="contact" style={styles.contact}>FAQ
        <AccordionComponent />
        <div style={styles.chatBubbleContainer}>
          <ChatBubble />
        </div>
      </Container>
      <Toaster />
    </>
  );
};

export default Home;

// <!DOCTYPE html>
// <html lang="es">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Bienvenido a Mi Sitio</title>
//     <style>
//         body, html {
//             margin: 0;
//             padding: 0;
//             height: 100%;
//             font-family: Arial, sans-serif;
//             overflow: hidden;
//             background-color: #1a1a1a;
//         }
//         #particles-js {
//             position: absolute;
//             width: 100%;
//             height: 100%;
//             background-color: #1a1a1a;
//             background-image: url('');
//             background-size: cover;
//             background-position: 50% 50%;
//             background-repeat: no-repeat;
//         }
//         .content {
//             position: absolute;
//             top: 50%;
//             left: 50%;
//             transform: translate(-50%, -50%);
//             text-align: center;
//             color: #ffffff;
//             z-index: 1;
//         }
//         h1 {
//             font-size: 3em;
//             margin-bottom: 20px;
//         }
//         p {
//             font-size: 1.2em;
//         }
//     </style>
// </head>
// <body>
//     <div id="particles-js"></div>
//     <div class="content">
//         <h1>Bienvenido a Mi Sitio</h1>
//         <p>Descubre un mundo de posibilidades</p>
//     </div>

//     <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
//     <script>
//         particlesJS('particles-js', {
//             particles: {
//                 number: { value: 80, density: { enable: true, value_area: 800 } },
//                 color: { value: '#ffffff' },
//                 shape: { type: 'circle', stroke: { width: 0, color: '#000000' }, polygon: { nb_sides: 5 } },
//                 opacity: { value: 0.5, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
//                 size: { value: 3, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
//                 line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
//                 move: { enable: true, speed: 6, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } }
//             },
//             interactivity: {
//                 detect_on: 'canvas',
//                 events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
//                 modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
//             },
//             retina_detect: true
//         });
//     </script>
// </body>
// </html>
