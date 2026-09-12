import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Topics from './components/Topics';
import Speakers from './components/Speakers';
import Registration from './components/Registration';
import Sponsors from './components/Sponsors';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Topics />
        <Speakers />
        <Registration />
        <Sponsors />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
