import React from 'react';
import './App.css';
import './styles/styles.scss';
import Navigation from './pages/Navigation';
import HeroComponent from './pages/HeroComponent';

function App() {

  return (
    <div className='App'>
      <Navigation />
      <HeroComponent />
    </div>
  )
}

export default App
