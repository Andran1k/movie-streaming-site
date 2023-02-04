import React from "react";
import { Routes, Route } from 'react-router-dom'
import Auth from "./pages/Auth";
import HomepageRoutes from "./pages/Hompage/HomepageRoutes";

const AppRouter = () => (
    <Routes>
        <Route path="/login" element={<Auth/>}/>
        <Route path="/" element={<HomepageRoutes/>}/>
        <Route path="*" element={<div>NotFound</div>}/>
    </Routes>
);

export default AppRouter;
