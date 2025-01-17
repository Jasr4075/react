import React from 'react';
import { Container } from 'react-bootstrap';
import { Toaster } from 'react-hot-toast';

const Profile = () => {
    return (
        <Container className="py-5">
            <h1>Profile</h1>
            <Toaster />
        </Container>
    );
};

export default Profile;
