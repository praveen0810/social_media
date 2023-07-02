import { Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import Home from './pages/Home'
const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/" element={<Home />} />

            {/* Add more routes here */}
        </Routes>
    );
};

export default AppRoutes;
