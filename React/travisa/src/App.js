import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter > 
    <div className="App">
    <Routes>
        <Route path="/" element={<Home />} />
    </Routes>
    </div>
    </BrowserRouter>

  );
}

export default App;