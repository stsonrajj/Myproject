import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import SortedProperty from '../components/SortedProperty'
import Sort from '../components/Sort'
import './sortedpropertypage.scss'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SortedPropertyPage = () => {
  let params = useParams();
  const[data,setData] = useState("")
  const [data1,setData1] = useState([{ id: "",
  img: "",
  title: "",
  description: "",
  price: "",
  city: "",
  state: "",
  address: "",
  type: "",
  rules: "",
  amenities: "",
  bestseller: true
}
])
useEffect(()=>{
  fetch("http://localhost:5001/properties/"+params.id).then(response => response.json()).then(json=>{
    setData1(json);
  }).catch(err=>{
    console.log(err);
  })
  
},[])
  return (
    <div>
      <Header  setData={setData}/>
      <div className='p1'>
          <Sort />
      <SortedProperty data = {data1} />
      </div>
      
      <Footer />
    </div>
  );
}

export default SortedPropertyPage;
