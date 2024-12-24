import { Row } from "react-bootstrap";
import CustomCard from '../CustomCardComponent';

const FeatureCards = () => {
  const cards = [
    {
      title: "Personalização de Treinos",
      subtitle: "Treinos Personalizados para uma Vida Saudável",
      text: "O aplicativo oferece treinos adaptados às necessidades específicas de idosos, considerando níveis de mobilidade, condições de saúde e objetivos pessoais. Os exercícios podem ser ajustados conforme o progresso do usuário.",
      link1: "#",
      link1Text: "Link 1",
      link2: "#",
      link2Text: "Link 2",
    },
    {
      title: "Interface Intuitiva e Amigável",
      subtitle: "Simples, Clara e Feita para Você",
      text: "Uma interface projetada para fácil navegação, com botões grandes, fontes legíveis e opções de assistência por áudio para garantir que os idosos usem o app com conforto e segurança.",
      link1: "#",
      link1Text: "Link 1",
      link2: "#",
      link2Text: "Link 2",
    },
    {
      title: "Monitoramento e Feedback",
      subtitle: "Acompanhe Seu Progresso e Mantenha-se Motivado",
      text: "O app permite o acompanhamento do progresso, oferecendo relatórios simples sobre frequência de treinos, calorias gastas e metas alcançadas. Possui também lembretes amigáveis para manter a regularidade.",
      link1: "#",
      link1Text: "Link 1",
      link2: "#",
      link2Text: "Link 2",
    },
  ];

  return (
    <Row  className="justify-content-center">
      {cards.map((card, i) => (
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
  );
};

export default FeatureCards;
