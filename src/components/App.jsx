import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import CardList from './CardList/CardList';
import Home from '../pages/Home';
import Alta from '../pages/Alta';
import Contacto from '../pages/Contacto';
import Nosotros from '../pages/Nosotros';


export default function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Alta" element={<Alta />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Nosotros" element={<Nosotros />} />
        </Routes>
        {/*<CardList />*/}
      </MainLayout>
    </Router>
  );
};