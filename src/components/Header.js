import React from 'react';
import '../scssfile/header.scss'
import {Link} from 'react-router-dom'
import SetCookies from '../cookies/SetCookies';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Header = ({setData}) => {
  const params = useParams()
  const navigate = useNavigate();
  const[flag,setFlag] = useState(false)
  useEffect(()=>{
      if(SetCookies.get('login')){
        setFlag(true)
      }else{
        setFlag(false)
      }
  },[])
  const logOut = (event)=>{
    event.preventDefault();
    SetCookies.remove('login');
    setFlag(false)
    navigate('/');
  }

  const [data,setData1] = useState("")
const handleClick = ()=>{
  fetch(`http://localhost:5001/properties/${data}`).then(response => response.json()).then(json=>{
    setData(json)
    navigate(`/propertylisting/${data}`);
  }).catch(err=>{
    console.log(err);
  })

}
  return (
    (flag)?(
    <div>
 <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to ='/propertylisting'>Property</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to ='/dashboard'>DashBoard</Link>
        </li>
        <li className="nav-item dropdown">
          <button className="dropbtn" onClick={logOut}>logout</button>
        </li>
      
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"  onChange={(e)=>{setData1(e.target.value)}}/>
        <button className="btn btn-outline-success" type="submit" onClick={handleClick}>Search</button>
      </form>
    </div>
  </div>
</nav>
</div>):(
   <div>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to ='/propertylisting'>Property</Link>
          </li>
          <li className="nav-item dropdown">
          <div className="dropdown">
            <button className="dropbtn">Login/Signup</button>
          <div className="dropdown-content">
              <Link to="/login">Login</Link>
              <Link to="/sign-up">Signup</Link>
        </div>
        </div>
          </li>
        
        </ul>
        <div className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>{setData1(e.target.value)}}/>
          <button className="btn btn-outline-success" type="submit" onClick={handleClick}>Search</button>
        </div>
      </div>
    </div>
  </nav>
</div>
)
  );
}

export default Header;
