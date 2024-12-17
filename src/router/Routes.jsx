import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/home';
import Login from '../pages//account/login';
import Register from '../pages/account/register';
import ResetPassword from '../pages/account/resetPassword';
import ItemsPage from '../pages/itemsPage';
import FilmesPage from '../pages/filmesPage'

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/login/resetPassword" element={<ResetPassword />} />
                <Route path="/register" element={<Register />} />
                <Route path="/items" element={<ItemsPage />} />
                <Route path="/filmes" element={<FilmesPage />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
