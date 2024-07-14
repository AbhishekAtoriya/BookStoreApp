import React from 'react';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Freebook from '../components/Freebook';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <div>
        <Navbar />
        <Banner />
        
        <Freebook />
        <Footer />
      </div>
    </>
  );
}

export default Home;
