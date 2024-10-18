
import './App.css';
import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import Venta from "./Venta";
import Home from "./Home";

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/venta" element={<Venta />} />
    </Routes>
    </div>
  );
}

export default App;
