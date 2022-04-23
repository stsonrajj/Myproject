import React from 'react';
import '../scssfile/propertylist.scss'
import SingleProperty from './SingleProperty';
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'

const PropertyList = () => {
  let params = useParams();
  const [data, setList] = useState([{
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
    fetch("http://localhost:5001/propertybytype").then(response => response.json()).then(json => {
      setList(json)
    }).catch(err => {
      console.log(err);
    })
  }, [])
  return (
    <div className='parent'>
      <h3>Property List</h3>
      <div className='row1'>
        {data.map((element) => {
          return (
            <SingleProperty id={element.id} img={element.img} name={element.type} description={element.description} type = {element.type}  />
          )
        })
        }

      </div>
    </div>
  );
}

export default PropertyList;
