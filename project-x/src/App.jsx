
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import HomePage from './components/HomePage';
import About from './components/About';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';


function App() { 
  
  return (


    <Router>
      <div>
        <NavBar/>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
