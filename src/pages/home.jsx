import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarComponent from '../components/NavbarComponent';

const Home = () => {
    const navigate = useNavigate();

    const goToAbout = () => {
        navigate('/about');
    };

    return (
        <div>
            <container>
                <NavbarComponent />
                <h1>Home</h1>
                <button onClick={goToAbout}>Go to About</button>
            </container>
        </div>
    );
};

export default Home;
