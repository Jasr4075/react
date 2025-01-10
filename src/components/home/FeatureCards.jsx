import { Container, Row } from "react-bootstrap";
import CustomCard from "../CustomCard";

const FeatureCards = () => {
  const cards = [
    {
      title: "Personalização de Treinos",
      subtitle: "Treinos Personalizados para uma Vida Saudável",
      text: "O aplicativo oferece treinos adaptados às necessidades específicas de idosos, considerando níveis de mobilidade, condições de saúde e objetivos pessoais. Os exercícios podem ser ajustados conforme o progresso do usuário.",
      links: [{ href: "/home/workout-customization", text: "Treinos" }],
    },
    {
      title: "Interface Intuitiva e Amigável",
      subtitle: "Simples, Clara e Feita para Você",
      text: "Uma interface projetada para fácil navegação, com botões grandes, fontes legíveis e opções de assistência por áudio para garantir que os idosos usem o app com conforto e segurança.",
      links: [{ href: "#", text: "Link 1" }],
    },
    {
      title: "Monitoramento e Feedback",
      subtitle: "Acompanhe Seu Progresso e Mantenha-se Motivado",
      text: "O app permite o acompanhamento do progresso, oferecendo relatórios simples sobre frequência de treinos, calorias gastas e metas alcançadas. Possui também lembretes amigáveis para manter a regularidade.",
      links: [{ href: "#", text: "Link 1" }],
    },
  ];

  return (
    <section id="caracteristicas" className="py-4">
      <Container>
        <br />
        <br />
        <h2 className="featuresheading" data-aos="fade-up">
          Características
        </h2>

        <Row className="justify-content-center">
          {cards.map((card, i) => (
            <CustomCard
              key={i}
              title={card.title}
              subtitle={card.subtitle}
              text={card.text}
              links={card.links}
              animation="fade-right"
            />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FeatureCards;
