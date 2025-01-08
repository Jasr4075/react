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
                        O aplicativo oferece treinos adaptados às necessidades específicas de
                        idosos, considerando níveis de mobilidade, condições de saúde e
                        objetivos pessoais. Os exercícios podem ser ajustados conforme o
                        progresso do usuário.
                    </p>
                    <div className="Examples">
                        <div className="Example">
                            <img src="/src/assets/HomeActivoVo.png" alt="Exemplo de treino 1" />
                            <p>Exemplo de treino 1</p>
                        </div>
                        <div className="Example">
                            <img src="/src/assets/HomeActivoVo.png" alt="Exemplo de treino 2" />
                            <p>Exemplo de treino 2</p>
                        </div>
                        <div className="Example">
                            <img src="/src/assets/HomeActivoVo.png" alt="Exemplo de treino 2" />
                            <p>Exemplo de treino 2</p>
                        </div>
                    </div>
                </div>
            </div>
        </WorkoutCustomizationStyled>
    );
};

export default WorkoutCustomization;
