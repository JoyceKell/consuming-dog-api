import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";


const RootElement = () => {
   return(
       <BrowserRouter>
           <Routes>
           <Route element = {< Main/> }  path="/" exact />
           <Route element = { <About/> }  path="/sobre/:id" />
           </Routes>
       </BrowserRouter>
   )
}

export default RootElement;