import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Defactofm from './pages/projects/Defactofm'
// import ProjectDetails from './pages/ProjectDetails';

import './App.css';


function App() {
  return (

    <Router> 
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/defactofm" element={<Defactofm />} />
          {/* <Route path="/projects/:id" element={<ProjectDetails />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;