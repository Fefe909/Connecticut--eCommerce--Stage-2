import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Alta from '../pages/Alta';
import Contacto from '../pages/Contacto';
import Nosotros from '../pages/Nosotros';


export default function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Alta" element={<Alta />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
};