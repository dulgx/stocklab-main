import React from 'react';
import './App.css';
import './styles/styles.scss';
import Navigation from './pages/Navigation';
import HeroComponent from './pages/HeroComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/Aboutus';
import Services from './pages/Services';
import Informations from './pages/Informations';
import Instructions from './pages/Instructions';


function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
      <Route path="/" element={<HeroComponent />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path='/services' element={<Services />}/>
        <Route path='/informations' element={<Informations />}/>
        <Route path='/instructions' element={<Instructions />}/>
      </Routes>
    </Router>
  );
}


export default App
