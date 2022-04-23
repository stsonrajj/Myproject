import React from 'react';
import '../scssfile/LogIn.scss'
import SetCookies from '../cookies/SetCookies'
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
  const navigate = useNavigate()
  const [email, setUser] = useState()
  const [password, setPassword] = useState()
  const handleClick = () => {
    let result = { email, password }
    fetch("http://localhost:5001/customer/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(result)
    }).then((response) => {
      if (response.status == 200) {
        response.json().then((json)=>{
          SetCookies.set("login", json, { "path": "/" })
          navigate(`/`)
      })
      } else {
        console.log('error', response.status)
      }
    })
  }
  return (
    <div>
      <div class="login-form">''
        <div className='aa'>
          <h2 class="text-center">Log In</h2>
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Username" required="required" onChange={(e) => { setUser(e.target.value) }} />
          </div>
          <div class="form-group">
            <input type="password" class="form-control" placeholder="Password" required="required" onChange={(e) => { setPassword(e.target.value) }} />
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary btn-block" onClick={handleClick}>Log in</button>
          </div>
          <div class="clearfix">
            <label class="float-left form-check-label"><input type="checkbox" /> Remember me</label>
            <a href="#" class="float-right">Forgot Password?</a>
          </div>
        </div>
        <p class="text-center"><a href="#">Create an Account</a></p>
      </div>
    </div>
  );
}

export default LogIn;
