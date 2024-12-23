import React from "react";
import { Card, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledCard = styled(Card)`
  transition: all 0.3s ease;
  height: 100%;

  &.hover-effect:hover {
    transform: scale(1.05);
    border-color: #007bff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const CustomCard = ({
  title,
  subtitle,
  text,
  link1,
  link1Text,
  link2,
  link2Text,
  animation,
}) => {
  return (
    <Col xs={12} sm={6} md={4} className="mb-4" data-aos={animation} style={{ display: 'flex' }}>
      <StyledCard className="hover-effect" style={{ width: "100%" }}>
        <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
            <Card.Text>{text}</Card.Text>
          </div>
          <div>
            <Card.Link href={link1}>{link1Text}</Card.Link>
            <Card.Link href={link2}>{link2Text}</Card.Link>
          </div>
        </Card.Body>
      </StyledCard>
    </Col>
  );
};

CustomCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  text: PropTypes.string.isRequired,
  link1: PropTypes.string,
  link1Text: PropTypes.string,
  link2: PropTypes.string,
  link2Text: PropTypes.string,
  animation: PropTypes.string,
};

CustomCard.defaultProps = {
  subtitle: "",
  link1: "#",
  link1Text: "Link 1",
  link2: "#",
  link2Text: "Link 2",
  animation: "fade-up",
};

export default CustomCard;
