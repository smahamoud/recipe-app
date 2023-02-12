import React from "react";
import Home from "./Home";
import Cuisine from "./Cuisine";
import {Route, Routes} from "react-router-dom";

function Pages() {
  return (
    
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine" element={<Cuisine/>} />
        <Route path="/cuisine/Indian" element={<Cuisine/>} />
        <Route path="/cuisine/American" element={<Cuisine/>} />
        <Route path="/cuisine/Chinese" element={<Cuisine/>} />
        <Route path="/cuisine/Japanese" element={<Cuisine/>} />
    </Routes>
    
  )
}

export default Pages