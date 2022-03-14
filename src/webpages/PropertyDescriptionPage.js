import React from 'react';
import PropertyDescription from '../components/PropertyDescription';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PropertyDescriptionPage = () => {
    let params = useParams();
    const [data,setData] = useState([{"id":0,
    name: "",
    description : ""
  }
  ])
    useEffect(()=>{
      fetch("http://localhost:5000/best_seller").then(response => response.json()).then(json=>{
        let abc = json.filter((element)=> element.name == params.name)
        setData(abc);
      }).catch(err=>{
        console.log(err);
      })
      
    },[])
  return (
    <div>

        <header><Header /></header>
        <main><PropertyDescription name = {data[0].name} price = {data[0].price} key = {data[0].id} address = {data[0].address} /></main>
        <footer><Footer /></footer>  
      
    </div>
  );
}

export default PropertyDescriptionPage;
