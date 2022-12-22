import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Itemscontainer from "./components/Itemscontainer";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      
      <Routes>
        <Route path="/" element={<Itemscontainer/>}/>
        <Route path="/category/:categoryid" element={<Itemscontainer/>}/>
        <Route path="/category/:categoryid" element={<Itemscontainer/>}/>
        <Route path="/category/:categoryid" element={<h1>Testing zapatillas</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
