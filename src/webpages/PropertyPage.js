import React from 'react';
import List from '../components/List';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';

const PropertyPage = () => {
  const[data,setData] = useState("")
  return (
    <div>
      <Header setData={setData}/>
      <List />
      <Footer />
    </div>
  );
}

export default PropertyPage;
