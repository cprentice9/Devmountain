import React from "react";
import "./App.css";
import Header from "./Header.js";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    // BEM
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={[<Header />, <Home />]} />

          <Route path="/checkout" element={<Header />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
