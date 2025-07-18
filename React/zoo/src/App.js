import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Website/Pages/Home';
import About from './Website/Pages/About';
import Services from './Website/Pages/Services';
import Errr from './Website/Pages/Errr';
import Contact from './Website/Pages/Contact';
import Our from './Website/Pages/Our';
import Membership from './Website/Pages/Membership';
import Visiting from './Website/Pages/Visiting';
import Testimonial from './Website/Pages/Testimonial';
import Dashboard from './Admin/Apages/Dashboard';
import Animals from './Admin/Apages/Animals';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="*" element={<Errr/>} />
        <Route path="/our" element={<Our/>} />
        <Route path="/membership" element={<Membership/>} />
        <Route path="/visiting" element={<Visiting/>} />
        <Route path="/testimonial" element={<Testimonial/>} />
        <Route path="/contact" element={<Contact/>} />

        {/* Admin path */}
        <Route path="/dash" element={<Dashboard/>}/>
        <Route path="/animals" element={<Animals/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;