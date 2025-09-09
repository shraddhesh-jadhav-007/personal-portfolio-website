import React from 'react';
import Hero from './pages/Hero.jsx';
import Navbar from './pages/Navbar.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Education from './pages/Education.jsx';
import Footer from './pages/Footer.jsx';
import Skills from './pages/Skills.jsx';
import Project from './pages/Project.jsx';

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const App = () => {

    useEffect(() => {
        AOS.init({
        duration: 1000,
        once: false,
        });
    }, []);

  return (
    <>
    <Navbar/>
    <Hero/>
    <Education/>
    <About/>
    <Skills/>
    <Project/>
    <Contact/>
    <Footer/>    
    </>
  );
}
export default App;