import React from 'react';
import '../scssfile/singleproperty.scss'
import img4 from '../assets/images/4.jpg'
import { Link } from 'react-router-dom';

const SingleProperty = (props) => {
  return (
    <div>
       <div className="col column">
      <img src={props.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.description}</p>
        <Link to ={`propertysorting/${props.type}`} className="btn btn-primary">Search</Link>
        </div>
    </div>
    </div>
  );
}

export default SingleProperty;
