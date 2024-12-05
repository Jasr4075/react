import React from "react";
import { Button } from "react-bootstrap";
import styled from 'styled-components';

const CustomButton = styled(Button)`
  background-color: ##4169E1;                    /* Morado oscuro */
  color: white;                                 /* Color del texto */
  border: none;                                 /* Sin bordes */
  padding: 10px 20px;                           /* Espaciado */
  font-size: 16px;                              /* Tamaño de la fuente */
  border-radius: 5px;                           /* Bordes redondeados */
  transition: all 0.3s ease;                    /* Transición para la animación */

  &:hover {
    background-color: #550a8a;                  /* Morado más oscuro al pasar el mouse */
    transform: scale(1.1);                      /* Escala para la animación */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);   /* Sombra al pasar el mouse */
  }

  &:focus {
    outline: none;                              /* Elimina el contorno cuando está en foco */
    box-shadow: 0 0 5px #6a0dad;                /* Agrega un contorno morado */
  }
`;

const ButtonRgbComponent = ({ children, ...props }) => {
  return (
    <CustomButton {...props}>
      {children}
    </CustomButton>
  );
}

export default ButtonRgbComponent;
