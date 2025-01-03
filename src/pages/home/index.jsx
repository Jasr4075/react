import styled from "styled-components";
import { Container } from "react-bootstrap";
import { Toaster, toast } from "react-hot-toast";
import AosInitializer from "../../utils/aos";
import CButton from "../../components/CustomButton";
import ChatBubble from "../../components/ChatBubble";
import Gallery from "../../components/home/Gallery";
import FeatureCards from "../../components/home/FeatureCards";
import AccordionComp from "../../components/Accordion";

const HomeStyled = styled.div`

  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: left;
    background: linear-gradient(45deg, #4b79a1, #283e51);
    color: white;
  }

  .featuresheading {
    font-size: 2rem;
    margin-bottom: 2rem;
    text-align: center;
  }

  .contact {
    padding: 2rem 0;
    border-top: 1px solid #ddd;
  }

  .chatbubblecontainer {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
  }
`;

const Home = () => {
  return (
    <HomeStyled>
      <AosInitializer />
      <header className="hero" id="intro">
        <Container className="h-100 d-flex align-items-center">
          <div>
            <h1 data-aos="fade-up">ActivoVo</h1>
            <p data-aos="fade-up" data-aos-delay="200">
              Bem-vindo ao seu companheiro de treino para uma vida mais saudável
              e ativa! Um app feito especialmente para idosos, com treinos
              personalizados, interface amigável e acompanhamento do seu
              progresso, tudo ao alcance de um toque.
            </p>
            <div data-aos="fade-up" data-aos-delay="400">
              <CButton
                href="/#características"
                onClick={() => toast.success("Baixando APP...")}
              >
                Baixar Agora
              </CButton>
            </div>
          </div>
        </Container>
      </header>

      <Container id="características" className="py-5">
        <h2 className="featuresheading" data-aos="fade-up">Características</h2>
        <FeatureCards />
      </Container>

      <Gallery id="gallery" />

      <section className="contact" id="contact">
        <AccordionComp />
        <div className="chatbubblecontainer">
          <ChatBubble />
        </div>
      </section>

      <Toaster />
    </HomeStyled>
  );
};

export default Home;
