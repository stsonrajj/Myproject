import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import List from '../components/List';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ListPage = () => {
  let temp = [];
  let count = 0;
  let params = useParams();
  const [data, setData] = useState([{
    id: "",
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
  }])

  useEffect(() => {
    let url = (params.variable)?"http://localhost:5001/properties/"+params.variable:"http://localhost:5001/properties"
    fetch(url).then(response => response.json()).then(json => {
      console.log('aaaaaaaaaaaaaaaa',json);
      setData(json)
    }).catch(err => {
      console.log(err);
    })
  }, [])
  return (
    <div>
      <Header setData={setData} />
      <List data={data} />
      <Footer />
    </div>
  );
}

export default ListPage;
