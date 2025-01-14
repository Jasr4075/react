import { Button } from "react-bootstrap";
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CustomButton = styled(Button)`
  background-color: ##4169E1;                    /* Morado oscuro */
  color: white;                                 /* Color del texto */
  border: none;                                 /* Sin bordes */
  padding: 10px 20px;                           /* Espaciado */
  font-size: 16px;                              /* Tamaño de la fuente */
  border-radius: 5px;                           /* Bordes redondeados */
  transition: all 0.3s ease;                    /* Transición para la animación */

  &:hover {
    background-color:rgb(12, 158, 202);                  /* Morado más oscuro al pasar el mouse */
    transform: scale(1.1);                      /* Escala para la animación */
    box-shadow: 0 4px 8px rgb(14, 181, 231);   /* Sombra al pasar el mouse */
  }

  &:focus {
    outline: none;                              /* Elimina el contorno cuando está en foco */
    box-shadow: 0 0 5pxrgb(11, 149, 190);                /* Agrega un contorno morado */
  }
`;

const CButton = ({ children, ...props }) => {
  return (
    <CustomButton {...props}>
      {children}
    </CustomButton>
  );
}
CButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CButton;
