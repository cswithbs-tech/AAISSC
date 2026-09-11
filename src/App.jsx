import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Topics from './components/Topics';
import Speakers from './components/Speakers';
import Registration from './components/Registration';
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
      </main>
      <Footer />
    </>
  );
}

export default App;
