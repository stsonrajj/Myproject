import React from 'react';
import '../scssfile/propertylist.scss'
import SingleProperty from './SingleProperty';
import { useState,useEffect } from 'react';

const PropertyList = () => {
  
  const [list,setList] = useState([{
    "id" : 0,
    "name" : "",
    "description" : "",
    "list" :[]
  }])
  useEffect(()=>{
    fetch("http://localhost:5000/property_list").then(response =>response.json()).then(json=>{
      setList(json)
    }).catch(err=>{
      console.log(err);
    })
  },[])
  return (
    <div className='parent'>
      <h3>Property List</h3>
    <div className='row1'>
    {list.map((element)=>{
          return(
            <SingleProperty id = {element.id} img = {element.img} name = {element.name} description = {element.description} list = {element.list}/>
               )
              })
              }
     
    </div>
    </div>
  );
}

export default PropertyList;
