import React from "react";
import './App.css' 
import { Route, Routes } from "react-router-dom";
import Produtos from "./pages/Produtos";
import CadastroProd from "./pages/CadastroProd";


export default (props) => (
<>
    <Routes>
        <Route index element={<Produtos />}/>
        <Route path="/products" element={<CadastroProd />}/>
    </Routes>
</>
    );