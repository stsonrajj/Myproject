import React from 'react';
import PropertyDescription from '../components/PropertyDescription';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PropertyDescriptionPage = () => {
  let params = useParams();
  const[data,setData] = useState("")
  const [data1, setData1] = useState([{
    id: "625b29b687d6137d7d76a7c7",
    img: "abc/abc",
    title: "condo1",
    description: "this is condo",
    price: "1200",
    city: "toronto",
    state: "ontario",
    address: "123,abc street",
    type: "condo",
    rules: "no alcohol",
    amenities: "free wifi",
    bestseller: true
  }])

  useEffect(() => {
    fetch("http://localhost:5001/property/title?title=" + params.name).then(response => response.json()).then(json => {
      setData1(json)
    }).catch(err => {
      console.log(err);
    })
  }, [])
  return (
    <div>

      <header><Header setData={setData}/></header>
      <main><PropertyDescription name={data1[0].title} img={data1[0].img} price={data1[0].price} key={data1[0].id} address={data1[0].address} /></main>
      <footer><Footer /></footer>

    </div>
  );
}

export default PropertyDescriptionPage;
