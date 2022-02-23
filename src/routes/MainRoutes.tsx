import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Private } from '../pages/Private';
import { RequireAuth } from '../contexts/Auth/RequireAuth'
import { Login } from '../pages/Login';
import { PageHome } from '../pages/PageHome';

export const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home><PageHome /></Home>} />
            <Route path="/private" element={<RequireAuth><Private /></RequireAuth>} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}