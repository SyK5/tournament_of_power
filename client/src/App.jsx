import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home.jsx";
import Layout from "./components/Layout.jsx";

import "./App.css";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
         
          <Route path="*" element={<h1>notfound</h1>} />
        
        
        </Route>
      </Routes>
    </div>
  );
}

export default App;