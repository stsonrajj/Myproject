import React from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import PropertyList from '../components/PropertyList';
import BestSellerList from '../components/BestSellerList';
import Header from '../components/Header';
import { useState } from 'react';
const Home = () => {
  const[data,setData] = useState("")
  return (
    <div>
        <Header setData={setData}/>
      <Hero />
  <PropertyList />
  <BestSellerList />
      <Footer />
      
    </div>
  );
}

export default Home;
