import React from 'react';
import '../scssfile/sort.scss'
const Sort = () => {
  return (
    <div className = 'filter borber'>
    <div className='others'>
    <div className='form'>
      <h4>Property Name</h4>
      <input className="form-control me-3" type="search" placeholder="Search" aria-label="Search" />
      </div>
      <div className='filter2'>
              <h4>Popular Filter</h4>
              <ul style={{"list-style" : "none"}}>
              <li>
            <label>
                <input className="form-check-input me-1" type="checkbox" value=""/>
                    Lowest to Highest
                </label>
                </li>
                <li>
            <label>
                <input className="form-check-input me-1" type="checkbox" value=""/>
                    Highest to Lowest
                </label>
                </li>
                <li>
            <label>
                <input className="form-check-input me-1" type="checkbox" value=""/>
                    Free Wi-Fi
                </label>
                </li>
                <li>
            <label>
                <input className="form-check-input me-1" type="checkbox" value=""/>
                   Breakfast included
                </label>
                </li>
                <li>
            <label>
                <input className="form-check-input me-1" type="checkbox" value=""/>
                    Swimming Pool
                </label>
                </li>
              </ul>
            </div>
        </div>
      
  </div>
  );
}

export default Sort;
