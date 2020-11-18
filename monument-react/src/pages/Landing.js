import React from 'react';
import '../App.css'
import Navbar from '../components/Landing/Navbar'
import Footer from '../components/Landing/Footer';
import Article from '../components/Landing/Article';
import About from '../components/Landing/About';
import Gallery from '../components/Landing/Gallery';
import Contact from '../components/Landing/Contact';
import Header from '../components/Landing/LandingHeader';

const Landing = (props) =>{
  return (
  <div>
    <Header />
    <Article />
    <About />
    <Gallery />
    <Contact />
    <Footer />
  </div>
  )
};

export default Landing;