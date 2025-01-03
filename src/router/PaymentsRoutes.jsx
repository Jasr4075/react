import {Routes, Route } from 'react-router-dom';
import PaymentList from '../pages/payments/PaymentList';

const PaymentsRoutes = () => {
    return (
        <Routes>
            <Route path="/PaymentList" element={<PaymentList />} />
        </Routes>
    );
}

export default PaymentsRoutes;