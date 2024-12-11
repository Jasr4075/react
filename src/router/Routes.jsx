import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/home';
import Login from '../pages/login';
import Register from '../pages/register';
import ItemsPage from '../pages/itemsPage';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/items" element={<ItemsPage />} />

            </Routes>
        </Router>
    );
};

export default AppRoutes;
