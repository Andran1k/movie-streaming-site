import React from 'react';
import {Routes, Route} from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Homepage from "./Homepage";

const HomepageRoutes = () => (
    <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            {/*<Route path="/shop" element={<Shop/>}/>*/}
            {/*<Route path="/catalog" element={<Shop/>}/>*/}
            {/*<Route path="/sport" element={<Shop/>}/>*/}
            <Route path="*" element={<div>NotFound</div>}/>
        </Routes>
    </>
);

export default HomepageRoutes
