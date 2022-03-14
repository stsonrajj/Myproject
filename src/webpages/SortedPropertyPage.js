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
  const [data,setData] = useState([{"id":0,
  name: "",
  description : "",
  list :[]
}
])
useEffect(()=>{
  fetch("http://localhost:5000/property_list").then(response => response.json()).then(json=>{
    let data1 = json.filter((element)=> element.id == parseInt(params.id))
    setData(data1);
  }).catch(err=>{
    console.log(err);
  })
  
},[])
  return (
    <div>
      <Header />
      <div className='p1'>
          <Sort />
      <SortedProperty data = {data} />
      </div>
      
      <Footer />
    </div>
  );
}

export default SortedPropertyPage;
