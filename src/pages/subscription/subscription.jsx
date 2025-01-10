import { Container, Row } from "react-bootstrap";
import CustomCard from "../../components/CustomCard";

const Subscription = () => {
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
            links: [{ href: "#", text: "Saiba Mais" }],
        },
        {
            title: "Monitoramento e Feedback",
            subtitle: "Acompanhe Seu Progresso e Mantenha-se Motivado",
            text: "O app permite o acompanhamento do progresso, oferecendo relatórios simples sobre frequência de treinos, calorias gastas e metas alcançadas. Possui também lembretes amigáveis para manter a regularidade.",
            links: [{ href: "#", text: "Saiba Mais" }],
        },
    ];

    return (
        <Container>
            <h2 className="features-heading" data-aos="fade-up">
                Subscription
            </h2>

            <Row className="justify-content-center">
                {cards.map((card, index) => (
                    <CustomCard
                        key={index}
                        title={card.title}
                        subtitle={card.subtitle}
                        text={card.text}
                        links={card.links}
                        animation="fade-right"
                    />
                ))}
            </Row>
        </Container>
    );
};

export default Subscription;
