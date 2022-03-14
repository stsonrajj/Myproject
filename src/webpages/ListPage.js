import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import List from '../components/List';
import { useEffect,useState } from 'react';

const ListPage = () => {
  let temp = [];
  let count = 0;
  const [data,setData] = useState([{"id":0,
name: "",
description : "",
list :[]
}
])
useEffect(()=>{
  fetch("http://localhost:5000/property_list").then(response => response.json()).then(json=>{
          json.forEach(element => {
         element.list.forEach(element1 => {
             temp.push(element1);
         });
      });
    setData(temp);

  }).catch(err=>{
    console.log(err);
  })
  
},[])
  return (
    <div>
      <Header />
      <List data = {data}  />
      <Footer />
    </div>
  );
}

export default ListPage;
