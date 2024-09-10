import { Routes, Route } from "react-router-dom";
import Login from "./Components/login";
import React from "react";
import Goods from "./Components/goods";
import Header from "./Components/header";


function App() {
 


  return (
    <>
    <Header/>
      <Routes>
            <Route path="/goods" element={<Goods/>} />
            <Route path="/login" element={<Login />} />
      </Routes>
    </>
   
  
  );
}

export default App;

