import React from 'react';
import '../scssfile/propertydescription.scss'
import img4 from '../assets/images/4.jpg'
const PropertyDescription = (props) => {
  return (
    <div>
     
     <div className ='parent'>
            <div className='pr'>
              <div className='desc'>
                <h3>{props.name}</h3>
                <p>3-star Hotel with outdoor pool, near pigeon point beach</p>
                </div>
               
              </div>
            <div className = 'description'>
              <div className='image'>
                  <img src={img4} alt='location' />
              </div>
              <div className='info border'>
              <h5> Amenities</h5>
                  <ul>
                     
                      <li className='text-success'>&#10003;free wifi, &nbsp; </li>
                      <li className='text-success'>&#10003;free Airport pick-up,  &nbsp;</li>
                      <li className='text-success'>&#10003;Jacuzzi,  &nbsp;</li>
                      <li className='text-success'>&#10003;BreakFast Included,  &nbsp;</li>
                      <li className='text-success'>&#10003;swmming pool,  &nbsp;</li>
                      <li className='text-success'>&#10003;spa  &nbsp;</li>
                  </ul>
                  <h5> Services</h5>
                  <ul>
                      <li className='text-success'>&#10003;Baggage storage&nbsp;</li>
                      <li className='text-success'>&#10003;Private check-in/out&nbsp;</li>
                  </ul>
                  <h5>Safety and security</h5>
                  <ul>
                      <li className='text-success'>&#10003;Fire extinguishers&nbsp;</li>
                      <li className='text-success'>&#10003;CCTV in common areas&nbsp;</li>
                  </ul>
                  <div className='desc1 '>
                <span className = 'price'><b> &nbsp; $123 CAD</b></span>
                  <a href="#" className="btn btn-primary rounded-pill">Book Now </a>
                  </div>
              </div>
            </div>
          </div>
    </div>
  );
}

export default PropertyDescription;
