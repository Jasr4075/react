import React from 'react';
import { Container, Jumbotron, Button } from 'react-bootstrap';

const Home = () => {
    return (
        <Container className="mt-5">
            <Jumbotron>
                <h1>Welcome to the Home Page</h1>
                <p>
                    This is the home page of our application. Explore the features and learn more about what we offer.
                </p>
                <Button variant="primary" href="/about">
                    Learn More
                </Button>
            </Jumbotron>
        </Container>
    );
};

export default Home;
s