import {Routes, Route } from 'react-router-dom';
import WorkoutCustomization from '../pages/home/Features/workoutCustomization';

const PaymentsRoutes = () => {
    return (
        <Routes>
            <Route path="/workout-customization" element={<WorkoutCustomization />} />
        </Routes>
    );
}

export default PaymentsRoutes;