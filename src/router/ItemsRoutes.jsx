import {Routes, Route } from 'react-router-dom';
import ItemsPage from '../pages/items/itemsPage';
import ItemsDetails from '../pages/items/itemsDetails';

const ItemsRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<ItemsPage />} />
            <Route path="/:id" element={<ItemsDetails />} />
        </Routes>
    );
}

export default ItemsRoutes;