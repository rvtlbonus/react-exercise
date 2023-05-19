import React, { useState }from 'react'; 
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Home from './components/Home';
import Discover from './components/Discover';
import FeatStats from './components/FeatStats';
import Contact from './components/Contact';
import Footer from './components/Footer'; 

function App() {
  return (
  
    <Router>
      <Home />
      <Discover />
      <FeatStats />
      <Contact />
      <Footer />
    </Router>

  );
}

export default App;
