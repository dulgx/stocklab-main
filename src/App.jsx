import React from 'react';
import './styles/styles.scss';
import './styles/about.scss'
import './styles/news.scss'
import Navigation from './pages/Navigation';
import HeroComponent from './pages/HeroComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/Aboutus';
import News from './pages/News';
import Instructions from './pages/Instructions';
import Services from './pages/Services/Services';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HeroComponent />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path='/services' element={<Services />} />
        <Route path='/news' element={<News />} />
        <Route path='/instructions' element={<Instructions />} />
      </Routes>
    </Router>
  );
}


export default App
