import React from 'react';
import {Routes , Route} from "react-router-dom";
import Navbar from "./Navbar";
import Homepage from "../pages/Homepage";


const HomepageRoutes = () => {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Homepage/>} />
                {/*<Route path="/shop" element={<Shop/>}/>*/}
                {/*<Route path="/catalog" element={<Shop/>}/>*/}
                {/*<Route path="/sport" element={<Shop/>}/>*/}
                <Route path="*" element={<div>NotFound</div>} />
            </Routes>
        </div>
    );
};

export default HomepageRoutes