import { Container, Row } from "react-bootstrap";
import CustomCard from "../../components/CustomCard";
import AosInitializer from "../../services/utils/aos";
import CheckTable from "../../components/CheckTable";

const Subscription = () => {
    const cards = [
        {
            title: "Personalização de Treinos",
            subtitle: "Treinos Personalizados",
            text: "Nosso aplicativo oferece treinos adaptados às necessidades específicas dos idosos, levando em consideração níveis de mobilidade, condições de saúde e objetivos pessoais. Os exercícios podem ser ajustados conforme o progresso de cada usuário, garantindo uma evolução contínua e segura.",
            value: "R$ 9,99/mês - Básico",
            links: [{ href: "#", text: "Ver Treinos" }],
        },
        {
            title: "Monitoramento e Feedback",
            subtitle: "Acompanhe Seu Progresso e Mantenha-se Motivado",
            text: "Nosso aplicativo permite o acompanhamento detalhado do seu progresso, oferecendo relatórios claros sobre a frequência dos treinos, calorias queimadas e metas atingidas. Além disso, contamos com lembretes amigáveis para ajudar a manter a regularidade nos exercícios.",
            value: "R$ 19,99/mês - Premium",
            links: [{ href: "#", text: "Saiba Mais" }],
        },
        {
            title: "Convenios com academias e fisioterapeutas",
            subtitle: "Especialistas para   Cuidar de Você",
            text: "Contamos com uma rede de academias e fisioterapeutas parceiros, que oferecem descontos exclusivos para os usuários do nosso aplicativo. Com profissionais qualificados e estrutura adequada, você terá todo o suporte necessário para alcançar seus objetivos com segurança e eficiência.",
            value: "R$ 29,99/mês - Premium",
            links: [{ href: "#", text: "Saiba Mais" }],
        },
    ];

    return (
        <>
            <AosInitializer />
            <Container>
                <h2 className="features-heading" data-aos="fade-up">
                    Planos de Assinatura
                </h2>

                <Row className="justify-content-center">
                    {cards.map((card, i) => (
                        <CustomCard
                            key={i}
                            title={card.title}
                            subtitle={card.subtitle}
                            text={card.text}
                            links={card.links}
                            value={card.value}
                            animation="fade-right"
                        />
                    ))}
                </Row>
                <CheckTable
                    headers={["Recursos", "Básico", "Pro"]}
                    rows={[
                        ["Personalização de Treinos", "✔", "✔"],
                        ["Monitoramento e Feedback", "✔", "✔"],
                        ["Treinos Específicos", "✖", "✔"],
                    ]}
                />
            </Container>
        </>
    );
};

export default Subscription;
