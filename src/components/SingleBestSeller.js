import React from 'react';
import '../scssfile/singlebestseller.scss'
import img4 from '../assets/images/4.jpg'
import { Link } from 'react-router-dom';

const SingleBestSeller = (props) => {
  return (
    <div>
    <div className="col-xxl-1 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12 column1">
   <img src={props.img} className="card-img-top" alt="..." />
   <div className="card-body">
     <h5 className="card-title">{props.name}</h5>
     <p className="card-text">hello</p>
     <Link to={`/description/${props.name}`} className="btn btn-primary">Search</Link>
     </div>
 </div>
 </div>
  );
}

export default SingleBestSeller;
