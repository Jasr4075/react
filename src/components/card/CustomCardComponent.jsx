import React from "react";
import { Card, Col } from "react-bootstrap";
import "./CustomCardComponent.css";

const CustomCard = ({ 
    title, 
    subtitle, 
    text, 
    link1, 
    link1Text, 
    link2, 
    link2Text, 
    animation 
}) => {
    return (
        <Col md={4} className="mb-4" data-aos={animation}>
            <Card
                style={{ transition: "all 0.3s ease", width: "18rem" }}
                className="hover-effect"
            >
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
                    <Card.Text>{text}</Card.Text>
                    <Card.Link href={link1}>{link1Text}</Card.Link>
                    <Card.Link href={link2}>{link2Text}</Card.Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CustomCard;
