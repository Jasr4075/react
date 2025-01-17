import { Routes, Route } from 'react-router-dom';
import Login from '../pages/account/login';
import Register from '../pages/account/register';
import Profile from '../pages/account/profile';
// import ResetPassword from '../pages/account/resetPassword';

const AccountRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            {/* <Route path="/login/resetPassword" element={<ResetPassword />} /> */}
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />

        </Routes>
    );
};

export default AccountRoutes;
