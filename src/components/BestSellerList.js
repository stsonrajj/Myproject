import React from 'react';
import SingleBestSeller from './SingleBestSeller'

import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';


const BestSellerList = () => {
  const [data,setData] = useState([{id : 0,name : "", address : ""}])
  useEffect(()=>{
    fetch("http://localhost:5000/best_seller").then(response => response.json()).then(json=>{
      setData(json);
    }).catch(err=>{
      console.log(err);
    })
    
  },[])
  return (
    <div className='parent'>
    <h3>Best Seller List</h3>
  <div className='row1'>
  {data.map((element)=>{
  return(
    <SingleBestSeller img = {element.img} name = {element.name} key ={element.id}/>
  )
  })
}
    {/* <SingleBestSeller />
    <SingleBestSeller />
    <SingleBestSeller />
    <SingleBestSeller /> */}
   
  </div>
  </div>
  );
}

export default BestSellerList;
