import React from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import PropertyList from '../components/PropertyList';
import BestSellerList from '../components/BestSellerList';
import Header from '../components/Header';

const Home = () => {
  return (
    <div>
        <Header />
      <Hero />
  <PropertyList />
  <BestSellerList />
      <Footer />
      
    </div>
  );
}

export default Home;
