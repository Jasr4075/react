import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import ItemsPage from "../pages/items/itemsPage";
import ItemsDetails from "../pages/items/itemsDetails";
import FilmesPage from "../pages/filmes/filmesPage";
import FilmeDetails from "../pages/filmes/filmeDetails";
import AccountRoutes from "./accountRoutes";
import PaymentsRoutes from "./PaymentsRoutes";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account/*" element={<AccountRoutes />} />
        <Route path="/payments/*" element={<PaymentsRoutes />} />
        <Route path="/items" element={<ItemsPage />} />
        <Route path="/items/:id" element={<ItemsDetails />} />
        <Route path="/filmes/*" element={<FilmesPage />} />
        <Route path="/filmedetails/:id" element={<FilmeDetails />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
