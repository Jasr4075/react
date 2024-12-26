import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './router/Routes';
import NavbarComp from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';





ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <NavbarComp />
        <AppRoutes />
    </React.StrictMode>
);
