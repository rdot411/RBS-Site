import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Banner from './components/Banner/Banner';
import OurServices from './components/OurServices/OurServices';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import AOS from 'aos';
import { Route, Routes } from 'react-router-dom';

const App = () => {

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  });

  return (
    <main className='overflow-x-hidden'>
      <Navbar/>
      <Home />
      <Banner />
      <OurServices />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;

