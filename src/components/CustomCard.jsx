import { Card, Col } from 'react-bootstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
  title = "Default Title",
  subtitle = "Default Subtitle",
  text = "Default Text",
  links = [],
  animation = "fade-right"
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
            {links.map((link, index) => (
              <Card.Link href={link.href} key={index}>
                {link.text}
              </Card.Link>
            ))}
          </div>
        </Card.Body>
      </StyledCard>
    </Col>
  );
};
CustomCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      text: PropTypes.string
    })
  ),
  animation: PropTypes.string
};

export default CustomCard;