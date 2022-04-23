import React from 'react';
import img4 from '../assets/images/4.jpg'
import '../scssfile/item.scss'
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className="card">
            <div className='row'>
            <div className='col-4'>
            <img className="card-img" src={props.element.img} alt="Card image cap" />
            </div>
            <div className='col-4'>
            <div className="card-body">
              <div className='name'>
                <h5 className="card-title">{props.element.title}</h5><p>{props.element.streetAddress}</p>
                </div>
                <div className='keypoint'>
                  <h6>Amenities</h6>
                  <ul>
                    <li> air port pick-up</li>
                    <li>breakfat meal</li>
                  </ul>
                  </div>
                <div className='rating'>
                <span className="badge bg-success">8.5</span>
                <span><b>Fabulous</b></span>
                </div>
            </div>
                </div>
                <div className='col-4'>
                  <div className='goto'>
                    <span className = 'price'><b> {props.element.price} CAD</b></span>
                    <p className='text-success'>free cancellation</p>
                <Link to={`/description/${props.element.title}`} className="btn btn-primary rounded-pill">Book Now </Link>
                </div>
                </div>
            
            </div>
        </div>
  );
}

export default Item;
