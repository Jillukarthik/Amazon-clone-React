import React from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import {BrowserRouter as Router, Routes, Route}
from "react-router-dom";
import Checkout from "./Checkout";


function App() {
  return (
    <Router>
      <Header />
    <div className="App">
      <Routes>
       <Route path="/checkout" element={<Checkout />} />
       
      
       <Route path="/" element={ <Header />} element={<Home />} />
      

      </Routes>
    </div>
    </Router>
  );
}

export default App;
