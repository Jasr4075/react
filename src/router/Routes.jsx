import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages//account/login';
import Register from '../pages/account/register';
import ResetPassword from '../pages/account/resetPassword';
import ItemsPage from '../pages/items/itemsPage';
import FilmesPage from '../pages/filmes/filmesPage';
import FilmeDetails from '../pages/filmes/filmeDetails';

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
                <Route path="/detalhes/:id" element={<FilmeDetails />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
