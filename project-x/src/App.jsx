
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import HomePage from './components/HomePage';
import About from './components/About';
import NavBar from './components/NavBar';


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
