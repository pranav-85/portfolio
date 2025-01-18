import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './navbar.jsx'
import Home from './home.jsx'
import Foot from './footer.jsx'
import About from './about.jsx'
import TechStack from './techstack.jsx'
import Projects from './projects.jsx'
import Contact from './contact.jsx'
import './css/app.css'

function App() {
  return (
    <Router>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tech-stack" element={<TechStack />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Foot />
      </div>
    </Router>
  );
}

export default App;
