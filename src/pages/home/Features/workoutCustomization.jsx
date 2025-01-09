import styled from "styled-components";
import CButton from "../../../components/CustomButton";

const WorkoutCustomizationStyled = styled.div`
  .WorkoutCustomizationContainer {
    padding: 20px;
    text-align: center;
    background-color: #f9f9f9;
  }
  .Header {
    margin-bottom: 20px;
    .h1 {
      font-size: 2.5rem;
      margin-bottom: 10px;
    }
    .h2 {
      font-size: 1.5rem;
      color: #666;
    }
  }
  .Content {
    p {
      font-size: 1.1rem;
      margin-bottom: 20px;
    }
  }
  .Examples {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 20px;
  }
  .Example {
    text-align: center;
    max-width: 200px;
    img {
      width: 100%;
      height: auto;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    p {
      margin-top: 10px;
      font-size: 1rem;
    }
  }
`;

const WorkoutCustomization = () => {
  return (
    <WorkoutCustomizationStyled>
      <div className="WorkoutCustomizationContainer">
        <div className="Header">
          <h1 className="h1">Personalização de Treinos</h1>
          <h2 className="h2">Treinos Personalizados para uma Vida Saudável</h2>
        </div>
        <div className="Content">
          <p>
            {" "}
            O aplicativo oferece treinos personalizados para idosos,
            cuidadosamente adaptados às suas necessidades específicas. Ele
            considera diversos fatores, como níveis de mobilidade, condições de
            saúde preexistentes (como artrite, osteoporose ou problemas
            cardíacos) e objetivos pessoais, seja melhorar a flexibilidade,
            aumentar a força ou manter a independência nas atividades diárias.
            Os exercíciosncluem instruções detalhadas e vídeos demonstrativos
            para garantir a execução correta, e podem ser ajustados
            dinamicamente conforme o progresso do usuário, garantindo um enfoque
            seguro e eficaz. Além disso, o aplicativo permite o monitoramento do
            progresso com relatórios periódicos e lembretes personalizados para
            manter a motivação e a continuidade na rotina de exercícios.
          </p>
          <div className="Examples">
            <div className="Example">
              <img
                src="/src/assets/HomeActivoVo.png"
                alt="Exemplo de treino 1"
              />
              <p>Exemplo de treino 1</p>
            </div>
            <div className="Example">
              <img
                src="/src/assets/HomeActivoVo.png"
                alt="Exemplo de treino 2"
              />
              <p>Exemplo de treino 2</p>
            </div>
            <div className="Example">
              <img
                src="/src/assets/HomeActivoVo.png"
                alt="Exemplo de treino 2"
              />
              <p>Exemplo de treino 2</p>
            </div>
          </div>
        </div>
      </div>
    </WorkoutCustomizationStyled>
  );
};

export default WorkoutCustomization;
