import React from 'react';
import '../scssfile/registration.scss'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Registration = () => {
    const navigate = useNavigate()
    const [customerName, setName] = useState("")
    const [eMail, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [customerAddress, setAddress] = useState("")
    const handleClick = () => {
        let result = { customerName, eMail, password, customerAddress }
        fetch("http://localhost:5001/customer", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(result)
        }).then((response) => {
            if (response.status == 200) {
                navigate('/login')
            } else {
                alert('Invalid')
            }
        })
    }
    return (
        <div class="container">
            <div class="row">
                <div class="col-md-6 offset-md-3">
                    <div class="signup-form">
                        <div className="mt-5 border p-4 bg-light shadow">
                            <h4 class="mb-5 text-secondary">Create Your Account</h4>
                            <div class="row">
                                <div class="mb-3 col-md-6">
                                    <label>Name<span class="text-danger">*</span></label>
                                    <input type="text" name="fname" class="form-control" placeholder="Enter Name" onChange={(e) => { setName(e.target.value) }} />
                                </div>

                                <div class="mb-3 col-md-6">
                                    <label>Email<span class="text-danger">*</span></label>
                                    <input type="text" name="Lname" class="form-control" placeholder="Enter EmailID" onChange={(e) => { setUser(e.target.value) }} />
                                </div>
                                <div class="mb-3 col-md-12">
                                    <label>Address<span class="text-danger">*</span></label>
                                    <input type="text" name="Lname" class="form-control" placeholder="Enter Address" onChange={(e) => { setAddress(e.target.value) }} />
                                </div>
                                <div class="mb-3 col-md-12">
                                    <label>Password<span class="text-danger">*</span></label>
                                    <input type="password" name="password" class="form-control" placeholder="Enter Password" onChange={(e) => { setPassword(e.target.value) }} />
                                </div>
                                <div class="mb-3 col-md-12">
                                    <label>Confirm Password<span class="text-danger">*</span></label>
                                    <input type="password" name="confirmpassword" class="form-control" placeholder="Confirm Password" />
                                </div>
                                <div class="col-md-12">
                                    <button class="btn btn-primary float-end" onClick={handleClick}>Signup Now</button>
                                </div>
                            </div>
                        </div>
                        <p class="text-center mt-3 text-secondary">If you have account, Please <a href="#">Login Now</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Registration;
