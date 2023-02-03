import { Routes, Route } from 'react-router-dom'
import Auth from "../pages/Auth";
import Main from "../pages/Main";

const AppRouter = () => (
    <Routes>
        <Route path="/login" element={<Auth/>}/>
        <Route path="/" element={<Main/>}/>
        <Route path="*" element={<div>NotFound</div>}/>
    </Routes>
);

export default AppRouter;
