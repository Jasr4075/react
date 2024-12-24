import styled from "styled-components";
import { Container } from "react-bootstrap";
import { Toaster, toast } from "react-hot-toast";
import AosInitializer from "../plugins/aos";
import NavbarComp from "../components/Navbar";
import ButtonRgbComponent from "../components/ButtonRgbComponent";
import ChatBubble from "../components/ChatBubble";
import Gallery from "../components/home/Gallery";
import FeatureCards from "../components/home/FeatureCards";
import AccordionComp from "../components/Accordion";

const StyledComponents = {
  Hero: styled.header`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: left;
    background:
     linear-gradient(45deg, #4b79a1, #283e51);
    color: white;
  `,
  FeaturesHeading: styled.h2`
    font-size: 2rem;
    margin-bottom: 2rem;
    text-align: center;
  `,
  Contact: styled.div`
    padding: 2rem 0;
    border-top: 1px solid #ddd;
  `,
  ChatBubbleContainer: styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: center;
  `
};

const { Hero, FeaturesHeading, Contact, ChatBubbleContainer } = StyledComponents;

const Home = () => {
  return (
    <>
      <AosInitializer />

      <NavbarComp />
      <Hero id="intro">
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
              <ButtonRgbComponent
                href="/#Características"
                onClick={() => toast.success("Baixando APP...")}
              >
                Baixar Agora
              </ButtonRgbComponent>
            </div>
          </div>
        </Container>
      </Hero>

      <Container id="Características" className="py-5">
        <FeaturesHeading data-aos="fade-up">Características</FeaturesHeading>
        <FeatureCards />
      </Container>

      <Gallery id="gallery" />

      <Contact id="contact">
        <AccordionComp />
        <ChatBubbleContainer>
          <ChatBubble />
        </ChatBubbleContainer>
      </Contact>

      <Toaster />
    </>
  );
};

export default Home;
