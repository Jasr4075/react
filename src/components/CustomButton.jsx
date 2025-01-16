import { Button } from "react-bootstrap";
import styled from "styled-components";
import PropTypes from "prop-types";

const CustomButton = styled(Button)`
  background-color: ##4169e1;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgb(12, 158, 202);
    transform: scale(1.1);
    box-shadow: 0 4px 8px #0eb5e7;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5pxrgb (11, 149, 190);
  }
`;

const CButton = ({ children, ...props }) => {
  return <CustomButton {...props}>{children}</CustomButton>;
};
CButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CButton;
