import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

import './style.css';

import Navbar from './components/ Navbar';
import Header from './components/Header';
import Profile from './components/Profile';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header />
      <Navbar />
      <Profile />
      <Education />
      <Experience />
      <Projects />
      <Footer />
    </>
  );
}

export default App;

